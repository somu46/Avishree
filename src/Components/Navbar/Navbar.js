import  { useState } from "react";
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

 const handleHistory=()=>{
  window.scrollTo(0, 0);
}

const handleMobileHistory=()=>{
  window.scrollTo(0, 0);
  setIsOpen(false);
}


const handleClick=()=>{
  setIsOpen(!isOpen);
  navigate('/book', { state: { id: 12523 } });

}

  return (
    <nav className="navbar   bg-white  md:bg-transparent  bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
      <div className="navbar-left  ">
        <Link to="/"
         onClick={handleHistory}>  
          <img src="logo.png" alt="Avishree-Logo" className="logo" />
        </Link>
        <div className="brand">
          <NavLink to="/"
           onClick={handleHistory}>
           
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
            <NavLink activeClass="active" to="/"
             onClick={handleHistory}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/AboutUs"
             onClick={handleHistory}>About Us</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/services"
             onClick={handleHistory}>Services</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/menu"
             onClick={handleHistory}>Menu</NavLink>
          </li>
          <li className="nav-item gallery-dropdown">
            <span>Gallery</span>
            <ArrowDropDownIcon/>
            <ul className="dropdown bg-white bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
              <li>
                <NavLink activeClass="active"   to="/videos"
                 onClick={handleHistory}>Video</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/Photos"
                 onClick={handleHistory}>Photo</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink activeClass="active"  to="/contact-us"
             onClick={handleHistory}>Contact Us</NavLink>
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
              
                 onClick={handleMobileHistory}
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
               
                 onClick={handleMobileHistory}
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
             
                 onClick={handleMobileHistory}
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
               
                 onClick={handleMobileHistory}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <button
                className="focus:outline-none mb-2"
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              >
                Gallery
                <ArrowDropDownIcon />
              </button>
              {isGalleryOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <NavLink
                      to="/photos"
                      className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsGalleryOpen(false);
                        handleMobileHistory();
                      }}
                       
                    >
                      Photos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/videos"
                      className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsGalleryOpen(false);
                        handleMobileHistory();
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
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <ButtonCom title="Book Now" 
              
              fun={handleClick} />
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>

    </nav>
  );
};

export default Navbar;
