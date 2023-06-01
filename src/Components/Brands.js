import React, { useState } from "react";

export default function Brands() {
  const brands = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8fNWhboxS_AXAHyzobDrb-vnSiZRxEnGb52WNnQ0OQ&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZ0yJGe6FJ5MFn6EIPr8t4aTudoETRZX_zZM2ap4uQA&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5TQt1Ls03fx5px2aCVus31Sv8qQrQnAczAnOfqUZ7w&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8fNWhboxS_AXAHyzobDrb-vnSiZRxEnGb52WNnQ0OQ&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZ0yJGe6FJ5MFn6EIPr8t4aTudoETRZX_zZM2ap4uQA&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5TQt1Ls03fx5px2aCVus31Sv8qQrQnAczAnOfqUZ7w&usqp=CAU&ec=48665701",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const numItems = 3; // Number of items to display

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedBrands = brands.slice(currentIndex, currentIndex + numItems); // Slice the brands array based on the current index and number of items

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-evenly align-items-center">
        <button className="btn btn-primary" onClick={handlePrevious}>
          Previous
        </button>
        {displayedBrands.map((brand, index) => (
          <img src={brand} className="rounded mx-2" alt="..." key={index}></img>
        ))}
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
