import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactTypingEffect from "react-typing-effect";
import ButtonCom from "../Button/Button";
import { motion} from 'framer-motion';



  




const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
 const navigate=useNavigate();




const handleClick=()=>{
  setIsOpen(!isOpen);
  navigate('/book', { state: { id: 12523 } });

}

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
            <NavLink activeClass="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/AboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item gallery-dropdown">
            <NavLink activeClass="active"  to="/gallery">Gallery</NavLink>
            <ArrowDropDownIcon/>
            <ul className="dropdown bg-white bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
              <li>
                <NavLink activeClass="active"  to="/gallery/videos">Video</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"  to="/gallery/Photos">Photo</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink activeClass="active"  to="/contact">Contact Us</NavLink>
          </li>
          <li>
            {/* <NavLink activeClass="active"  to="/blogs">Blogs</NavLink> */}
          </li>
        </ul>
        
         {/* <Button onClick={handleClick} variant="outlined">Book Now</Button> */}
        <div><ButtonCom title="Book Now" fun={handleClick}/></div> 
       
      </div>

     
    {/* Mobile Menu */}
    
    <div className="relative lg:hidden">
      {/* Hamburger Button */}
      <div className="fixed top-5 right-5 z-30">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 min-h-screen w-[65%] bg-white bg-opacity-90 z-20`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <nav>
          <ul className="flex flex-col items-start p-8 space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                }
                onClick={() => setIsOpen(false)}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <button
                className="focus:outline-none"
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              >
                Gallery
                <ArrowDropDownIcon />
              </button>
              {isGalleryOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <NavLink
                      to="/Gallery/photos"
                      className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                      }
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
                      className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                      }
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
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                }
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <ButtonCom title="Book Now" fun={() => console.log('Booking')} />
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>

    </nav>
  );
};

export default Navbar;
