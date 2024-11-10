import React from 'react'
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
          <div className='service-item flex-col'>
            <h3>Wedding</h3>
            <img src={Wedding} alt='wedding' className='my-3 size-56 lg:size-40 rounded-md'/>
            <p>Expert advice to guide your business decisions.</p>
          </div>
          <div className='service-item flex-col'>
            <h3>Party</h3>
             <img src={Party} alt='wedding' className='my-3 size-56 lg:size-40 rounded-md'/>
            <p>Customized development solutions for your business.</p>
          </div>
          <div className='service-item flex-col'>
            <h3>live show</h3>
             <img src={liveshow} alt='wedding' className='my-3 size-56 lg:size-40 rounded-md'/>
            <p>Creative designs to make your brand stand out.</p>
          </div>
          <div className='service-item flex-col'>
            <h3>corporate</h3>
             <img src={corporate} alt='wedding' className='my-3 size-56 lg:size-40 rounded-md'/>
            <p>Creative designs to make your brand stand out.</p>
          </div>
        </div>
      </section>
   </>
  )
}

export default Services;
