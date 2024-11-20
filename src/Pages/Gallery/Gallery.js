import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './GalleryStyles.css';
import PhotosData from '../Photos/PhotoData';



const GalleryComponent = () => {
  return (
    <div className="min-h-screen bg-white py-10 mt-[5.1rem]">
      <h2 className="text-center text-3xl md:text-4xl text-gold font-bold mb-10">Our Elegant Gallery</h2>
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-xl shadow-lg p-8">
        <ImageGallery
          items={PhotosData}
          autoPlay={true}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={true}
          slideInterval={3000}
          showBullets={true}
          infinite={true}
          thumbnailPosition="bottom"
        />
      </div>
    </div>
  );
};

export default GalleryComponent;
