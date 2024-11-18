import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './GalleryStyles.css'; // For additional custom styles

const PhotosData = [
  {
    id: 1,
    original: 'https://images.pexels.com/photos/19555540/pexels-photo-19555540/free-photo-of-decorative-crown-of-thorns-plant.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnail: 'https://images.pexels.com/photos/19555540/pexels-photo-19555540/free-photo-of-decorative-crown-of-thorns-plant.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    original: 'https://images.pexels.com/photos/1250957/pexels-photo-1250957.jpeg?auto=compress&cs=tinysrgb&w=600',
    thumbnail: 'https://images.pexels.com/photos/1250957/pexels-photo-1250957.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    original: 'https://images.pexels.com/photos/3392093/pexels-photo-3392093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/3392093/pexels-photo-3392093.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 4,
    original: 'https://images.pexels.com/photos/1756640/pexels-photo-1756640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/1756640/pexels-photo-1756640.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const GalleryComponent = () => {
  return (
    <div className="gallery-container mt-[5.1rem]">
      <div className="gallery-wrapper">
        <ImageGallery
          items={PhotosData}
          autoPlay={true}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
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
