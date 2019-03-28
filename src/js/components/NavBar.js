import React from "react";
import { Link } from "react-router-dom";
import "../../styles/logo.css";
import "../../styles/navBar.css";
import logo from "../../image/fyblogo.png";

export const NavBar = props => {
  return (
    <nav className="primary">
      <div className="nav">
        <Link to="/">
          <div className="flex align">
            <div className="logoDiv">
              <img src={logo} alt="" />
            </div>
          </div>
        </Link>
      </div>
      <div className="nav2">
        <Link to="/">Home</Link>
        <Link to="/animal">Animal Page</Link>
        <Link to="/form">Form Page</Link>
      </div>
    </nav>
  );
};
