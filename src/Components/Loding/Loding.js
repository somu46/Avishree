// src/components/LoadingSpinner.js
import React from 'react';
import { Spinner } from "@material-tailwind/react";
import logo from "../../Assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-blue-600"></div>
    </div>
  );
};

export const CustomSpinner=()=> {
  return( 
    <div className="flex items-center justify-center h-screen">
     <Spinner className=" h-16 w-16 text-blue-500/30" />
     </div>
);
}



export const LoadingComponent = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 ">
        <div className="relative">
          {/* Logo with pulsing animation */}
          <img
            src={logo}
            alt="Loading"
            className="w-48 h-48 animate-pulse mx-auto"
          />
          {/* Rotating effect for additional flair */}
          <div className="absolute inset-0 border-4 border-pink-500 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    );
  };

export default LoadingSpinner;