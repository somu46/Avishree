// import PhotosData from '../Photos/PhotoData'; 
import './GalleryStyles.scss'; 


import LightGallery from 'lightgallery/react';




// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';



import { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryComponent() {
    const [photosData, setPhotosData] = useState([]);

    useEffect(() => {
        // Function to fetch photos from Google Drive
        const fetchPhotos = async () => {
            const apiKey = 'YOUR_API_KEY';
            const folderId = 'YOUR_FOLDER_ID';

            try {
                const response = await axios.get(
                    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,thumbnailLink,webContentLink)`
                );
                const files = response.data.files;

                const formattedPhotos = files.map(file => ({
                    original: file.webContentLink,
                    thumbnail: file.thumbnailLink,
                    alt: file.name
                }));

                setPhotosData(formattedPhotos);
            } catch (error) {
                console.error('Error fetching photos', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div className="mt-[5.1rem] h-screen app">
            <LightGallery
                onInit={() => console.log('lightGallery has been initialized')}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {photosData.map((image, index) => (
                    <a href={image.original} key={index}>
                        <img alt={image.alt} src={image.thumbnail} className='thumblin-img' />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}





















// function GalleryComponent() {


        
//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };
//     return (
//         <div className="mt-[5.1rem] app">
//             <LightGallery
//                 onInit={onInit}
//                 speed={500}
//                 plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
//             >

//                 {PhotosData.map((image, index) => {
//                     return (
//                         <a href={image.original} key={index}>
//                             <img alt={image.alt} src={image.thumbnail} className='thumblin-img'/>
//                         </a>
//                     )
//                 })}


//             </LightGallery>
//         </div>
//     );
// }


export default GalleryComponent;
