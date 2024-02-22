import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";
import bb_logo from "./image/bb_logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <div className="logo1">
            <img src={bb_logo}></img>
          </div>
          <div className="bb">
            <p>Bug Battle</p>
          </div>
        </div>
        <div className="centered">
          <p className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </p>
          <p className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </p>
          <p className="nav-item">
            <Link to="/sponsor" className="nav-link">
              Sponsors
            </Link>
          </p>
          <p className="nav-item">
            <Link to="/team" className="nav-link">
              Team
            </Link>
          </p>
          <p className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
