import React from 'react';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';

const VideoItem = ({ videoSrc, title, clickedFun }) => {
  return (
    <div 
      onClick={clickedFun}
      className="border relative cursor-pointer group w-[90%] h-52 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:opacity-90"
    >
      <video src={videoSrc} title={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" controls />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center duration-300"></div>
    </div>
  );
};

const Videos = () => {
  const videos = [
    { src: 'path/to/sai-arati-video.mp4', title: 'Sai Arati', id: 'sai-arati' },
    { src: 'path/to/grand-royal-video.mp4', title: 'Grand Royal', id: 'grand-royal' },
    { src: 'path/to/sunshine-video.mp4', title: 'Sunshine', id: 'sunshine' }
  ];

  return (
    <>
      <div className="container mt-[5.1rem] mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Video Gallery</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[90%] mx-auto">
          {videos.map((video, index) => (
            <VideoItem key={index} videoSrc={video.src} title={video.title} />
          ))}
        </section>
        <FloatingWhatsAppButton />
      </div>
    </>
  );
};

export default Videos;
