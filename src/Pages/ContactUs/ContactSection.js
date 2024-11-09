import React from 'react';
import Catering from "../../Assets/Catering.png"



const ContactSection = () => {
  return (
    <section className="flex flex-col ml-auto mt-[5.1rem] lg:w-[80%] lg:flex-row items-center justify-between bg-white py-12 px-6 lg:px-20">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-green-900 mb-4">
          Get an answer to your catering question
        </h2>
        <p className="text-gray-600">
          We’d love to hear from you. Please tell us about the event you would like us to
          create and we’ll connect with you to get started.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={Catering}
          alt="Chef giving thumbs up"
          className="w-64 lg:w-80 rounded-full"
        />
      </div>
    </section>
  );
};

export default ContactSection;
