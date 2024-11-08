import React from 'react';
import './Services.css';
import logo from '../../Assets/logo.png';

const services = [
  { title: 'Event Planning & Coordination', image: logo },
  { title: 'Event Consultancy', image: logo },
  { title: 'Catering Services', image: logo },
  { title: 'Theme Decoration', image: logo },
  { title: 'Light & Sound', image: logo },
  { title: 'DJ', image: logo },
  { title: 'Live Band', image: logo },
  { title: 'Choreographer', image: logo },
  { title: 'SFX', image: logo },
  { title: 'Photographer', image: logo },
  { title: 'Makeup Artist', image: logo },
  { title: 'Event Security', image: logo },
  { title: 'Hire-Car for Event', image: logo },
];

function ServiceComponent() {
  return (
    <div className="service-container">
      <h2>Discover Our Exclusive Catering Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
