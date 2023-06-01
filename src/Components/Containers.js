import React, { useRef, useEffect } from "react";
import Brands from "./Brands";
import Popular from "./Popular";
import Maylike from "./Maylike";
import Offers from "./Offers";
import { Link } from "react-router-dom";

export default function Containers() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const width = backgroundRef.current.offsetWidth;
      const height = backgroundRef.current.offsetHeight;

      const xPercent = (x / width) * 100;
      const yPercent = (y / height) * 100;

      const gradientColor1 = `hsl(${xPercent}, 70%, 50%)`;
      const gradientColor2 = `hsl(${yPercent}, 70%, 50%)`;

      backgroundRef.current.style.backgroundImage = `linear-gradient(to bottom right, ${gradientColor1}, ${gradientColor2})`;
    };

    if (backgroundRef.current) {
      backgroundRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (backgroundRef.current) {
        backgroundRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="d-flex justify-content-between">
      <div
        className="p-2 right flex-fill"
        ref={backgroundRef}
        style={{
          backgroundColor: "pink",
          width: "80vw",
          transition: "background-image 0.3s",
        }}
      >
        <h1
          className="text-center my-4"
          style={{ fontFamily: "HP Simplified" }}
        >
          Top Brands
        </h1>
        <Brands />
        <h1
          className="text-center my-4"
          style={{ fontFamily: "HP Simplified" }}
        >
          Most Popular <Link to="/all-items">See All</Link>
        </h1>
        <Popular />
        <h1
          className="text-center my-3"
          style={{ fontFamily: "HP Simplified" }}
        >
          You may also Like
        </h1>
        <Maylike />
      </div>

      <div
        className="p-2 left flex-fill d-none d-md-block"
        style={{
          backgroundColor: "#f7a1f2",
          maxWidth: "20vw",
        }}
      >
        <h1 className="text-center" style={{ fontFamily: "HP Simplified" }}>
          Offers
        </h1>
        <Offers />
      </div>
    </div>
  );
}
