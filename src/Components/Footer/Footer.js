import React from 'react';
import './Footer.css';
import {  NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';




const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Information */}
                <div className="footer-section company-info">
                  <div className='flex justify-center '> <img src="logo.png" alt="Company Logo" className="footer-logo" /></div> 
                    <p>Avishree Hospitality Pvt. Ltd.</p>
                    <p>Crafting unfogettable Memories</p>
                    <p>&copy; 2024-2027 . All rights reserved.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                    </ul>
                </div>

                

                {/* Social Media Links */}
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61565446652658" target="_blank" rel="noreferrer" className="social-icon">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com/avishreehospitalityofficial/" target="_blank" rel="noreferrer" className="social-icon">
                            <InstagramIcon />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                            <XIcon />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
                            <YouTubeIcon />
                        </a>
                    </div>
                </div>
                
                {/* Newsletter Subscription */}
                <div className=" flex flex-col justify-start  w-auto">
                    <h3 className='text-yellow-400 text-center m-5'>Subscribe to Our Newsletter</h3>
                    <p className='text-gray-300 text-center mb-3'>Get the latest updates and offers.</p>
                    <div className="newsletter-input-container rounded-lg overflow-hidden  w-auto ">
                        <input type="email" placeholder="Enter your email" className="newsletter-input text-black" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
