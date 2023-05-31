import React, { useState } from "react";
import "./FileInput.css";

const PhotoInput = () => {
  const [fileName, setFileName] = useState("");
  const [isValidFile, setIsValidFile] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileExtension = "." + file.name.split(".").pop().toLowerCase();
    const validExtensions = [".jpg", ".png", ".jpeg", ".bmp"];

    if (validExtensions.includes(fileExtension)) {
      setFileName(file.name);
      setIsValidFile(true);
    } else {
      setFileName("");
      setIsValidFile(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    // For example, you can send the video file to a server
  };

  return (
    <div className="container container-input">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="center">
            <h1 className="white my-4">Upload Your Photo Here</h1>
          </div>

          <form
            name="upload"
            method="post"
            action="#"
            encType="multipart/form-data"
            acceptCharset="utf-8"
            onSubmit={handleSubmit}
          >
            <div className="center">
              <div className="btn-container">
                <h1 className="imgupload">
                  <i className="fa fa-file-image-o"></i>
                </h1>
                <h1 className="imgupload ok">
                  <i className="fa fa-check"></i>
                </h1>
                <h1 className="imgupload stop">
                  <i className="fa fa-times"></i>
                </h1>
                <p id="namefile">
                  {isValidFile
                    ? fileName
                    : "Only pics allowed! (jpg,jpeg,bmp,png)"}
                </p>
                <label htmlFor="fileup" className="btn btn-primary1 btn-lg">
                  Browse for your pic!
                </label>
                <input
                  type="file"
                  value=""
                  name="fileup"
                  id="fileup"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="center">
              <input
                type="submit"
                value="Submit!"
                className="btn btn-primary1"
                id="submitbtn"
                disabled={!isValidFile}
              />
              <button
                type="button"
                className="btn btn-default"
                disabled="disabled"
                id="fakebtn"
              >
                Submit! <i className="fa fa-minus-circle"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhotoInput;
