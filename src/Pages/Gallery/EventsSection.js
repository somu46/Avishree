import React from 'react';
import Event from './Event';
import weddingThumb from "../../Assets/wedding.jpg";
import sangeetHaldiThumb from "../../Assets/photos/Shantibon/2.jpeg";
import Birthdays from "../../Assets/Birthday.jpg";
import Party from "../../Assets/party.jpg";
import Cultural  from "../../Assets/cultural-shows.jpg";
import Receptions  from "../../Assets/Rsepstion.jpeg";



const events = [
    { image: weddingThumb, title: 'Wedding Collection', id: 'wedding' },
    { image:Receptions, title: 'Receptions', id: 'receptions' },
    { image: sangeetHaldiThumb, title: 'Sangeet & Haldi', id: 'sangeet-haldi' },
    { image: Birthdays, title: 'Birthdays Celebrated', id: 'birthdays' },
    { image: Cultural, title: 'Cultural Events', id: 'cultural-events' },
    { image: Party, title: 'Parties Collection', id: 'parties' },
];

const EventsSection = ({ propsFun }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {events.map((event, index) => (
                <Event
                    key={index}
                    image={event.image}
                    title={event.title}
                    clickedFun={() => propsFun(event.id)}
                />
            ))}
        </section>
    );
};

export default EventsSection;
