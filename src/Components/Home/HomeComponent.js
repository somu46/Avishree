import React from "react";
import "./Home.css";
import Feature from "./Feature";
import Services from "./Services";
import Hero from "./Hero";
import CorporateClients from "./CorporateClients";
import StatsSection from "./SpeakingNumbers";
import IntroSection from "./IntroSection";
import HowItWorks from "./HowItWork";
import Testimonial from "../Testimonial/Testimonial";
import Faq from "../Faqs/faq";
import BanquetHalls from "./BanquetHalls";




const HomeCome = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
        <Hero />
        <div  className="bg-image">
        <IntroSection/>
          </div>
      <Feature />
     

      {/* Feature Section */}
      <HowItWorks/>
      {/* Services Section */}
      <Services />
      <BanquetHalls/>
      <CorporateClients/>
      <Testimonial/>
      <Faq/>
      <StatsSection/>
    </div>
  );
};

export default HomeCome;
