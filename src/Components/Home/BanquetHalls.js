import React, { useState } from 'react';
import Haldiram from '../../Assets/HaldiramLogo.png';
import RoyalBanquet from '../../Assets/RoyalBanquet.png';
import Shantibon from '../../Assets/Shantibon.jpeg';
import SaiArati from '../../Assets/Photo Session area.jpeg';
import Zora from '../../Assets/Zora.png'
import Shehnai from '../../Assets/Shehnai.png'

import unavailable from '../../Assets/Img_Unavailable.png'

//RoyalBanquet
import RB1 from '../../Assets/photos/Royal/1.jpeg'
import RB2 from '../../Assets/photos/Royal/2.jpeg'
import RB3 from '../../Assets/photos/Royal/3.jpeg'
import RB4 from '../../Assets/photos/Royal/4.jpeg'
import RB5 from '../../Assets/photos/Royal/5.jpeg'
import RB6 from '../../Assets/photos/Royal/6.jpeg'
import RB7 from '../../Assets/photos/Royal/7.jpeg'
import RB8 from '../../Assets/photos/Royal/8.jpeg'
import RB9 from '../../Assets/photos/Royal/9.jpeg'
import RB10 from '../../Assets/photos/Royal/10.jpeg'
import RB11 from '../../Assets/photos/Royal/11.jpeg'
import RB12 from '../../Assets/photos/Royal/12.jpeg'
//Shantibon
import SB1 from '../../Assets/photos/Shantibon/1.jpeg';
import SB2 from '../../Assets/photos/Shantibon/2.jpeg';
import SB3 from '../../Assets/photos/Shantibon/3.jpeg';
import SB4 from '../../Assets/photos/Shantibon/4.jpeg';
import SB5 from '../../Assets/photos/Shantibon/5.jpeg';
import SB6 from '../../Assets/photos/Shantibon/6.jpeg';
import SB7 from '../../Assets/photos/Shantibon/7.jpeg';
import SB8 from '../../Assets/photos/Shantibon/8.jpeg';
import SB9 from '../../Assets/photos/Shantibon/9.jpeg';
import SB10 from '../../Assets/photos/Shantibon/10.jpeg';
import SB11 from '../../Assets/photos/Shantibon/11.jpeg';
import SB12 from '../../Assets/photos/Shantibon/12.jpeg';
import SB13 from '../../Assets/photos/Shantibon/13.jpeg';
import SB14 from '../../Assets/photos/Shantibon/14.jpeg';
import SB15 from '../../Assets/photos/Shantibon/15.jpeg';
import SB16 from '../../Assets/photos/Shantibon/16.jpeg';
import SB17 from '../../Assets/photos/Shantibon/17.jpeg';
import SB18 from '../../Assets/photos/Shantibon/18.jpeg';
import SB19 from '../../Assets/photos/Shantibon/19.jpeg';
import SB20 from '../../Assets/photos/Shantibon/20.jpeg';
import SB21 from '../../Assets/photos/Shantibon/21.jpeg';
import SB22 from '../../Assets/photos/Shantibon/22.jpeg';
import SB23 from '../../Assets/photos/Shantibon/23.jpeg';
import SB24 from '../../Assets/photos/Shantibon/24.jpeg';
import SB25 from '../../Assets/photos/Shantibon/25.jpeg';
import SB26 from '../../Assets/photos/Shantibon/26.jpeg';
import SB27 from '../../Assets/photos/Shantibon/27.jpeg';
import SB28 from '../../Assets/photos/Shantibon/28.jpeg';
import SB29 from '../../Assets/photos/Shantibon/29.jpeg';
import SB30 from '../../Assets/photos/Shantibon/30.jpeg';
import SB31 from '../../Assets/photos/Shantibon/31.jpeg';
import SB32 from '../../Assets/photos/Shantibon/32.jpeg';
import SB33 from '../../Assets/photos/Shantibon/33.jpeg';
import SB34 from '../../Assets/photos/Shantibon/34.jpeg';
import SB35 from '../../Assets/photos/Shantibon/35.jpeg';
import SB36 from '../../Assets/photos/Shantibon/36.jpeg';
import SB37 from '../../Assets/photos/Shantibon/37.jpeg';
import SB38 from '../../Assets/photos/Shantibon/38.jpeg';
import SB39 from '../../Assets/photos/Shantibon/39.jpeg';
import SB40 from '../../Assets/photos/Shantibon/40.jpeg';
import SB41 from '../../Assets/photos/Shantibon/41.jpeg';
import SB42 from '../../Assets/photos/Shantibon/42.jpeg';
import SB43 from '../../Assets/photos/Shantibon/43.jpeg';
import SB44 from '../../Assets/photos/Shantibon/44.jpeg';
import SB45 from '../../Assets/photos/Shantibon/45.jpeg';
import SB46 from '../../Assets/photos/Shantibon/46.jpeg';
import SB47 from '../../Assets/photos/Shantibon/47.jpeg';
import SB48 from '../../Assets/photos/Shantibon/48.jpeg';
import SB49 from '../../Assets/photos/Shantibon/49.jpeg';
import SB50 from '../../Assets/photos/Shantibon/50.jpeg';
import SB51 from '../../Assets/photos/Shantibon/51.jpeg';
import SB52 from '../../Assets/photos/Shantibon/52.jpeg';
import SB53 from '../../Assets/photos/Shantibon/53.jpeg';
import SB54 from '../../Assets/photos/Shantibon/54.jpeg';
import SB55 from '../../Assets/photos/Shantibon/55.jpeg';
import SB56 from '../../Assets/photos/Shantibon/56.jpeg';
import SB57 from '../../Assets/photos/Shantibon/57.jpeg';
import SB58 from '../../Assets/photos/Shantibon/58.jpeg';
import SB59 from '../../Assets/photos/Shantibon/59.jpeg';
import SB60 from '../../Assets/photos/Shantibon/60.jpeg';
import SB61 from '../../Assets/photos/Shantibon/61.jpeg';
import SB62 from '../../Assets/photos/Shantibon/62.jpeg';
import SB63 from '../../Assets/photos/Shantibon/63.jpeg';
import SB64 from '../../Assets/photos/Shantibon/64.jpeg';
import SB65 from '../../Assets/photos/Shantibon/65.jpeg';
import SB66 from '../../Assets/photos/Shantibon/66.jpeg';
import SB67 from '../../Assets/photos/Shantibon/67.jpeg';
import SB68 from '../../Assets/photos/Shantibon/68.jpeg';
import SB69 from '../../Assets/photos/Shantibon/69.jpeg';
import SB70 from '../../Assets/photos/Shantibon/70.jpeg';
import SB71 from '../../Assets/photos/Shantibon/71.jpeg';
import SB72 from '../../Assets/photos/Shantibon/72.jpeg';
import SB73 from '../../Assets/photos/Shantibon/73.jpeg';
import SB74 from '../../Assets/photos/Shantibon/74.jpeg';
import SB75 from '../../Assets/photos/Shantibon/75.jpeg';
import SB76 from '../../Assets/photos/Shantibon/76.jpeg';
import SB77 from '../../Assets/photos/Shantibon/77.jpeg';
import SB78 from '../../Assets/photos/Shantibon/78.jpeg';
import SB79 from '../../Assets/photos/Shantibon/79.jpeg';
import SB80 from '../../Assets/photos/Shantibon/80.jpeg';
import SB81 from '../../Assets/photos/Shantibon/81.jpeg';
import SB82 from '../../Assets/photos/Shantibon/82.jpeg';
import SB83 from '../../Assets/photos/Shantibon/83.jpeg';
import SB84 from '../../Assets/photos/Shantibon/84.jpeg';
import SB85 from '../../Assets/photos/Shantibon/85.jpeg';
import SB86 from '../../Assets/photos/Shantibon/86.jpeg';
import SB87 from '../../Assets/photos/Shantibon/87.jpeg';
import SB88 from '../../Assets/photos/Shantibon/88.jpeg';



//SaiArati
import SA1 from '../../Assets/photos/Sai Arati/1.jpeg';
import SA2 from '../../Assets/photos/Sai Arati/2.jpeg';
import SA3 from '../../Assets/photos/Sai Arati/3.jpeg';
import SA4 from '../../Assets/photos/Sai Arati/4.jpeg';
import SA5 from '../../Assets/photos/Sai Arati/5.jpeg';
import SA6 from '../../Assets/photos/Sai Arati/6.jpeg';
import SA7 from '../../Assets/photos/Sai Arati/7.jpeg';
import SA8 from '../../Assets/photos/Sai Arati/8.jpeg';
import SA9 from '../../Assets/photos/Sai Arati/9.jpeg';
import SA10 from '../../Assets/photos/Sai Arati/10.jpeg';
import SA11 from '../../Assets/photos/Sai Arati/11.jpeg';
import SA12 from '../../Assets/photos/Sai Arati/12.jpeg';
import SA13 from '../../Assets/photos/Sai Arati/13.jpeg';
import SA14 from '../../Assets/photos/Sai Arati/14.jpeg';
import SA15 from '../../Assets/photos/Sai Arati/15.jpeg';
import SA16 from '../../Assets/photos/Sai Arati/16.jpeg';
import SA17 from '../../Assets/photos/Sai Arati/17.jpeg';
import SA18 from '../../Assets/photos/Sai Arati/18.jpeg';
import SA19 from '../../Assets/photos/Sai Arati/19.jpeg';
import SA20 from '../../Assets/photos/Sai Arati/20.jpeg';
import SA21 from '../../Assets/photos/Sai Arati/21.jpeg';



const banquetHalls = [
  {
    name: 'Haldirams',
    description: 'A spacious and elegant venue for weddings, receptions, and large gatherings. Features modern amenities and beautiful decor.',
    image: Haldiram,
    album: [ unavailable ],
  },
  {
    name: 'Royal Banquet',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: RoyalBanquet,
    album: [RB1,RB2,RB3,RB4,RB5,RB6,RB7,RB8,RB9,RB10,RB11,RB12],
  },
  {
    name: 'Zora',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: Zora,
    album: [unavailable ],
  },
  {
    name: 'Shehnai',
    description: 'Perfect for corporate events and social functions, offering a refined ambiance with premium services.',
    image: Shehnai,
    album: [unavailable],
  },
  {
    name: 'Shantibon',
    description: 'An intimate setting ideal for small to medium-sized events, with customizable decoration and catering options.',
    image: Shantibon,
    album: [ SB1, SB2, SB3, SB4, SB5, SB6, SB7, SB8, SB9, SB10, SB11, SB12, SB13, SB14, SB15, SB16, SB17, SB18, SB19, SB20, SB21, SB22, SB23, SB24, SB25, SB26, SB27, SB28, SB29, SB30, SB31, SB32, SB33, SB34, SB35, SB36, SB37, SB38, SB39, SB40, SB41, SB42, SB43, SB44, SB45, SB46, SB47, SB48, SB49, SB50, SB51, SB52, SB53, SB54, SB55, SB56, SB57, SB58, SB59, SB60, SB61, SB62, SB63, SB64, SB65, SB66, SB67, SB68, SB69, SB70, SB71, SB72, SB73, SB74, SB75, SB76, SB77, SB78, SB79, SB80, SB81, SB82, SB83, SB84, SB85, SB86, SB87, SB88]
  },
  {
    name: 'Sai Arati Banquet',
    description: 'An intimate setting ideal for small to medium-sized events, with customizable decoration and catering options.',
    image: SaiArati,
    album: [ SA1, SA2, SA3, SA4, SA5, SA6, SA7, SA8, SA9, SA10, SA11, SA12, SA13, SA14, SA15, SA16, SA17, SA18, SA19, SA20, SA21 ],
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
          className="bg-white rounded-lg overflow-y-auto max-h-full w-full max-w-4xl p-6 relative"
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
            <img src={enlargedImage} alt="Enlarged" className=" w-[750px] h-[500px] object-cover rounded-lg"/>
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
