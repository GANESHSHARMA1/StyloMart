import React, { useRef, useEffect, useState } from "react";

function Popular() {
  const containerRef = useRef(null);
  const [numItems, setNumItems] = useState(3); // Number of items to display
  const [currentIndex, setCurrentIndex] = useState(0);

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
    handleResize(); // Initialize the number of items on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg",
      title: "Van Heusen",
      description:
        "Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...",
      listItems: ["An item", "A second item"],
      linkText: "AR Dressing Room",
    },
    // Add more items here
  ];

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

  const displayedItems = items.slice(currentIndex, currentIndex + numItems);

  return (
    <>
      <style>
        {`@keyframes cardFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-card {
  animation: cardFadeIn 1s ease 2s forwards;
}

.card {
  transition: transform 0.3s;
  overflow: hidden;
}

.card:hover {
  // transform: scale(1.05);
}`}
      </style>
      <div style={{ overflowX: "auto" }}>
        <div
          className="container d-flex justify-content-evenly"
          ref={containerRef}
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
                <a href="" className="btn btn-primary">
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-secondary" onClick={handlePrevious}>
            Previous
          </button>
          <button className="btn btn-secondary" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Popular;
