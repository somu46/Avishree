import { useState } from 'react';
import './Home.css';
import { motion, AnimatePresence } from "framer-motion";
import Wedding from "../../Assets/wedding.jpg";
import Party from "../../Assets/party.jpg";
import liveshow from "../../Assets/live show.jpg";
import corporate from "../../Assets/corporate.jpg";
import RiceCeremony from  '../../Assets/riceSeromoni.webp'
import Engagement from '../../Assets/Engagement.jpg'
import BengaliFood from '../../Assets/BengaliFood.webp'
import Aniversary from '../../Assets/Anniversary.webp'
import Birthday from '../../Assets/Birthday.jpg'
import HouseWarming from '../../Assets/House-Warming.jpg'
import BabyShower from '../../Assets/BabyShowering.jpg'

const Services = () => {


  const [selectedService, setSelectedService] = useState(null);
  

  const servicesData = [
    { 
      title: 'Baby Shower Catering', 
      image: BabyShower, 
      description: 'Celebrate the new arrival with customized catering for baby showers.'
    },
    { 
      title: 'Housewarming Catering', 
      image: HouseWarming, 
      description: 'Catering services that make your housewarming special and memorable.'
    },
    { 
      title: 'Birthday Party Catering', 
      image: Birthday, 
      description: 'Perfectly tailored catering to celebrate birthdays for all ages.'
    },
    { 
      title: 'Anniversary Catering', 
      image: Aniversary, 
      description: 'Catering services that add elegance to your anniversary celebration.'
    },
    { 
      title: 'Bengali Food Catering', 
      image: BengaliFood, 
      description: 'Authentic Bengali food catering for a flavorful experience.'
    },
    { 
      title: 'Rice Ceremony Catering', 
      image: RiceCeremony, 
      description: 'Traditional rice ceremony catering for a cultural celebration.'
    },
    { 
      title: 'Engagement Party Catering', 
      image: Engagement, 
      description: 'Celebrate engagements with our premium catering service.'
    },
    // { 
    //   title: 'Engagement Party Catering', 
    //   image: Engagement, 
    //   description: 'Celebrate engagements with our premium catering service.'
    // },
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
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedService({ ...service, id: `card-${index}` })}
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
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            layoutId={selectedService.id}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 mb-2 text-center">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 text-center">{selectedService.description}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded block mx-auto"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


export default Services;
