import React from "react";
import "./Home.css";
import Feature from "./Feature";
import Services from "./Services";
import Hero from "./Hero";

const HomeCome = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
        <Hero />
      {/* Feature Section */}
      <Feature />
      {/* Services Section */}
      <Services />
    </div>
  );
};

export default HomeCome;
