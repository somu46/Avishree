import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Qrcode from "../../Assets/AvishreeHospitality.png";
import FooterLogo from "../../Assets/FooterLogo.jpeg";
import ReactTypingEffect from "react-typing-effect";

const Footer = () => {

  const handleHistory = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <footer className="footer max-w-[100%]">
        <div className="footer-content">
          {/* Company Information */}
          <div className="footer-section company-info">
            <div className="flex justify-center rounded-sm ">
              <Link onClick={handleHistory} to='/'>
                <img src={FooterLogo} alt="Company Logo" className="footer-logo rounded-xl" />
              </Link>
            </div>
            <p className="text-2xl text-red-700 ">Avishree Hospitality Pvt. Ltd.</p>
            <p>
              <ReactTypingEffect
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                text={["Crafting unforgettable Memories"]}
              />
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/" onClick={handleHistory}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/AboutUs" onClick={handleHistory}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={handleHistory}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/menu" onClick={handleHistory}>Menu</NavLink>
              </li>
              <li>
                <span onClick={handleHistory}>Gallery</span>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleHistory}>Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section social">
            <h3 className="text-center">Follow Us</h3>
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
              <a href="https://www.youtube.com/@avishreehospitality" target="_blank" rel="noreferrer" className="social-icon">
                <YouTubeIcon />
              </a>
            </div>
            <div className="h-auto w-auto my-5">
              <h3 className="mb-3 text-center">Scan Me:</h3>
              <img src={Qrcode} alt="Qr Code" className="h-auto w-32 bg-white rounded-none" />
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col justify-start w-auto">
            <h3 className="text-yellow-400 text-center m-5">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 text-center mb-3">
              Get the latest updates and offers.
            </p>
            <div className="newsletter-input-container rounded-lg overflow-hidden w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input text-black"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyRight flex justify-center items-center max-w-[100%] flex-col w-screen bottom-0 m-0">
        <div className="border-t-2 border-slate-500 w-full lg:w-[70%]"></div>
        <p className="text-center text-gray-300 font-thin">
          Copyright 2023 Avishree Hospitality | &copy; 2024-2027. All rights reserved. 
        </p>
        <p className="text-center text-gray-300 font-thin">
          Developed by<a href="https://github.com/somu46" className="text-yellow-400"> Soumyajit Ray</a> and <a href="https://github.com/Arkajyoti333" className="text-yellow-400">Arkajyoti Kundu</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
