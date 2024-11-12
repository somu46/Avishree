import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactTypingEffect from "react-typing-effect";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <nav className="navbar   bg-white  md:bg-transparent  bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
      <div className="navbar-left  ">
        <Link to="/">  
          <img src="logo.png" alt="Avishree-Logo" className="logo" />
        </Link>
        <div className="brand">
          <NavLink to="/">
           
            <h1>Avishree Hospitality Pvt. Ltd.</h1>
          </NavLink>
          <p>
          <ReactTypingEffect
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              text={[
                "Crafting unfogettable Memories",
              ]}
            />
          </p>
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
            <ul className="dropdown bg-white bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
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
          className={`fixed top-0 right-0 min-h-screen w-[65%] bg-white bg-opacity-90 z-20 transition-transform duration-300 ${
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
              <button 
                className="focus:outline-none" 
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              >
                Gallery
                <ArrowDropDownIcon/>
              </button>
              {isGalleryOpen && (
                <ul className="pl-4 space-y-2">
                  <li className="mt-3">
                    <NavLink 
                      to="/Gallery/photos" 
                      onClick={() => {
                        setIsOpen(false);
                        setIsGalleryOpen(false);
                      }}
                    >
                      Photos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/Gallery/videos" 
                      onClick={() => {
                        setIsOpen(false);
                        setIsGalleryOpen(false);
                      }}
                    >
                      Videos
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</NavLink>
            </li>
            <li>
              <NavLink 
                to="/book" 
                className="book-now-button-mobile" 
                onClick={() => setIsOpen(false)}
              >
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
