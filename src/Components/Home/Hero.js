import React, { useEffect, useRef } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import backgroundVideo from "../../Assets/Overview.mp4"


const Hero = () => {

  const videoRef=useRef() ;
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set your desired speed (e.g., 0.5 for half speed)
    }
  }, []);
  return (
    <>
      <section className="hero mt-[5.1rem]">
      <video className="background-video"      ref={videoRef} playsInline  autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
      
      </video>
        <div className=" text-4xl py-3 ">
          <h1 className="mt-32">Welcome to Our Website</h1>
          <p className="text-3xl">
            
            <ReactTypingEffect
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              text={[
                "Your one-stop solution for all your needs!",
                "Feel free to ask us!",
              ]}
            />
          </p>

          <p>Book Now for any kind of Guidance </p>
          <NavLink className="hero-button" to="/book">
            Book Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Hero;

// displayTextRenderer: func. (displayText: string, textIndex: number) => element If text propType is array, then textIndex will be the array index of the text, otherwise textIndex will be equal to 0.
// staticText: String. Text that will just be static and cannot be typed or erased.
// className: String
// speed: Number. default 500ms. Typing speed.
// eraseSpeed: Number. default 500ms. Erase speed.
// eraseDelay: Number. default 5000ms. Time to wait before erasing the text.
// typingDelay: Number. default 2500ms. Time to wait before starting to type.
// cursor: String. Default: |
// cursorClassName: String
