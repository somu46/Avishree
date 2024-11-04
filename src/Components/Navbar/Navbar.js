import React, { useState } from 'react';
import './Navbar.css';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="logo.png" alt="Avishree-Logo" className="logo" />
                <div className="brand">
                    <h1>Avishree Hospitality Pvt. Ltd.</h1>
                    {/* <p>A Unit Of Sai Foods & Caterers</p> */}
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
                <ul className="navbar-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#AboutUs">About Us</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                </ul>
                <a href="#book" className="book-now-button">Book Now</a>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
                {isOpen && (
                    <ul className="navbar-menu-mobile">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#create-menu">Create Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#book" className="book-now-button-mobile">Book Now</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
