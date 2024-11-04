import React from 'react';
import './Footer.css';
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
                    <img src="logo.png" alt="Company Logo" className="footer-logo" />
                    <p>Avishree Hospitality Pvt. Ltd.</p>
                    <p>A Unit Of Sai Foods & Caterers</p>
                    <p>&copy; 2024-2027 . All rights reserved.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                    </ul>
                </div>

                

                {/* Social Media Links */}
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                            <FacebookIcon />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
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
                <div className="footer-section newsletter">
                    <h3>Subscribe to Our Newsletter</h3>
                    <p>Get the latest updates and offers.</p>
                    <div className="newsletter-input-container">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
