import React from 'react';

function IntroSection() {
  return (
    <div className="bg-white text-gray-700 p-8 md:p-12 lg:p-16 mx-auto max-w-5xl rounded-lg shadow-md">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
        Avishree Hospitality Pvt. Ltd.
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-8">
        Providing Unmatched Event Organizing and Catering Services in Kolkata Since 1965
      </p>
      <p className="text-md md:text-lg text-gray-700 mb-6 leading-relaxed">
        At Avishree Hospitality Pvt. Ltd., we pride ourselves on delivering exceptional event organizing and catering services that transform every occasion into a memorable experience. With decades of expertise, we understand that every event is unique, and we are committed to providing personalized services tailored to your specific needs. Our team, composed of experienced event planners and talented chefs, goes beyond expectations to create both stunning decor and exquisite dishes that leave a lasting impression.
      </p>
      <p className="text-md md:text-lg text-gray-700 mb-6 leading-relaxed">
        From traditional Bengali specialties to an extensive selection of international cuisines, our culinary team meticulously sources fresh ingredients to create dishes that captivate both in flavor and presentation. Whether it's an elegant wedding, a corporate gathering, or an intimate celebration, we ensure every detail is flawlessly executed, offering a seamless blend of creativity and professionalism.
      </p>
      <p className="text-md md:text-lg text-gray-700 mb-8 leading-relaxed">
        Our dedication to excellence in service and culinary art sets us apart as one of Kolkata’s premier event organizers and caterers. Trust Avishree Hospitality Pvt. Ltd. to turn your event into an unforgettable experience, filled with delightful flavors, beautiful decor, and impeccable service.
      </p>
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default IntroSection;
