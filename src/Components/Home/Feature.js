import React from 'react';
import { FaUtensils, FaMagic, FaUsers, FaCalendarCheck } from 'react-icons/fa';
import './Home.css';

const Feature = () => {
    return (
        <section className="features py-20 bg-gray-50">
            {/* Heading */}
            <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-20">
                Why Choose Avishree?
            </h2>

            {/* Feature Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8 lg:px-16">
                
                {/* Card 1 - Exquisite Catering */}
                <div className="feature-card group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-3">
                    <div className="flex items-center justify-center text-indigo-600 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FaUtensils />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Exquisite Catering</h3>
                    <p className="text-gray-600 text-center">
                        Indulge in gourmet experiences with our premium catering services, tailored to meet your event’s theme and taste preferences.
                    </p>
                </div>

                {/* Card 2 - Stunning Decoration */}
                <div className="feature-card group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-3">
                    <div className="flex items-center justify-center text-pink-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FaMagic />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Stunning Decoration</h3>
                    <p className="text-gray-600 text-center">
                        Transform any space with our creative and elegant decor, crafted to bring your vision to life and impress your guests.
                    </p>
                </div>

                {/* Card 3 - Professional Staff */}
                <div className="feature-card group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-3">
                    <div className="flex items-center justify-center text-green-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FaUsers />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Professional Staff</h3>
                    <p className="text-gray-600 text-center">
                        Our team is trained to deliver exceptional service with a professional touch, ensuring every detail is meticulously handled.
                    </p>
                </div>

                {/* Card 4 - Personalized Event Planning */}
                <div className="feature-card group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-3">
                    <div className="flex items-center justify-center text-yellow-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FaCalendarCheck />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Personalized Event Planning</h3>
                    <p className="text-gray-600 text-center">
                        We offer end-to-end event planning services that are customized to your needs, making your special day seamless and stress-free.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Feature;
