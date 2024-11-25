import React, { useState } from 'react';
import Haldiram from '../../Assets/HaldiramLogo.png';
import RoyalBanquet from '../../Assets/RoyalBanquet.png';
import Shantibon from '../../Assets/Shantibon.jpeg';
import SaiArati from '../../Assets/Photo Session area.jpeg';
import Zora from '../../Assets/Zora.png'
import Shehnai from '../../Assets/Shehnai.png'

const banquetHalls = [
  {
    name: 'Haldirams',
    description: 'A spacious and elegant venue for weddings, receptions, and large gatherings. Features modern amenities and beautiful decor.',
    image: Haldiram,
    album: [ Haldiram,Haldiram ],
  },
  {
    name: 'Royal Banquet',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: RoyalBanquet,
    album: [RoyalBanquet, RoyalBanquet ],
  },
  {
    name: 'Zora',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: Zora,
    album: [Zora, Zora ],
  },
  {
    name: 'Shehnai',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: Shehnai,
    album: [Shehnai,Shehnai],
  },
  {
    name: 'Shantibon',
    description: 'An intimate setting ideal for small to medium-sized events, with customizable decoration and catering options.',
    image: Shantibon,
    album: [Shantibon,Shantibon],
  },
  {
    name: 'Sai Arati Banquet',
    description: 'An intimate setting ideal for small to medium-sized events, with customizable decoration and catering options.',
    image: SaiArati,
    album: [SaiArati,SaiArati],
  },
];

function BanquetHalls() {

  const [selectedHall, setSelectedHall] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const openAlbum = (hall) => {
    setSelectedHall(hall);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedHall(null);
    setIsModalOpen(false);
  };

  const enlargeImage = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Banquet Halls</h2>
      <div className="flex flex-wrap justify-center gap-8 py-3">
        {banquetHalls.map((hall, index) => (
          <div
            key={index}
            className=" bg-white  shadow-lg rounded-lg  overflow-hidden cursor-pointer w-[80%] max-w-xs "
            onClick={() => openAlbum(hall)}
          >
            <img src={hall.image} alt={hall.name} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h3 className="text-xl font-semibold mb-2">{hall.name}</h3>
              <p className="text-gray-600">{hall.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedHall && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-11/12 max-w-4xl p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-4 right-4 text-black hover:text-gray-900 text-5xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedHall.name}</h3>
            <p className="text-gray-600 mb-6">{selectedHall.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedHall.album.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`poster ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => enlargeImage(photo)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeEnlargedImage}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={enlargedImage} alt="Enlarged" className="w-[750px] h-[500px] object-cover rounded-lg"/>
            <button className="absolute top-2 right-2 text-white text-5xl font-bold hover:text-gray-300" onClick={closeEnlargedImage}>
              &times;
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default BanquetHalls;
