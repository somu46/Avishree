import'./ContactUs.css'
// import React from 'react';

const Ofiice = () => {
  return (
    <div className="w-full lg:ww-auto  lg:m-5 mx-auto flex items-center justify-center pt-10 h-[50vh] lg:h-[100%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.1280867446533!2d88.4629095002193!3d22.643983178467554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f1e23f631ef%3A0x5c732f7a90c6edf9!2sSai%20Arati%20Banquet!5e1!3m2!1sen!2sin!4v1731183487039!5m2!1sen!2sin"
        title="Office Location"
        className="Map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Ofiice;
