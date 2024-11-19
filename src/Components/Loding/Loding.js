// import React from 'react';
import logo from '../../Assets/FooterLogo.jpeg'
import './loading.css';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loading-container">
        <img
          src={logo}
          alt="Loading"
          className="loading-logo w-96"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
