import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaCalendarAlt, FaSmile, FaUsers, FaConciergeBell } from 'react-icons/fa';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { id: 1, title: 'Plates Served', count: 10000, icon: <FaUtensils className="text-yellow-500" /> },
    { id: 2, title: 'Events Organized', count: 80, icon: <FaCalendarAlt className="text-blue-500" /> },
    { id: 3, title: 'Happy Clients', count: 800, icon: <FaSmile className="text-green-500" /> },
    { id: 4, title: 'Trained Employees', count: 30, icon: <FaUsers className="text-red-500" /> },
    { id: 5, title: 'Dishes on Menu', count: 200, icon: <FaConciergeBell className="text-purple-500" /> },
  ];

  return (
    <section className=" py-12" ref={ref}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our Numbers That Speak
        </h2>
        <div className="grid grid-cols-1   gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-20 max-w-7xl mx-auto px-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-transparent  rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-110 duration-300"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
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
