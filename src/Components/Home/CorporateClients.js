// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Haldiram from "../../Assets/HaldiramLogo.png";
import Amartree from "../../Assets/AmarTree.jpg";
import ParadiseCar from '../../Assets/ParadiseCar.png'
import RoyalGroup from '../../Assets/RoyalBanquet.png'
import Shehnai from '../../Assets/Shehnai.png'
import Senco from '../../Assets/senco.webp'

const CorporateClients = () => {
  const clients = [
    { name: "Haldiram Prahuji Ltd.", logo: Haldiram },
    { name: "Amar Tree Group", logo: Amartree },
    { name: "Paradise Car Rental", logo: ParadiseCar },
    { name: "Senco", logo: Senco },
    { name: "Royal group", logo: RoyalGroup },
    { name: "Shehnai Banquet", logo: Shehnai }

  ];

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Corporate Clients
      </h2>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ hideOnClick: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full relative group"
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
        {/* Navigation Arrows */}
        <div className="swiper-button-prev hidden group-hover:flex"></div>
        <div className="swiper-button-next hidden group-hover:flex"></div>
      </Swiper>
    </div>
  );
};

export default CorporateClients;
