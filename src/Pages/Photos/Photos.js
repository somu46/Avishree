import React, { useState } from 'react';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

const PhotosData = [
  {
    id: 1,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464204252_122116727162514888_9205309151012874358_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=54ZO6G0fLEQQ7kNvgGQTJAR&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=Az2wEnBQOyb4t0jSFejBwUn&oh=00_AYBkRjHV2B1ujF1r8Q3WuUcII_mDpkFVNtZHPhf9R9nD6Q&oe=67395343',
  },
  {
    id: 2,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464112787_122116727132514888_2278513851889402223_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DCN2X996Fw0Q7kNvgFBZNYq&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AjhKS0c1YQ_G3LEdJnIOuPc&oh=00_AYAiacnTwAUydvV3F9Wuz9w4jNomdpvtv940wxZec2L2fg&oe=67393D7C'
  },
  {
    id: 3,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464322041_122116727102514888_3700317002850497627_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ivn-kf2S7LYQ7kNvgGXNC1Z&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AyrTvGw15guh7WzJTAwhoL9&oh=00_AYBHSRJ2PL2xcvKOxF_7Xk2sTELauP_mv_kGcsLknzE-XQ&oe=67395578'
  },
];

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mt-[5.1rem] mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Photo Gallery</h2>
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {PhotosData.map((hall, index) => (
          <div
            key={index}
            className="banquet-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openLightbox(hall.image)}
          >
            <img src={hall.image} alt={`pho ${hall.id}`} className="w-full h-48 object-cover"/>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed mt-[5.1rem] inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="w-full max-h-[80vh] object-contain"/>
            <button
              className="absolute top-2 text-5xl right-2 text-white bg-transparent rounded-full p-2 focus:outline-none hover:bg-gray-800"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <FloatingWhatsAppButton />
    </div>
  );
}

export default Photos;
