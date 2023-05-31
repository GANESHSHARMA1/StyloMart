import React, { useRef, useEffect } from "react";

function Popular() {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      // threshold: 0.2, // Adjust this value based on your needs
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-card");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
}

.card:hover {
  transform: scale(1.05);
}`}
      </style>
      <div
        className="container overflow-x-auto d-flex justify-content-evenly"
        ref={containerRef}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Van Heusen</h5>
            <p className="card-text">
              Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
            </ul>
            <a href="" className="btn btn-primary">
              AR Dressing Room
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Van Heusen</h5>
            <p className="card-text">
              Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
            </ul>
            <a href="" className="btn btn-primary">
              AR Dressing Room
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://m.media-amazon.com/images/I/81V6tqCwErL._AC_UL600_FMwebp_QL65_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Van Heusen</h5>
            <p className="card-text">
              Athleisure Men Knit Shorts - Cotton Rich - Smart Tech, Easy...
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
            </ul>
            <a href="" className="btn btn-primary">
              AR Dressing Room
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
