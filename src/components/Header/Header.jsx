import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-lg">
      <div className="container">
        <h4 className="blogName">Knowledge Cafe </h4>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <span className="nav-link">Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Contacts</span>
            </li>
            <li className="nav-item ">
              <span className="nav-link">About</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
