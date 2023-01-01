const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: Storage }).single("testImage");
  
  router.post("/upload", async (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).send({ message: "Error" });
      } else {
        const newUser = new User({
          image: {
            date: req.file.filename,
            contentType: "image/png",
          },
        });
        newUser
          .save()
          .then(() => res.status(200).send({ message: "success" }))
          .catch((err)=>  res.status(400).send({ message: err })
          );
      }
    });
  });
  module.exports = router;