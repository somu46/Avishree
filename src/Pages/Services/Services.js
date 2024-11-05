import React from 'react';
import './Services.css';

const services = [
  { title: 'Baby Shower Catering', image: 'path/to/baby-shower.jpg' },
  { title: 'Office Catering Service', image: 'path/to/office-catering.jpg' },
  { title: 'Housewarming Catering', image: 'path/to/housewarming.jpg' },
  { title: 'Birthday Party Catering', image: 'path/to/birthday-party.jpg' },
  { title: 'Anniversary Catering', image: 'path/to/anniversary.jpg' },
  { title: 'Bengali Food Catering', image: 'path/to/bengali-food.jpg' },
  { title: 'Rice Ceremony Catering', image: 'path/to/rice-ceremony.jpg' },
  { title: 'Engagement Party Catering', image: 'path/to/engagement-party.jpg' },
  { title: 'Reunion Party' , image : ''}
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
