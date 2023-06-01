import React from "react";

export default function Offers() {
  return (
    <div className="d-flex flex-column my-3 align-items-center">
      <div
        className="card"
        style={{
          //   width: "18rem",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        <img
          src="https://m.media-amazon.com/images/I/41kjAw-igOL._MCnd_AC_.jpg"
          className="card-img-top"
          alt="https://m.media-amazon.com/images/I/41kjAw-igOL._MCnd_AC_.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card my-4"
        style={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        <img
          src="https://m.media-amazon.com/images/I/41kjAw-igOL._MCnd_AC_.jpg"
          className="card-img-top"
          alt="https://m.media-amazon.com/images/I/41kjAw-igOL._MCnd_AC_.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        <img
          src="https://m.media-amazon.com/images/I/41kjAw-igOL._MCnd_AC_.jpg"
          className="card-img-top"
          alt="https://m.media-amazon.com/images/I/41kjAw-igOL._MCnd_AC_.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
