import React from "react";
import "./Home.css";
import Feature from "./Feature";
import Services from "./Services";
import Hero from "./Hero";
import CorporateClients from "./CorporateClients";
import StatsSection from "./SpeakingNumbers";




const HomeCome = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
        <Hero />
      {/* Feature Section */}
      <Feature />
      {/* Services Section */}
      <Services />
      <CorporateClients/>
      <StatsSection/>
    </div>
  );
};

export default HomeCome;
