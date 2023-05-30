import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ARDressing from "./Components/ARDressing";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Home from "./Components/Home";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ardressing" element={<ARDressing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
