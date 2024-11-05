import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      {/* Hero Section */}
      <section className='hero'>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs!</p>
        <button className='hero-button'>Get Started</button>
      </section>

      {/* Features Section */}
      <section className='features'>
        <h2>Our Features</h2>
        <div className='features-cards'>
          <div className='feature-card'>
            <h3>High Quality</h3>
            <p>We ensure top-notch quality in every service we provide.</p>
          </div>
          <div className='feature-card'>
            <h3>Reliability</h3>
            <p>Count on us to deliver on time, every time.</p>
          </div>
          <div className='feature-card'>
            <h3>Support</h3>
            <p>We offer 24/7 support to assist you whenever you need.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='services'>
        <h2>Our Services</h2>
        <div className='services-list'>
          <div className='service-item'>
            <h3>Consulting</h3>
            <p>Expert advice to guide your business decisions.</p>
          </div>
          <div className='service-item'>
            <h3>Development</h3>
            <p>Customized development solutions for your business.</p>
          </div>
          <div className='service-item'>
            <h3>Design</h3>
            <p>Creative designs to make your brand stand out.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
