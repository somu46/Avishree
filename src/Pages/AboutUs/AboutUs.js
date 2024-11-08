import React from 'react';
import teamData from './teamData';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to our catering company! We specialize in delivering exquisite and memorable culinary experiences tailored to your special events.
        </p>
      </div>

      {/* Description Section */}
      <div className="about-description">
        <p>
          At our catering company, we pride ourselves on using the finest ingredients to craft delicious meals that leave a lasting impression. With years of experience and a passion for excellence, our team is dedicated to making your event truly special.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
