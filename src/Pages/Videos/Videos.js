import React from 'react';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';
import SAv1 from '../../Assets/videos/SAv1.mp4';
import SAv2 from '../../Assets/videos/SAv2.mp4';
import v1 from '../../Assets/videos/v1.mp4';
import v2 from '../../Assets/videos/v2.mp4';
import v3 from '../../Assets/videos/v3.mp4';
import v4 from '../../Assets/videos/v4.mp4';
import v5 from '../../Assets/videos/v5.mp4';
import v6 from '../../Assets/videos/v6.mp4';
import v7 from '../../Assets/videos/v7.mp4';
import v8 from '../../Assets/videos/v8.mp4';

const VideoItem = ({ videoSrc, title }) => {
  return (
    <div className="border relative cursor-pointer group w-full h-52 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:opacity-90">
      <video src={videoSrc} title={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" controls />
    </div>
  );
};

const Videos = () => {
  const videos = [
    { src: SAv1, title: 'Sai Arati' },
    { src: SAv2, title: 'Sai Arati' },
    { src: v1, title: 'Shantibon' },
    { src: v2, title: 'Shantibon' },
    { src: v3, title: 'Shantibon' },
    { src: v4, title: 'Shantibon' },
    { src: v5, title: 'Shantibon' },
    { src: v6, title: 'Shantibon' },
    { src: v7, title: 'Shantibon' },
    { src: v8, title: 'Shantibon' }
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
