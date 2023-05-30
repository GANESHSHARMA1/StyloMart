import React from "react";
import Brands from "./Brands";
import Information from "./Information";
import Popular from "./Popular";
import Maylike from "./Maylike";
import Offers from "./Offers";

export default function Containers() {
  return (
    <div className="d-flex justify-content-between">
      <div
        className="p-2 right flex-fill"
        style={{
          //   border: "2px solid red",
          backgroundColor: "pink",
          width: "80vw",
        }}
      >
        <h1 className="text-center my-4">Top Brands</h1>
        <Brands />
        <Information />
        <h1 className="text-center my-4">Most Popular</h1>
        <Popular />
        <h1 className="text-center my-3">You may also Like</h1>
        <Maylike />
      </div>
      <div
        className="p-2 left flex-fill"
        style={{
          //   border: "2px solid black",
          backgroundColor: "#f7a1f2",
          maxWidth: "20vw",
        }}
      >
        <h1 className="text-center">Offers</h1>
        <Offers />
      </div>
    </div>
  );
}
