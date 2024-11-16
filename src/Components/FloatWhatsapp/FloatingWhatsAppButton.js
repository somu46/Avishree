// import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './floatingWhatsAppButton.css';

const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+918777584271', '_blank'); // Replace with your WhatsApp number
  };

  const handleCallClick = () => {
    window.open('tel:8777584271'); // Replace with your phone number
  };

  return (
    <div className="floating-buttons  py-1 -mr-3 z-30">
      <div className="floating-button my-1" onClick={handleCallClick}>
        <FaPhoneAlt aria-label="Call" color='Green' size={30} className='m' />
      </div>
      <div className="floating-button my-1" onClick={handleWhatsAppClick}>
        <FaWhatsapp aria-label="WhatsApp" color='green' size={45} className='' />
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;
