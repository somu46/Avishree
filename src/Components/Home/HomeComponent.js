// import React from "react";
import "./Home.css";
import Feature from "./Feature";
import Services from "./Services";
import Hero from "./Hero";
import CorporateClients from "./CorporateClients";
import StatsSection from "./SpeakingNumbers";
import IntroSection from "./IntroSection";
import HowItWorks from "./HowItWork";
// import Testimonial from "../Testimonial/Testimonial";
import Faq from "../Faqs/faq";
import BanquetHalls from "./BanquetHalls";
import FloatingWhatsAppButton from "../FloatWhatsapp/FloatingWhatsAppButton";
// import GoogleReviews from '../GoogleReviews/GoogleReviews.js';




{/* <div class="" ><div></div> */}



const HomeCome = () => {
  return (
    <div className="home-container "
   
    >
      
        <Hero/>
        <div  className="bg-image">
        <div className="max-w-screen bg-transparent opacity-80 backdrop-blur-xl">
        <IntroSection/>
        </div>
        </div>
<div>
      <Feature />

<div>
      <FloatingWhatsAppButton/>
</div>
<div>
      <HowItWorks/>
</div>
<div>
      <Services />
</div>
<div>
      <BanquetHalls/>
</div>
<div>
      <CorporateClients/>
</div>
<div>
      {/* <GoogleReviews/> */}
</div>
      {/* <Testimonial/> */}
      <StatsSection/>
</div> <div>     
      <Faq/>


    </div>
 </div> );
};

export default HomeCome;
