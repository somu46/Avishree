// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

const Gallery = () => {
  const navigate = useNavigate();

  const handlePhotoClick = () => {
    navigate('/Gallery/photos'); // Updated path
  };

  const handleVideoClick = () => {
    navigate('/Gallery/videos'); // Updated path
  };

  return (
    <div className="gallery-container mt-[5.1rem]">
      <div className="card modern-card" onClick={handlePhotoClick}>
        <h2>Photo</h2>
        <p>View our photo gallery</p>
      </div>
      <div className="card classic-card" onClick={handleVideoClick}>
        <h2>Video</h2>
        <p>Watch our video collection</p>
      </div>
      <FloatingWhatsAppButton/>

    </div>
  );
};

export default Gallery;
