import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JuneWRS/Teaser/NonPrime-PC-3000._CB587224584_.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/May/26th/CML/Women/CML_3000_2._CB589132084_.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/BVD-PC-Herocdsg._CB589153962_.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
