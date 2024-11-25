import React from 'react';
import teamData from './teamData';
import founderImage from '../../Assets/Aurodeep Paul.jpg'; // Import the founder's image
import Company from '../../Assets/logo.png';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

const AboutUs = () => {
  return (
    <div className="mt-[5.1rem] border p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#0c4b65]">About Us</h1>
        <p className="mx-auto my-3 text-center text-lg text-gray-700 lg:max-w-[50%]">
          Welcome to Avishree Hospitality Pvt. Ltd.! We specialize in delivering
          exquisite and memorable event experiences, including catering,
          weddings, corporate events, and live shows.
        </p>
      </div>

      <div className="flex flex-wrap w-full justify-center lg:justify-between">
        {/* Company Description */}
        <div className="flex flex-col items-center lg:m-3 lg:w-[45%]">
          <img src={Company} alt="Aurodeep Paul" className="w-48 h-48 rounded-full object-cover mb-4" />
          <div className="lg:p-3">
            <h1 className="text-2xl font-semibold text-center my-3">
              Avishree Hospitality Pvt. Ltd.
            </h1>
          </div>
          <p className="text-center text-gray-700">
            We pride ourselves on using only the finest ingredients, innovative
            ideas, and meticulous planning to ensure that every event we handle
            is nothing short of spectacular. From elegant weddings to vibrant
            corporate events, live shows, and intimate gatherings, we take care
            of every detail so you can focus on enjoying your special day.
          </p>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col items-center m-3 lg:w-[48%]">
          <img
            src={founderImage}
            alt="Aurodeep Paul"
            className="w-48 h-48 rounded-full object-cover mb-4"
          />
          <div className="flex flex-col items-center text-center py-3">
            <h3 className="text-2xl font-semibold text-[#0c4b65]">Aurodeep Paul</h3>
            <p className="text-lg text-gray-700">Founder & CEO</p>
            <p className="text-gray-700 mt-2">
              Aurodeep Paul brings a wealth of experience and a passion for
              hospitality to Avishree Hospitality Pvt. Ltd. His vision is to
              create exceptional events with personalized service, ensuring
              that each celebration is as unique as the clients we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:flex-wrap lg:justify-center">
      <h2 className="mb-5 text-3xl font-bold w-full text-center">Meet Our Team</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center max-w-xs">
              <div className="flex justify-center p-2">
                <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full object-cover mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-[#0c4b65]">{member.name}</h3>
              <p className="text-lg text-gray-700">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default AboutUs;
