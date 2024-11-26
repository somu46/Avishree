import React, { useEffect, useState } from 'react';
import './Photo.scss';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {Receptions,Wedding,Parties,CulturalEvents,Birthdays,SangeetHaldi} from './Data/AssestsData';

const itemsArray = ['wedding', 'receptions', 'sangeet-haldi', 'birthdays', 'cultural-events', 'parties'];

const Photos = ({ id }) => {
    const [PhotoData, setPhotoData] = useState([]);

    useEffect(() => {
        if (itemsArray.includes(id)) {
            if(id==="wedding"){
                setPhotoData(Wedding);
            }
            if(id==="receptions"){
                setPhotoData(Receptions);
            }
            if(id==="sangeet-haldi"){
                setPhotoData(SangeetHaldi);
            }
            if(id==="birthdays"){
                setPhotoData(Birthdays);
            }
            if(id==="cultural-events"){
                setPhotoData(CulturalEvents);
            }
            if(id==="parties"){
                setPhotoData(Parties);
            }
        } else {
            setPhotoData([]); // Clear data for invalid IDs
        }
    }, [id]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 w-[90%] mx-auto border">
                <LightGallery
                    onInit={() => console.log('lightGallery has been initialized')}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {PhotoData.length > 0 ? (
                        PhotoData.map((image, index) => (
                            <a href={image.src} key={index} data-src={image.src}>
                                <img
                                    alt={image.title || `Image ${index + 1}`}
                                    src={image.src}
                                    className="thumblin-img"
                                />
                            </a>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No images available for this category.</p>
                    )}
                </LightGallery>
            </div>
        </>
    );
};

export default Photos;
