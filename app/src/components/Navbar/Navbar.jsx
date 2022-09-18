import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <div className="logo-wrapper">
          <img src="/assets/images/logo.png" alt="" />
        </div>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <SearchBar />
    </div>
  );
};

export default Navbar;
