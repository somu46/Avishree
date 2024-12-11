// import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 mt-[5.1rem]">
            <h1 className="text-9xl font-bold text-orange-500">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2 text-center">
                Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <img 
                src="https://www.shutterstock.com/shutterstock/photos/2505203031/display_1500/stock-vector-cable-unplug-lost-connection-sign-cable-cord-disconnection-2505203031.jpg" 
                alt="Illustration of a lost person" 
                className="w-60 h-auto mt-6"
            />
            <Link to="/" className="mt-6">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
