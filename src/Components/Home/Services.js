import React from 'react';
import './Home.css';
import Wedding from "../../Assets/wedding.jpg";
import Party from "../../Assets/party.jpg";
import liveshow from "../../Assets/live show.jpg";
import corporate from "../../Assets/corporate.jpg";

const Services = () => {
  return (
    <>
      <section className='services'>
        <h2>Our Services</h2>
        <div className='services-list'>
          
          {/* Wedding Service */}
          <div className='service-item flex-col'>
            <h3>Wedding</h3>
            <img src={Wedding} alt='wedding' className='my-3 size-56 lg:size-40 rounded-md' />
            <p>
              Make your special day unforgettable with our top-tier wedding planning services. From venue decoration to catering, we ensure every detail is perfect. Our experienced team will handle everything from start to finish, allowing you to focus on enjoying the moment. Let us transform your dream wedding into reality with elegance and style.
            </p>
          </div>
          
          {/* Party Service */}
          <div className='service-item flex-col'>
            <h3>Party</h3>
            <img src={Party} alt='party' className='my-3 size-56 lg:size-40 rounded-md' />
            <p>
              Throw a party your guests won’t forget! Whether it's a birthday bash, anniversary celebration, or themed event, we provide everything from sound and lighting to décor and entertainment. Our team ensures your party is lively, fun, and perfectly executed, making your special occasions truly memorable.
            </p>
          </div>
          
          {/* Live Show Service */}
          <div className='service-item flex-col'>
            <h3>Live Show</h3>
            <img src={liveshow} alt='live show' className='my-3 size-56 lg:size-40 rounded-md' />
            <p>
              Experience the thrill of live entertainment with our expertly organized shows. From concerts and cultural events to stand-up comedy and theatrical performances, we provide comprehensive event management. We handle logistics, staging, and sound systems, ensuring your live show is a smashing success.
            </p>
          </div>
          
          {/* Corporate Service */}
          <div className='service-item flex-col'>
            <h3>Corporate</h3>
            <img src={corporate} alt='corporate' className='my-3 size-56 lg:size-40 rounded-md' />
            <p>
              Elevate your corporate events with our professional planning services. We specialize in conferences, product launches, and business meetings, ensuring everything runs smoothly. Our team handles all aspects, including venue setup, audio-visual equipment, and catering, so you can focus on your business objectives.
            </p>
          </div>
        
        </div>
      </section>
    </>
  );
}

export default Services;
