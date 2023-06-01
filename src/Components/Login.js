import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignupClick = () => {
    const loginForm = document.querySelector(".form-container .form-inner");
    loginForm.style.marginLeft = "-100%";
  };

  const handleLoginClick = () => {
    const loginForm = document.querySelector(".form-container .form-inner");
    loginForm.style.marginLeft = "0%";
  };

  const handleSignupLinkClick = () => {
    const signupBtn = document.querySelector("label.signup");
    signupBtn.click();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Login Success");
          // Perform any desired action upon successful login
        } else if (response.status === 401) {
          setErrorMessage("Incorrect username or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Signup Success");
          // Perform any desired action upon successful signup
        } else {
          setErrorMessage("Signup failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login">Login Form</div>
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label
            htmlFor="login"
            className="slide login"
            onClick={handleLoginClick}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className="slide signup"
            onClick={handleSignupClick}
          >
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleLoginSubmit} className="login">
            <div className="field">
              <input
                type="text"
                placeholder="Email Address"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="pass-link">
              <a href="/">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member?{" "}
              <a href="/" onClick={handleSignupLinkClick}>
                Signup now
              </a>
            </div>
          </form>
          <form onSubmit={handleSignupSubmit} className="signup">
            <div className="field">
              <input
                type="text"
                placeholder="Email Address"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
