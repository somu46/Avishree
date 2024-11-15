import React from 'react';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

const VideosData = [
  {
    id: 1,
    image: 'path/to/sai-arati-image.jpg'
  },
  {
    id:2,
    image: 'path/to/grand-royal-image.jpg'
  },
  {
    id:3,
    image: 'path/to/sunshine-image.jpg'
  }
];

function Videos() {
  return (
    <div className="container mt-[5.1rem] mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Video Gallery</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {VideosData.map((hall, index) => (
          <div key={index} className="banquet-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={hall.image} alt={hall.id} className="w-full h-48 object-cover"/>
          </div>
        ))}
      </div>
      <FloatingWhatsAppButton/>

    </div>
  );
}

export default Videos;