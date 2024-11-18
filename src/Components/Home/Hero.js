import  { useEffect, useRef } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import backgroundVideo from "../../Assets/Overview.mp4";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set your desired speed (e.g., 0.5 for half speed)
    }
  }, []);
  return (
    <>
      <section className="hero mt-[5.1rem] ">
        <video
          className="background-video opacity-90"
          ref={videoRef}
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="text-center text-4xl py-3 z-10">
  {/* Heading with text shadow */}
  <h1 className="mt-32 text-black bg-transparent max-w-auto">
    <span className="shadow-text">Welcome to Our Website</span>
  </h1>

  {/* Typing effect with text shadow */}
  <p className="text-3xl mt-4">
    <span className="shadow-text">
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
    </span>
  </p>

  {/* Static text with shadow */}
  <p className="shadow-text mt-6 text-black">
    Book Now for any kind of Guidance
  </p>

  {/* Button */}
 <div className=" m-auto absolute flex items-center  justify-center  bottom-[13rem] lg:bottom-[10rem] w-[90%]  ">
 <NavLink to="/book">
    <button className=" right-0  w-[120%] lg:w-[170%] overflow-hidden flex items-center text-center justify-center bg-white bg-opacity-70 border-2 border-rose-500 text-rose-500 text-sm font-semibold cursor-pointer rounded-lg lg:mt-3 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:tracking-wider pt-1">
      <p className="font-mono mt-3">Book Now</p>
    </button>
  </NavLink>
 </div>
</div>


      </section>
    </>
  );
};

export default Hero;
