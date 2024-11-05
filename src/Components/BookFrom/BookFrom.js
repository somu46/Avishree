import React from 'react';

const QuoteForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Request a Quote
                </h2>
                <form className="space-y-4">
                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Your Name *"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {/* Phone Number */}
                    <input
                        type="text"
                        placeholder="Phone Number *"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email *"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {/* Address */}
                    <input
                        type="text"
                        placeholder="Address *"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {/* Requested Services */}
                    <select
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Requested Services</option>
                        <option value="catering">Catering</option>
                        <option value="decoration">Decoration</option>
                        <option value="event-planning">Event Planning</option>
                        {/* Add more options as needed */}
                    </select>

                    {/* Date */}
                    <input
                        type="date"
                        placeholder="DD-MM-YYYY"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {/* Number of Guests */}
                    <input
                        type="number"
                        placeholder="Number Of Guests"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {/* Wishes / Questions / Requests */}
                    <textarea
                        placeholder="Wishes / Questions / Requests"
                        className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                        rows="2"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
                    >
                        Request Quote
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuoteForm;
