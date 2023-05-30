import React from "react";

function Footer() {
  return (
    <footer className=" mx-5 py-5">
      <div className="row">
        <div className="col-2">
          <h5>Get to Know Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <h5>Connect with Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                WhatsApp
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <h5>Let Us Help You</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Sell on StyloMart
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Your Account
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Returns Centre
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                100% Purchase Protection
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Help
              </a>
            </li>
          </ul>
        </div>

        <div className="col-4 offset-1">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div className="d-flex w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-between py-4 my-4 border-top mb-0">
        <div className="container">
          <p className="text-center">
            &copy; 2023 StyloMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
