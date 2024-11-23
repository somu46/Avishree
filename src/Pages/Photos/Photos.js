import React, { useEffect, useState } from 'react';

import fetchPhotos from '../../Services/PhotoServices';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

function Photos() {

  const [PhotosData, setPhotosData] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
        const response = await fetchPhotos();
        setPhotosData(response); 
    };

    getPhotos();
}, []);



  return (
    <div className=" mt-[5.1rem] mx-auto p-8 flex flex-wrap justify-center flex-col">
      <h2 className="text-3xl font-bold text-center mb-8">Our Photo Gallery</h2>
      <div className='border border-red-500 flex flex-wrap p-3'>
      {PhotosData.map((img, id) => (
          <a key={id} href={img.original} target='_blank' rel="noreferrer" >
            <img alt={`Gallery Thumbnail ${id + 1}`} src={img.thumbnail} className='border border-red-600 m-3' />
          </a>
        ))}
     
      </div>
      
      <FloatingWhatsAppButton />
    </div>
  );
}

export default Photos;
