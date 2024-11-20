import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const PhotosData = [
  {
    id: 1,
    image: '',
  },
  {
    id: 2,
    image: '',
  },
  {
    id: 3,
    image: '',
  },
];

function Photos() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="container mt-[5.1rem] mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Photo Gallery</h2>
      <LightGallery speed={500} onInit={onInit} plugins={[lgThumbnail, lgZoom]}>
        {PhotosData.map((img, id) => (
          <a key={id} href={img.image}>
            <img alt={`Gallery Thumbnail ${id + 1}`} src={img.image} />
          </a>
        ))}
      </LightGallery>
      <FloatingWhatsAppButton />
    </div>
  );
}

export default Photos;
