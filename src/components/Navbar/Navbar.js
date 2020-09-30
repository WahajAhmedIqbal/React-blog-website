import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbarManu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Post</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <img
          style={{ padding: "0 4px" }}
          src={require("../../assesst/logo.png")}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
