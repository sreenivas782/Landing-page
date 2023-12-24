import React from "react";
import "./Navbar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <nav className="navbox">
      <div className="title">
        <h3>LOGO</h3>
      </div>
      <div>
        <ul className="items">
          <li>WHERE WE BUILD</li>
          <li>QUICK MOVE-IN HOMES</li>
          <li>FLOOR PLANS</li>
          <li>
            <a href="mailto:sample@gmail.com">GET IN TOUCH</a>
          </li>
        </ul>
      </div>
      <div>
        <DensityMediumIcon />
      </div>
    </nav>
  );
};

export default Navbar;
