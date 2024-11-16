// import React from 'react';
import './ContactUs.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import ContactSection from './ContactSection';
import Ofiice from './Office';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';





const ContactUs = () => {
  return (
    <> <ContactSection/>
    <div className="contact-container ">
     
      <h1>Contact Us</h1>
    

      <form className="contact-form rounded-md hover:shadow-fuchsia-50">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      <div className='mt-10'> <h1>Follow Us On: </h1></div>   
      <div className="contact-options ">
   
        <a href="https://www.youtube.com/@Avishree-241"  className="contact-link youtube " target="_blank"  rel="noopener noreferrer">
         <YouTubeIcon/>
        </a>
        <a href="mailto:example@example.com" className="contact-link mail ">
         <MarkunreadIcon />
        </a>
        <a href="https://wa.me/1234567890" className="contact-link whatsapp" target="_blank" rel="noopener noreferrer">
         <WhatsAppIcon  />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61565446652658" className="contact-link facebook " target="_blank" rel="noopener noreferrer">
         <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/avishreehospitalityofficial" className="contact-link  instagram" target="_blank" rel="noopener noreferrer">
         <InstagramIcon  aria-label='instagram'/>
        </a>
        <a href="https://linktr.ee/AvishreeHospitality" className="contact-link  linktree" target="_blank" rel="noopener noreferrer">
         <LinkIcon />
        </a>
      </div>
      <div className='lg:h-auto'>
      <Ofiice/>
    </div>
    <FloatingWhatsAppButton/>

    </div>
    </>
  );
};

export default ContactUs;
