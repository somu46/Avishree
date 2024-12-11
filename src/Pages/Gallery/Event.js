import React from 'react';

const Event = ({ image, title, clickedFun }) => {
    return (
        <div 
            onClick={clickedFun}
            className="border relative cursor-pointer group w-full h-64 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:opacity-90"
        >
            <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-3xl font-mono text-white w-full text-center bg-gray-700 opacity-90 p-5 ">{title}</h2>
            </div>
        </div>
    );
};

export default Event;
