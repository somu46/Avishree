import React from 'react'


const GalleryItem = ({ image, title, clickedFun }) => {
  return (
      <div 
          onClick={clickedFun}
          className="border relative cursor-pointer group w-[90%] h-52 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:opacity-90"
      >
          <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center  duration-300">
            
          </div>
      </div>
  );
};



 const Photos = () => {


  const images = [
    { src: 'https://images.pexels.com/photos/29408341/pexels-photo-29408341/free-photo-of-tranquil-autumn-sunrise-in-latvian-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Wedding Collection', id: 'wedding' },
    { src: 'https://images.pexels.com/photos/2348658/pexels-photo-2348658.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Receptions', id: 'receptions' },
    { src: 'https://images.pexels.com/photos/13742504/pexels-photo-13742504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Sangeet & Haldi', id: 'sangeet-haldi' },
    { src: 'https://images.pexels.com/photos/1777428/pexels-photo-1777428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Birthdays Celebrated', id: 'birthdays' },
    { src: 'https://images.pexels.com/photos/27421320/pexels-photo-27421320/free-photo-of-golden-morning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Cultural Events', id: 'cultural-events' },
    { src: 'https://images.pexels.com/photos/24713006/pexels-photo-24713006/free-photo-of-sunrise-over-misty-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Parties Collection', id: 'parties' },
];

  return (
   <>
    <div>
  
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  w-[90%] mx-auto">
                {images.map((image, index) => (
                    <GalleryItem key={index} image={image.src} title={image.title}  />
                ))}
            </section>
            </div>
   </>
  )
}


export default Photos;