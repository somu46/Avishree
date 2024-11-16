// import React from 'react';
import logo from '../../Assets/FooterLogo.jpeg'; // Make sure this path is correct
import './loading.css'
const LoadingSpinner = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      {/* Rotating logo */}
      <img
        src={logo}
        alt="Loading"
        className="w-36 h-36 rounded-full custom-spin "
      />
    </div>
  );
};

export default LoadingSpinner;
