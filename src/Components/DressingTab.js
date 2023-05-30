import React, { useState, useEffect } from "react";
import DressingCamera from "./DressingCamera";
import Background from "./Images/MainBack.jpg";
import VideoInput from "./VideoInput";
import PhotoInput from "./PhotoInput";

const DressingTab = () => {
  const [pageContent, setPageContent] = useState(
    "Welcome! To AR Dressing Room 😊"
  );
  const [showFloatingAnimation, setShowFloatingAnimation] = useState(true);
  const [showZoomOutEffect, setShowZoomOutEffect] = useState(true);

  const handleChangePhoto = () => {
    setPageContent("Upload Photo");
  };

  const handleChangeVideo = () => {
    setPageContent("Upload Video");
  };

  const handleChangeLive = () => {
    setPageContent("Check Live");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingAnimation(false);
      setShowZoomOutEffect(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes floating {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(0, 10px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes zoom-out {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.2);
            }
          }

          .animated-background {
            animation: ${
              showFloatingAnimation ? "floating 2s ease-in-out" : "none"
            };
          }
        `}
      </style>
      <div
        className={`animated-background ${
          showZoomOutEffect ? "zoom-out-effect" : ""
        }`}
        style={{
          backgroundImage: `url(${Background})`,
          width: "100vw",
          height: "130vh",
        }}
      >
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <button
              className="btn btn-primary my-3"
              onClick={handleChangePhoto}
            >
              Upload Photo
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary mx-2 my-3"
              onClick={handleChangeVideo}
            >
              Upload Video
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary my-3" onClick={handleChangeLive}>
              Live Video check
            </button>
          </li>
        </ul>
        <h1 className="text-center">{pageContent}</h1>
        <div className="position absolute">
          {pageContent === "Check Live" && <DressingCamera />}
          {pageContent === "Upload Video" && <VideoInput />}
          {pageContent === "Upload Photo" && <PhotoInput />}
        </div>
      </div>
    </>
  );
};

export default DressingTab;
