import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="post">Post</NavLink>
        </li>
        <li>
          <NavLink to="gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="todo">ToDo</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
