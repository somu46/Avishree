import React from 'react';
import Event from './Event';

const events = [
    { image: 'https://images.pexels.com/photos/29408341/pexels-photo-29408341/free-photo-of-tranquil-autumn-sunrise-in-latvian-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Wedding Collection', id: 'wedding' },
    { image: 'https://images.pexels.com/photos/2348658/pexels-photo-2348658.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Receptions', id: 'receptions' },
    { image: 'https://images.pexels.com/photos/13742504/pexels-photo-13742504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Sangeet & Haldi', id: 'sangeet-haldi' },
    { image: 'https://images.pexels.com/photos/1777428/pexels-photo-1777428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Birthdays Celebrated', id: 'birthdays' },
    { image: 'https://images.pexels.com/photos/27421320/pexels-photo-27421320/free-photo-of-golden-morning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Cultural Events', id: 'cultural-events' },
    { image: 'https://images.pexels.com/photos/24713006/pexels-photo-24713006/free-photo-of-sunrise-over-misty-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Parties Collection', id: 'parties' },
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
