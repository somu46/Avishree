import React from 'react';

const banquetHalls = [
  {
    name: 'Haldirams',
    description: 'A spacious and elegant venue for weddings, receptions, and large gatherings. Features modern amenities and beautiful decor.',
    image: 'path/to/sai-arati-image.jpg'
  },
  {
    name: 'Royal Banquet',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: 'path/to/grand-royal-image.jpg'
  },
  {
    name: 'Shantibon',
    description: 'An intimate setting ideal for small to medium-sized events, with customizable decoration and catering options.',
    image: 'path/to/sunshine-image.jpg'
  }
];

function BanquetHalls() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Banquet Halls</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {banquetHalls.map((hall, index) => (
          <div key={index} className="banquet-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={hall.image} alt={hall.name} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{hall.name}</h3>
              <p className="text-gray-600">{hall.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BanquetHalls;
