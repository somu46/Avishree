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


const services = [
  { title: 'Event Planning & Coordination', image: EventPlanner },
  { title: 'Event Consultancy', image: Consultant },
  { title: 'Catering Services', image: Catering },
  { title: 'Theme Decoration', image: ThemeR },
  { title: 'Light & Sound', image: LS },
  { title: 'DJ', image: DJ },
  { title: 'Live Band', image: Band },
  { title: 'Choreographer', image: Choreographer },
  { title: 'SFX', image: SFX },
  { title: 'Photographer', image: Photgrapher },
  { title: 'Makeup Artist', image: Artist },
  { title: 'Event Security', image: Security },
  { title: 'Hire-Car for Event', image: RentCar },
];

function ServiceComponent() {
  return (
    <div className="service-container mt-[5.1rem]">
      <h2>Discover Our Exclusive Catering Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-image " />
            </div>
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
