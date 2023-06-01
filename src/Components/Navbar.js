import React, { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Logo from "./Images/Logo11.png";
import search from "./Images/Search.gif";

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            className="logo-img"
          />
          StyloMart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/ardressing">
                AR Dressing Room
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about">
                    How to Use
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/about">
                    Latest Update{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/closet"
              >
                Your Closet
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/orders"
              >
                Orders
              </Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button>
              <img src={search} alt="GIF Image" className="img-fluid" />
            </button>
          </form>
          <button
            onClick={handleLoginClick}
            type="button"
            class="btn btn-primary my-2 mx-2"
          >
            Login/SignUp
          </button>
        </div>
      </div>
      {showLoginForm && <Login />}
    </nav>
  );
};

export default Navbar;
