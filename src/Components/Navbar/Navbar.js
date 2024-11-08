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
                <NavLink to="/gallery/Photos">Photo</NavLink>
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
<div className="relative lg:hidden">
  {/* Hamburger Button */}
  <div className="fixed top-5 right-5 z-30">
    <Hamburger toggled={isOpen} toggle={setIsOpen} />
  </div>

  {isOpen && (
    <div
      className={`fixed top-0 right-0 h-full w-1/2 bg-white z-20 shadow-lg transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="flex flex-col items-start p-8 space-y-4">
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/menu" onClick={() => setIsOpen(false)}>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/book" className="book-now-button-mobile" onClick={() => setIsOpen(false)}>
            Book Now
          </NavLink>
        </li>
      </ul>
    </div>
  )}
</div>

    </nav>
  );
};

export default Navbar;
