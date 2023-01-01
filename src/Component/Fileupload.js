import React from "react";

// login
const Upload = () => {
  return (
    <>
      <div className="card bg-info">
        <div className="card-body">
          <div className="col-md-3"></div>
          <div className="col-md-6 p-3 ">
            <h3 className="display-1 float-right mb-3">Upload File</h3>
            <form
              id="uploadForm"
              action="http://localhost:5000/user/upload"
              method="post"
              encType="multipart/form-data"
            >
              <input type="file" name="sampleFile" className="form-control" />
              <input
                type="submit"
                value="Upload!"
                className="btn btn-danger mt-3"
              />
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
export default Upload;
