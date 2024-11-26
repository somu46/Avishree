import React from 'react'
import './Photo.scss';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';






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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  w-[90%] mx-auto border border-red-500 ' >
            <LightGallery
                onInit={() => console.log('lightGallery has been initialized')}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {images.map((image, index) => (
                    <a href={image.src} key={index} data-src={image.src}>
                        <img
                            alt="poster"
                            src={image.src}
                            className="thumblin-img"
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
   </>
  )
}


export default Photos;