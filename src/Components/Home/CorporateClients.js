import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Haldiram from "../../Assets/Haldiram's-Logo.png";
import Amartree from "../../Assets/AmarTree.jpg";

const CorporateClients = () => {
  const clients = [
    { name: 'Haldiram Prahuji Ltd.', logo: Haldiram },
    { name: 'Amartree Group', logo: Amartree },
    { name: 'Haldiram Prahuji Ltd.', logo: Haldiram },
    { name: 'Amartree Group', logo: Amartree },
    { name: 'Haldiram Prahuji Ltd.', logo: Haldiram },
    { name: 'Amartree Group', logo: Amartree },
  ];

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Corporate Clients
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-48 h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{client.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CorporateClients;
