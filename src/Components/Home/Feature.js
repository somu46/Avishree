import React from 'react';
import './Home.css';

const Feature = () => {
    return (
        <section className="features py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Avishree?</h2>
            <div className="features-cards flex flex-wrap justify-center gap-8">
                
                <div className="feature-card bg-white shadow-lg rounded-lg p-6 max-w-sm transition-transform transform hover:scale-105">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-semibold text-indigo-600">Exquisite Catering</h3>
                    </div>
                    <p className="text-gray-600 text-center">Indulge in gourmet experiences with our premium catering services, tailored to meet your event’s theme and taste preferences.</p>
                </div>

                <div className="feature-card bg-white shadow-lg rounded-lg p-6 max-w-sm transition-transform transform hover:scale-105">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-semibold text-indigo-600">Stunning Decoration</h3>
                    </div>
                    <p className="text-gray-600 text-center">Transform any space with our creative and elegant decor, crafted to bring your vision to life and impress your guests.</p>
                </div>

                <div className="feature-card bg-white shadow-lg rounded-lg p-6 max-w-sm transition-transform transform hover:scale-105">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-semibold text-indigo-600">Professional Staff</h3>
                    </div>
                    <p className="text-gray-600 text-center">Our team is trained to deliver exceptional service with a professional touch, ensuring every detail is meticulously handled.</p>
                </div>

                <div className="feature-card bg-white shadow-lg rounded-lg p-6 max-w-sm transition-transform transform hover:scale-105">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-semibold text-indigo-600">Personalized Event Planning</h3>
                    </div>
                    <p className="text-gray-600 text-center">We offer end-to-end event planning services that are customized to your needs, making your special day seamless and stress-free.</p>
                </div>

            </div>
        </section>
    );
}

export default Feature;
