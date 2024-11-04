import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './floatingWhatsAppButton.css';

const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8777584271', '_blank'); // Replace with your WhatsApp number
  };

  const handleCallClick = () => {
    window.open('tel:8777584271'); // Replace with your phone number
  };

  return (
    <div className="floating-buttons">
      <div className="floating-button" onClick={handleCallClick}>
        <FaPhoneAlt aria-label="Call" />
      </div>
      <div className="floating-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp aria-label="WhatsApp" />
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;
