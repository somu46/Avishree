import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';
import ContactSection from './ContactSection';
import Office from './Office';

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const defaultMessage =
      "Hello! I am interested in the catering and event management services offered by Avishree Hospitality Pvt. Ltd. Could you please provide more details?";
    window.open(
      `https://wa.me/+918777584271?text=${encodeURIComponent(defaultMessage)}`,
      '_blank'
    );
  };

  return (
    <>
      <ContactSection />
      <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            We’d love to hear from you! Reach out for inquiries or follow us on social platforms.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">Leave Your Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="5"
                ></textarea>
              </div>
              {/* button */}
              <div className='text-center'>
              <button
              type="submit"
              className="w-1/3  bg-yellow-500 text-white py-2 rounded-lg font-semibold text-base hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                Send Message
              </button>
              </div>
            </form>
          </div>

         {/* contact */}
         <div className="flex-1 text-center">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Follow Us</h2>
  <div className="flex justify-center gap-6 mb-8">
    <a
      href="https://www.youtube.com/@avishreehospitality"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600 hover:text-red-700"
    >
      <YouTubeIcon fontSize="large" />
    </a>
    <a
      href="mailto:avishreehospitality@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:text-orange-600"
    >
      <MarkunreadIcon fontSize="large" />
    </a>
    <a
      href="https://wa.me/+918777584271"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:text-green-600"
    >
      <WhatsAppIcon fontSize="large" />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=61565446652658"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700"
    >
      <FacebookIcon fontSize="large" />
    </a>
    <a
      href="https://www.instagram.com/avishreehospitalityofficial"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:text-pink-600"
    >
      <InstagramIcon fontSize="large" />
    </a>
  </div>

  {/* Additional Contact Details */}
  <div className="text-left space-y-6">
    {/* Office Section */}
    <div className="flex items-start space-x-4">
      <span className="p-2 bg-gray-100 rounded-full">
      <LocationOnIcon/>
      </span>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Office</h3>
        <p className="text-gray-600">
          Sai Arati Banquet, Narendranagar<br />
          Monikhola, Narayanpur, Kolkata, West Bengal 700136
        </p>
      </div>
    </div>

    {/* Phone Section */}
    <div className="flex items-start space-x-4">
    
      <span className="p-2 bg-gray-100 rounded-full">
      <PhoneIcon/>
      </span>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Phone</h3>
        <a href='tel: 918777584271'>
        <p className="text-gray-600">+91-8777584271</p>
        </a>
      </div>
      
    </div>

    {/* Email Section */}
    <div className="flex items-start space-x-4">
      <span className="p-2 bg-gray-100 rounded-full">
      <MailOutlineIcon/>
      </span>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Email</h3>
        <a href="mailto:avishreehospitality@gmail.com">
        <p className="text-gray-600"> avishreehospitality@gmail.com</p>
        </a>
      </div>
    </div>
  </div>
</div>

        </div>

        <Office />
        <FloatingWhatsAppButton onClick={handleWhatsAppClick} />
      </div>
    </>
  );
};

export default ContactUs;
