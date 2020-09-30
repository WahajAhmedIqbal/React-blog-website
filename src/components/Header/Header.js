import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="headerManu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="socialMediaIcon">Social Meadia Icon </div>
    </header>
  );
}

export default Header;
