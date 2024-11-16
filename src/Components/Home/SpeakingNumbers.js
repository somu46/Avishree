// import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaCalendarAlt, FaSmile, FaUsers } from 'react-icons/fa';



const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { id: 1, title: 'Plates Served', count: 10000, icon: <FaUtensils /> },
    { id: 2, title: 'Events Organized', count: 80, icon: <FaCalendarAlt /> },
    { id: 3, title: 'Happy Clients', count: 800, icon: <FaSmile /> },
    { id: 4, title: 'Trained Employees', count: 30, icon: <FaUsers /> },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-16" ref={ref}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Our Numbers That Speak
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center transform transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl text-indigo-500 mb-4">{stat.icon}</div>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-2">
                {inView ? (
                  <CountUp start={0} end={stat.count} duration={3} separator="," />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-lg font-medium text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
