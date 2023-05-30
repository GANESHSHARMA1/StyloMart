import React, { useEffect, useRef, useState } from "react";

const DressingCamera = () => {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const startCamera = () => {
      // Check if the browser supports getUserMedia
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function (stream) {
            // Set the video source to the stream from the camera
            videoElement.srcObject = stream;
          })
          .catch(function (error) {
            console.error("Error accessing the camera:", error);
          });
      } else {
        console.error("getUserMedia is not supported by this browser.");
      }
    };

    const stopCamera = () => {
      const stream = videoElement.srcObject;
      if (stream) {
        const tracks = stream.getTracks();

        tracks.forEach((track) => track.stop());
        videoElement.srcObject = null;
      }
    };

    if (isCameraOn) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isCameraOn]);

  const handleToggleCamera = () => {
    setIsCameraOn((prevState) => !prevState);
  };

  return (
    <div className="camera-container">
      <video ref={videoRef} autoPlay></video>
      <button className="btn btn-success" onClick={handleToggleCamera}>
        {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
    </div>
  );
};

export default DressingCamera;
