import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';
import DJ from '../../Assets/DJ.jpg';
import Band from '../../Assets/liveBand.jpg';
import Security from '../../Assets/Security.PNG';
import Artist from '../../Assets/makeupArtist.jpg';
import SFX from '../../Assets/SFX.jpg';
import Choreographer from '../../Assets/Choreographer.jpg';
import Photographer from '../../Assets/Photographer.jpg';
import LS from '../../Assets/Light&sound.png';
import RentCar from '../../Assets/Car-hire.jpg';
import EventPlanner from '../../Assets/Event Planner.jpg';
import Catering from '../../Assets/Catering.png';
import Consultant from '../../Assets/Consultant.png';
import ThemeR from '../../Assets/ThemeDecoration.png';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

const services = [
  {
    title: 'Event Planning & Coordination',
    image: EventPlanner,
    description: 'Comprehensive planning and coordination for seamless event execution, tailored to your needs.',
  },
  {
    title: 'Event Consultancy',
    image: Consultant,
    description: 'Professional guidance and advice to make your event a success from concept to completion.',
  },
  {
    title: 'Catering Services',
    image: Catering,
    description: 'Delicious and customizable catering options to satisfy every palate and occasion.',
  },
  {
    title: 'Theme Decoration',
    image: ThemeR,
    description: 'Creative and personalized theme decorations to bring your vision to life.',
  },
  {
    title: 'Light & Sound',
    image: LS,
    description: 'Professional light and sound setup to elevate the ambiance and energy of your event.',
  },
  {
    title: 'DJ',
    image: DJ,
    description: 'Experienced DJs to keep the crowd engaged and create a memorable experience.',
  },
  {
    title: 'Live Band',
    image: Band,
    description: 'Talented live band to add excitement and a lively atmosphere to your event.',
  },
  {
    title: 'Choreographer',
    image: Choreographer,
    description: 'Skilled choreographers to create custom dance routines for any occasion.',
  },
  {
    title: 'SFX',
    image: SFX,
    description: 'Special effects to enhance the event’s visual appeal and impress your guests.',
  },
  {
    title: 'Photographer',
    image: Photographer,
    description: 'Professional photographers to capture memorable moments with high-quality photos.',
  },
  {
    title: 'Makeup Artist',
    image: Artist,
    description: 'Experienced makeup artists to ensure you look your best on the big day.',
  },
  {
    title: 'Event Security',
    image: Security,
    description: 'Reliable security team to ensure the safety and security of your event.',
  },
  {
    title: 'Hire-Car for Event',
    image: RentCar,
    description: 'Convenient car rental options for easy and comfortable transportation for your event.',
  },
];

function ServiceComponent() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="service-container mt-[5.1rem]">
      <h2>Discover Our Exclusive Catering Services</h2>
      <div className="service-grid grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mx-auto max-w-[1200px]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            layoutId={`service-${index}`}
            onClick={() => setSelectedService({ ...service, id: `service-${index}` })}
          >
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <FloatingWhatsAppButton />

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            layoutId={selectedService.id}
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
              <h3 className="text-2xl font-bold mt-4 mb-2 text-center">{selectedService.title}</h3>
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
    </div>
  );
}

export default ServiceComponent;
