import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";

// Import assets
import EventPlanner from "../../Assets/Event Planner.jpg";
import Consultant from "../../Assets/Consultant.png";
import Catering from "../../Assets/Catering.png";
import ThemeR from "../../Assets/ThemeDecoration.png";
import LS from "../../Assets/Light&sound.png";
import DJ from "../../Assets/DJ.jpg";
import Band from "../../Assets/liveBand.jpg";
import Choreographer from "../../Assets/Choreographer.jpg";
import SFX from "../../Assets/SFX.jpg";
import Photographer from "../../Assets/Photographer.jpg";
import Artist from "../../Assets/makeupArtist.jpg";
import Security from "../../Assets/Security.PNG";
import RentCar from "../../Assets/Car-hire.jpg";

// Services Array
const services = [
  { title: "Event Planning & Coordination", image: EventPlanner, description: "Comprehensive planning for seamless execution tailored to your needs." },
  { title: "Event Consultancy", image: Consultant, description: "Guidance to make your event a success from concept to completion." },
  { title: "Catering Services", image: Catering, description: "Delicious and customizable catering options for every occasion." },
  { title: "Theme Decoration", image: ThemeR, description: "Creative theme decorations to bring your vision to life." },
  { title: "Light & Sound", image: LS, description: "Professional setups to elevate your event's ambiance and energy." },
  { title: "DJ", image: DJ, description: "Experienced DJs to keep the crowd engaged and entertained." },
  { title: "Live Band", image: Band, description: "Talented bands to add excitement and a lively atmosphere." },
  { title: "Choreographer", image: Choreographer, description: "Skilled choreographers to create custom routines." },
  { title: "SFX", image: SFX, description: "Special effects to enhance visual appeal and wow your guests." },
  { title: "Photographer", image: Photographer, description: "Professional photographers to capture every moment." },
  { title: "Makeup Artist", image: Artist, description: "Experienced makeup artists for your best look." },
  { title: "Event Security", image: Security, description: "Reliable security for a safe and secure event." },
  { title: "Hire-Car for Event", image: RentCar, description: "Convenient car rentals for easy transportation." },
];

function ServiceComponent() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 mt-[5.1rem]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Discover Our Exclusive Event Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-lg shadow-md hover:shadow-lg p-4 cursor-pointer transition-transform transform hover:-translate-y-2 ${index === services.length - 1 && services.length % 3 === 1 ? 'lg:col-start-2' : ''}`}
            onClick={() => setSelectedService({ ...service, id: index })}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-700">{service.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <FloatingWhatsAppButton />

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 mt-2">{selectedService.description}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md w-full"
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
