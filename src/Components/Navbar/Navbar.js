import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left ">
        <Link to="/">  
          <img src="logo.png" alt="Avishree-Logo" className="logo" />
        </Link>
        <div className="brand">
          <NavLink to="/">
           
            <h1>Avishree Hospitality Pvt. Ltd.</h1>
          </NavLink>
          <p>Crafting unfogettable Memories</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item gallery-dropdown">
            <NavLink to="/gallery">Gallery</NavLink>
            <ArrowDropDownIcon/>
            <ul className="dropdown bg-transparent">
              <li>
                <NavLink to="/gallery/videos">Video</NavLink>
              </li>
              <li>
                <NavLink to="/gallery/photos">Photo</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
        <NavLink to="/book" className="book-now-button">
          Book Now
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu  border-2 ">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        {isOpen && (
          <ul className="navbar-menu-mobile z-10 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/book" className="book-now-button-mobile">
                Book Now
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
