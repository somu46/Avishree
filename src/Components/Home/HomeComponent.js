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
</div>
 <div>     
      <Faq/>
      <div className="m-5 p-5 border border-red-500 flex justify-center">

      <img src="https://drive.google.com/uc?export=view&id=1H0-ezdIZTkBU165oatNdDnHAcktNNeDL" alt="Testing drive link"/>
      </div>

    </div>
 </div> );
};

export default HomeCome;
