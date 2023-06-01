import React, { useState, useEffect } from "react";
import DressingCamera from "./DressingCamera";
import Background from "./Images/MainBack.png";
import VideoInput from "./VideoInput";
import PhotoInput from "./PhotoInput";

const DressingTab = () => {
  const [pageContent, setPageContent] = useState(
    "Welcome! To AR Dressing Room 😊"
  );
  const [showFloatingAnimation, setShowFloatingAnimation] = useState(true);
  const [showZoomOutEffect, setShowZoomOutEffect] = useState(true);

  const handleImageUpload = (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Error occurred during image upload");
        }
      })
      .then((blob) => {
        // Create a URL for the image blob
        const imageUrl = URL.createObjectURL(blob);

        // Use the imageUrl in your React component (e.g., display the image)
        console.log(imageUrl);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };

  const handleChangePhoto = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setPageContent("Upload Photo");
      handleImageUpload(file);
    } else {
      console.error("No file selected");
    }
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

          .transparent-button {
            background: transparent;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
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
          height: "120vh",
        }}
      >
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 "
              onClick={handleChangePhoto}
              style={{ position: "absolute", top: "112px", left: "560px" }}
            >
              Upload Photo
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary mx-2 my-3 "
              onClick={handleChangeVideo}
              style={{ position: "absolute", top: "112px", left: "760px" }}
            >
              Upload Video
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 "
              onClick={handleChangeLive}
              style={{ position: "absolute", top: "112px", left: "960px" }}
            >
              Live Video check
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "973px", left: "637px" }}
            >
              Sweater
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "973px", left: "495px" }}
            >
              T-Shirt {/* Button 5 */}
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "151px", left: "1345px" }}
            >
              Female
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "151px", left: "1435px" }}
            >
              Male
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "973px", left: "784px" }}
            >
              Pant{/* Button 5 */}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-secondary my-3"
              onClick={() => {}}
              style={{ position: "absolute", top: "850px", left: "1350px" }}
            >
              Add to Cart{/* Button 5 */}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "973px", left: "910px" }}
            >
              Kurthis{/* Button 5 */}
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "973px", left: "1058px" }}
            >
              Suit {/* Button 5 */}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary my-3 transparent-button"
              onClick={() => {}}
              style={{ position: "absolute", top: "800px", left: "450px" }}
            ></button>
          </li>
        </ul>
        <h1
          className="text-center"
          style={{ position: "absolute", top: "76px", left: "525px" }}
        >
          {pageContent}
        </h1>
        <div className="position absolute">
          {pageContent === "Check Live" && <DressingCamera />}
          {pageContent === "Upload Video" && <VideoInput />}
          {pageContent === "Upload Photo" && (
            <PhotoInput handleImageUpload={handleImageUpload} />
          )}
        </div>
      </div>
    </>
  );
};

export default DressingTab;
