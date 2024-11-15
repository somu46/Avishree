import React from 'react';
import './Home.css';
import Wedding from "../../Assets/wedding.jpg";
import Party from "../../Assets/party.jpg";
import liveshow from "../../Assets/live show.jpg";
import corporate from "../../Assets/corporate.jpg";

const Services = () => {
  const servicesData = [
    { 
      title: 'Baby Shower Catering', 
      image: 'baby_shower.jpg', 
      description: 'Celebrate the new arrival with customized catering for baby showers.'
    },
    { 
      title: 'Housewarming Catering', 
      image: 'housewarming.jpg', 
      description: 'Catering services that make your housewarming special and memorable.'
    },
    { 
      title: 'Birthday Party Catering', 
      image: 'birthday_party.jpg', 
      description: 'Perfectly tailored catering to celebrate birthdays for all ages.'
    },
    { 
      title: 'Anniversary Catering', 
      image: 'anniversary.jpg', 
      description: 'Catering services that add elegance to your anniversary celebration.'
    },
    { 
      title: 'Bengali Food Catering', 
      image: 'bengali_food.jpg', 
      description: 'Authentic Bengali food catering for a flavorful experience.'
    },
    { 
      title: 'Rice Ceremony Catering', 
      image: 'rice_ceremony.jpg', 
      description: 'Traditional rice ceremony catering for a cultural celebration.'
    },
    { 
      title: 'Engagement Party Catering', 
      image: 'engagement.jpg', 
      description: 'Celebrate engagements with our premium catering service.'
    },
    { 
      title: 'Engagement Party Catering', 
      image: 'engagement.jpg', 
      description: 'Celebrate engagements with our premium catering service.'
    },
    {
      title: 'Wedding',
      image: Wedding,
      description:
        'Make your special day unforgettable with our top-tier wedding planning services. From venue decoration to catering, we ensure every detail is perfect. Our experienced team will handle everything from start to finish, allowing you to focus on enjoying the moment.',
    },

    {
      title: 'Party',
      image: Party,
      description:
        'Throw a party your guests won’t forget! Whether it\'s a birthday bash, anniversary celebration, or themed event, we provide everything from sound and lighting to décor and entertainment, ensuring your party is lively and perfectly executed.',
    },
    {
      title: 'Live Show',
      image: liveshow,
      description:
        'Experience the thrill of live entertainment with our expertly organized shows. From concerts to stand-up comedy, we handle logistics, staging, and sound systems, ensuring your live show is a smashing success.',
    },
    {
      title: 'Corporate',
      image: corporate,
      description:
        'Elevate your corporate events with our professional planning services. We specialize in conferences, product launches, and business meetings, handling everything from venue setup to audio-visual equipment.',
    },
    
  ];

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Events We Organize
      </h2>
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
