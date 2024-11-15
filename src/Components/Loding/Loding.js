import React from 'react';
import logo from '../../Assets/FooterLogo.jpeg'; // Make sure this path is correct

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      {/* Rotating logo */}
      <img
        src={logo}
        alt="Loading"
        className="w-36 h-36 rounded-full animate-spin border"
      />
    </div>
  );
};

export default LoadingSpinner;
