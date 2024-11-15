import React from 'react';
import './Services.css';
import DJ from '../../Assets/DJ.jpg'
import Band from '../../Assets/liveBand.jpg'
import Security from '../../Assets/Security.PNG'
import Artist from '../../Assets/makeupArtist.jpg'
import SFX from '../../Assets/SFX.jpg'
import Choreographer from '../../Assets/Choreographer.jpg'
import Photgrapher from '../../Assets/Photographer.jpg'
import LS from '../../Assets/Light&sound.png'
import RentCar from '../../Assets/Car-hire.jpg'
import EventPlanner from '../../Assets/Event Planner.jpg'
import Catering from '../../Assets/Catering.png'
import Consultant from '../../Assets/Consultant.png'
import ThemeR from '../../Assets/ThemeDecoration.png'
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';








const services = [
  { 
    title: 'Event Planning & Coordination', 
    image: EventPlanner, 
    description: 'Comprehensive planning and coordination for seamless event execution, tailored to your needs.' 
  },
  { 
    title: 'Event Consultancy', 
    image: Consultant, 
    description: 'Professional guidance and advice to make your event a success from concept to completion.' 
  },
  { 
    title: 'Catering Services', 
    image: Catering, 
    description: 'Delicious and customizable catering options to satisfy every palate and occasion.' 
  },
  { 
    title: 'Theme Decoration', 
    image: ThemeR, 
    description: 'Creative and personalized theme decorations to bring your vision to life.' 
  },
  { 
    title: 'Light & Sound', 
    image: LS, 
    description: 'Professional light and sound setup to elevate the ambiance and energy of your event.' 
  },
  { 
    title: 'DJ', 
    image: DJ, 
    description: 'Experienced DJs to keep the crowd engaged and create a memorable experience.' 
  },
  { 
    title: 'Live Band', 
    image: Band, 
    description: 'Talented live band to add excitement and a lively atmosphere to your event.' 
  },
  { 
    title: 'Choreographer', 
    image: Choreographer, 
    description: 'Skilled choreographers to create custom dance routines for any occasion.' 
  },
  { 
    title: 'SFX', 
    image: SFX, 
    description: 'Special effects to enhance the event’s visual appeal and impress your guests.' 
  },
  { 
    title: 'Photographer', 
    image: Photgrapher, 
    description: 'Professional photographers to capture memorable moments with high-quality photos.' 
  },
  { 
    title: 'Makeup Artist', 
    image: Artist, 
    description: 'Experienced makeup artists to ensure you look your best on the big day.' 
  },
  { 
    title: 'Event Security', 
    image: Security, 
    description: 'Reliable security team to ensure the safety and security of your event.' 
  },
  { 
    title: 'Hire-Car for Event', 
    image: RentCar, 
    description: 'Convenient car rental options for easy and comfortable transportation for your event.' 
  }
];


function ServiceComponent() {
  return (
    <div className="service-container  mt-[5.1rem]">
      <h2>Discover Our Exclusive Catering Services</h2>
      <div className="service-grid grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mx-auto max-w-[1200px]">
  {services.map((service, index) => (
    <div className="service-card" key={index}>
      <div className="service-image-wrapper">
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
    </div>
  ))}
</div>
<FloatingWhatsAppButton/>

    </div>
  );
}


export default ServiceComponent;
