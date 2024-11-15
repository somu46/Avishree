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
import FloatingWhatsAppButton from "../FloatWhatsapp/FloatingWhatsAppButton";



const HomeCome = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
        <Hero />
        <div  className="bg-image">
        <div className="w-screen bg-transparent opacity-80 backdrop-blur-xl">
        <IntroSection/>
        </div>
          </div>
      <Feature />
      <FloatingWhatsAppButton/>

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
