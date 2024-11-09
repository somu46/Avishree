import React from 'react';
import './ContactUs.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import ContactSection from './ContactSection';





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
      <div className="contact-options mt-10">
        <h1>Follow Us: </h1>
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
      <div className=' lg:w-1/2 mx-0 lg:m-5 h-[80%] flex   w-full  pt-10 overflow-hidden' >
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13329.777848284057!2d88.46299531861573!3d22.63622114887646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f77bdfa1d47%3A0x6f9670a752dda326!2sParadise%20Car%20Rental!5e1!3m2!1sen!2sin!4v1726224121573!5m2!1sen!2sin" 
        title='office'
        width="630" 
        height="380" 
        // style="border:0" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer" 
        className='border-2 border-gray-400 rounded-lg shadow-md transition-all duration-300 ease-in-out  hover:scale-95'>
        </iframe> */}
    </div>
     
    </div>
    </>
  );
};

export default ContactUs;
