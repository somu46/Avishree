import React, { useState } from 'react';
import './Navbar.css';
import Hamburger from 'hamburger-react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/"> <img src="logo.png" alt="Avishree-Logo" className="logo" /></Link>
                <div className="brand">
                <NavLink to="/"> <h1>Avishree Hospitality Pvt. Ltd.</h1></NavLink>
                    {/* <p>A Unit Of Sai Foods & Caterers</p> */}
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
                <ul className="navbar-menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                </ul>
                <NavLink to="/book" className="book-now-button">Book Now</NavLink>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
                {isOpen && (
                    <ul className="navbar-menu-mobile">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/book" className="book-now-button-mobile">Book Now</NavLink></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
