// import React from 'react';
import PhotosData from "./importedPhoto.js"
import './Photo.css';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
function Photos() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="photo-body">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom,lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
               {
                PhotosData.map((photo)=>{
                    return (
                        <a key={photo.id}  href={photo.image}>
                            <img alt="img1" src={photo.image} />
                        </a>  
                    );
                })
               }

              
            </LightGallery>
        </div>
    );
}

export default Photos;

                //  <a href="https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                //     <img alt="img1" src="https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                // </a>
                // <a href="https://images.pexels.com/photos/9899228/pexels-photo-9899228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                //     <img alt="img2" src="https://images.pexels.com/photos/9899228/pexels-photo-9899228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                // </a>