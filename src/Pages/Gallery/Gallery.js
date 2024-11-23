import './GalleryStyles.scss'; 
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryComponent() {
    const [photosData, setPhotosData] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            const apiKey = process.env.REACT_APP_API_KEY;
            const folderId = process.env.REACT_APP_FOLDER_ID;

            try {
                const response = await axios.get(
                    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,thumbnailLink,webContentLink)`
                );
                const files = response.data.files;
                console.log("Files: ", files);

                const formattedPhotos = files.map(file => ({
                    original: `https://drive.usercontent.google.com/download?id=${file.id} `,
                    thumbnail: file.thumbnailLink,
                    alt: file.name
                }));

                console.log("Formatted Photos: ", formattedPhotos);

                setPhotosData(formattedPhotos);
            } catch (error) {
                console.error('Error fetching photos', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div className="mt-[5.1rem] min-h-screen G-App">
            <LightGallery
                onInit={() => console.log('lightGallery has been initialized')}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {photosData.map((image, index) => (
                    <a href={image.original} key={index} data-src={image.original}>
                        <img 
                            alt={image.alt} 
                            src={image.thumbnail} 
                            className='thumblin-img' 
                            onError={(e) => {
                                console.error(`Failed to load thumbnail for ${image.alt}`, e.target.src);
                                e.target.src = 'https://via.placeholder.com/150'; 
                                e.target.alt = 'Image not available';
                            }}
                           
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}

export default GalleryComponent;
