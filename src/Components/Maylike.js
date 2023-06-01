import React, { useState, useEffect } from "react";

function Maylike() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numItems, setNumItems] = useState(3); // Number of items to display
  const items = [
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/818niea1luL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/818niea1luL._AC_UL600_FMwebp_QL65_.jpg",
      title: "kan Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/818niea1luL._AC_UL600_FMwebp_QL65_.jpg",
      title: "fan Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/818niea1luL._AC_UL600_FMwebp_QL65_.jpg",
      title: "ran Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/818niea1luL._AC_UL600_FMwebp_QL65_.jpg",
      title: "tan Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/818niea1luL._AC_UL600_FMwebp_QL65_.jpg",
      title: "pan Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    // Add more items here
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 576) {
        setNumItems(1);
      } else if (window.innerWidth < 768) {
        setNumItems(2);
      } else {
        setNumItems(3);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(1); // Initialize the number of items on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedItems = items.slice(currentIndex, currentIndex + numItems); // Slice the items array based on the current index and number of items

  return (
    <div className="container overflow-x-auto">
      <div
        className="d-flex flex-wrap justify-content-between"
        style={{ margin: "20px 10px" }}
      >
        {displayedItems.map((item, index) => (
          <div
            className="card animate-card"
            style={{ width: "18rem", margin: "10px" }}
            key={index}
          >
            <img src={item.imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <ul className="list-group list-group-flush">
                {item.listItems.map((listItem, listItemIndex) => (
                  <li className="list-group-item" key={listItemIndex}>
                    {listItem}
                  </li>
                ))}
              </ul>
              <a href=" " className="btn btn-primary">
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <button className="btn btn-primary" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Maylike;
