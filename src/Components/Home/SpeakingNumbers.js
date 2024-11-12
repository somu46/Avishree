import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  const stats = [
    { id: 1, title: 'Plates Served', count: 10000 },
    { id: 2, title: 'Events Organized', count: 80 },
    { id: 3, title: 'Happy Clients', count: 800 },
    { id: 4, title: 'Trained Employees', count: 30 },
  ];

  return (
    <section className="bg-gray-100 py-12 flex flex-col  lg:flex-row" ref={ref}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Number That Speaks</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-screen m-3 my-5">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-transparent shadow-sm p-6 rounded-md">
              <h3 className="text-4xl font-bold text-indigo-600">
                {inView ? (
                  <CountUp start={0} end={stat.count} duration={5} separator="," />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-lg font-medium mt-2 text-gray-700">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
