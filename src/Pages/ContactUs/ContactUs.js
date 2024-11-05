import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-options">
        <a href="tel:+1234567890" className="contact-link">
          <i className="fa fa-phone"></i> +1 (234) 567-890
        </a>
        <a href="mailto:example@example.com" className="contact-link">
          <i className="fa fa-envelope"></i> example@example.com
        </a>
        <a href="https://wa.me/1234567890" className="contact-link" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp"></i> WhatsApp
        </a>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
