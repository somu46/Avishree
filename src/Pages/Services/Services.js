import React from 'react';
import './Services.css';
import logo from '../../Assets/logo.png'
const services = [
  { title: 'Baby Shower Catering', image: logo  },
  { title: 'Office Catering Service', image: logo  },
  { title: 'Housewarming Catering', image: logo },
  { title: 'Birthday Party Catering', image: logo },
  { title: 'Anniversary Catering', image: logo},
  { title: 'Bengali Food Catering', image: logo},
  { title: 'Rice Ceremony Catering', image: logo },
  { title: 'Engagement Party Catering', image:logo  },
  { title: 'Reunion Party' , image : logo}
];

function ServiceComponent() {
  return (
    <div className="service-container">
      <h2>Discover Our Different Types Of Catering Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
