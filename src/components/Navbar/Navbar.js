import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState(false);

  const opensreach = () => {
    setSearch(true);
  };

  const searchclass = search ? "searchinput active" : "searchinput";

  const handlesubmit = (e) => {
    e.preventDefault();
    setSearch(false);
    alert("testing submit");
  };
  return (
    <div className="navbar">
      <ul className="navbarManu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="post">Post</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={handlesubmit}>
          <input className={searchclass} type="text" placeholder="Search..." />
          <img
            onClick={opensreach}
            className="searchicon"
            style={{ padding: "0 4px" }}
            src={require("../../assesst/logo.png")}
            alt="Logo"
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
