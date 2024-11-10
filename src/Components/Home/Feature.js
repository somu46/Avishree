import React from 'react';
import './Home.css';

const Feature = () => {
    return (
    <>
    
    <section className='features'>
        <h2 className=''>Our Features</h2>
        <div className='features-cards'>
          <div className='feature-card'>
            <h3 className='  text-2xl text-blue-600 hover:text-red-500'>High Quality</h3>
            <p>We ensure top-notch quality in every service we provide.</p>
          </div>
          <div className='feature-card'>
            <h3 className='  text-2xl text-blue-600 hover:text-red-500'>Reliability</h3>
            <p>Count on us to deliver on time, every time.</p>
          </div>
          <div className='feature-card'>
            <h3  className='  text-2xl text-blue-600 hover:text-red-500'>Support</h3>
            <p>We offer 24/7 support to assist you whenever you need.</p>
          </div>
        </div>
      </section></>
  )
}

export default Feature; 