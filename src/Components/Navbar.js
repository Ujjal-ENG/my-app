import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ fontWeight: "bold", color: "red" }}
              exact="true"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={{ fontWeight: "bold", color: "red" }}
              exact="true"
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/posts/js"
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
