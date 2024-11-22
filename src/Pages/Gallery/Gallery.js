import PhotosData from '../Photos/PhotoData'; 
import './GalleryStyles.scss'; 


import LightGallery from 'lightgallery/react';




// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';






function GalleryComponent() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="mt-[5.1rem] app">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {PhotosData.map((image, index) => {
                    return (
                        <a href={image.original} key={index}>
                            <img alt={image.alt} src={image.thumbnail} className='thumblin-img'/>
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}

// import React, { useEffect } from 'react';
// import Masonry from 'masonry-layout';
// import imagesLoaded from 'imagesloaded';
// import LightGallery from 'lightgallery/react';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgShare from 'lightgallery/plugins/share';
// import lgHash from 'lightgallery/plugins/hash';




// const GalleryComponent = () => {
//   useEffect(() => {
//     const container = document.querySelector('.masonry-gallery-demo');
//     if (container) {
      
//       const msnry = new Masonry(container, {
//         itemSelector: '.gallery-item',
//         columnWidth: '.grid-sizer',
//         percentPosition: true,
//       });

      
//       imagesLoaded(container).on('progress', () => {
//         msnry.layout();
//       });
//     }
//   }, []);

//   return (
//     <div className="mt-[5.3rem] border border-red-500 p-3 h-screen">
//       <LightGallery
//         elementClassNames="masonry-gallery-demo  "
//         plugins={[lgZoom, lgShare, lgHash]}
//         speed={500}
//       >
//         <div className=" flex  border border-blue-500 h-auto m-1"></div>
//         {PhotosData.map((photo) => (
//           <a
//             key={photo.id}
//             href={photo.original}
//             data-lg-size="1600-1067"
//             className=" border border-yellow-600"
//             data-src={photo.original}
//           >
//             <img
//               alt="Gallery poster"
//               className="img-responsive border border-green-500"
//               src={photo.thumbnail}
//             />
//           </a>
//         ))}
//       </LightGallery>
//     </div>
//   );
// };

export default GalleryComponent;
