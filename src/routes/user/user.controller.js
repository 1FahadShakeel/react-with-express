const express = require("express");
const authHandler = require("../../middleware/auth");
const errorHandler = require("../../middleware/error");
const User = require("../../models/User");
const { generateAuthToken } = require("../../utils/helpers");
const createUserSchema = require("./validationSchema");

const router = express.Router();

router.get(
  "/",authHandler,
  errorHandler(async (req, res) => {
    const user = await User.find();
    res.status(200).send(user);
  })
);

router.get(
  "/:userId",
  errorHandler(async (req, res) => {
    const user = await User.findOne({ CNIC: req.params.userId });

    res.status(200).send(user);
  })
);


router.post("/", async (req, res) => {
  const payload = req.body;
  const { error } = createUserSchema(payload);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  let user = new User(payload);

  user = await user.save();
  res.status(200).send({ user });
});



router.post("/login", async (req, res) => {
  console.log('heree')
  const user = await User.findOne({ email: req.body.email });
  console.log(user.name)
  if (!user) {
    return res.status(400).send({ message: "Invalid Email or Password" });
  }

  if (req.body.password !== user.password) {
    return res.status(400).send({ message: "Invalid Email or Password" });
  }

  const token = generateAuthToken({
    email: user.email,
    name : user.name
  });


  res.status(200).send({ message: "success", token  });
});

router.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/pictures/' + sampleFile.name;
  img = {
    data: uploadPath,
    contentType: 'image/png'
}

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    
    res.send('File uploaded!');
  });
});


module.exports = router;