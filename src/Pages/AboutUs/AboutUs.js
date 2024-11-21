// import React from "react";
import teamData from "./teamData";
import "./AboutUs.css";
import founderImage from "../../Assets/Aurodeep Paul.jpg"; // Import the founder's image
import Company from "../../Assets/logo.png"
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";


const AboutUs = () => {
  return (
    <div className="about-container mt-[5.1rem]">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Us</h1>
        <p className="mx-auto my-3 text-center  lg:max-w-[50%]">
          Welcome to Avishree Hospitality Pvt. Ltd.! We specialize in delivering
          exquisite and memorable event experiences, including catering,
          weddings, corporate events, and live shows.
        </p>
      </div>
           {/* Company Description on the right */}
           <div className="flex flex-wrap items-center flex-col founder-info lg:m-3 lg:w-[45%]">
          <img
            src={Company}
            alt="Aurodeep Paul"
            className="founder-image"
          />
          <div className="lg:p-3">
            <h1 className="text-2xl font-semibold  text-center my-3">Avishree Hospitality Pvt. Ltd. </h1>
          </div>
          <p className=" text-center">
            We pride ourselves on using only the finest ingredients, innovative
            ideas, and meticulous planning to ensure that every event we handle
            is nothing short of spectacular. From elegant weddings to vibrant
            corporate events, live shows, and intimate gatherings, we take care
            of every detail so you can focus on enjoying your special day.
          </p>
        </div>
      {/* Founder and Company Description Section */}
      <div className="flex flex-wrap flex-row justify-evenly  h-auto lg:p-3 my-10">
        {/* Founder Section on the left */}
        <div className="flex  flex-col justify-center items-center  m-3 lg:w-[48%] ">
          <img
            src={founderImage}
            alt="Aurodeep Paul"
            className="founder-image"
          />
          <div className="founder-info flex flex-col text-center py-3">
            <h3>
              <b>Aurodeep Paul</b>
            </h3>
            <p className="my-1">
              <b>Founder & CEO</b>
            </p>
            <p className="founder-description">
              Aurodeep Paul brings a wealth of experience and a passion for
              hospitality to Avishree Hospitality Pvt. Ltd. His vision is to
              create exceptional events with personalized service, ensuring that
              each celebration is as unique as the clients we serve.
            </p>
          </div>
        </div>

     
      </div>

      {/* Team Section */}
      <div className="flex  flex-wrap lg:flex-row  justify-center">
        <h2 className="mb-5 text-3xl">Meet Our Team</h2>
        <div className="flex flex-col gap-8 lg:flex-row ">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              <div className=" flex justify-center  p-2">
                <img src={member.image} alt={member.name} />{" "}
              </div>
              <h3 className="text-2xl">{member.name}</h3>
              <p>{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FloatingWhatsAppButton/>

    </div>
  );
};

export default AboutUs;
