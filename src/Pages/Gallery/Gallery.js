import React, { useState } from "react";
import EventsSection from "./EventsSection";
import Photos from "../Photos/Photos";




const Gallery = () => {
  const [sectionId, setsectionId] = useState("");
  const [isopen, setisopen] = useState(true);
  const handleItem = (id) => {
    const element = document.getElementById(id);

    setsectionId(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (sectionId) {
      setisopen(!isopen);
    }
  };

  return (
    <div className="my-[5.1rem]">
      <header className="text-center py-8 bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our Elegant Venue
        </h1>
        <p className="text-lg">
          Our spacious and versatile banquet hall can accommodate events of all
          sizes, from intimate gatherings to grand celebrations. The beautifully
          designed space features high ceilings, modern decor, and customizable
          lighting options to create the perfect atmosphere for your event.
        </p>
      </header>
      {isopen ? (
        <EventsSection propsFun={handleItem} />
      ) : (
        <section id={sectionId} className="h-screen bg-gray-100">
          <div>
            <header className="text-center py-8 bg-gray-100 text-gray-800 relative flex justify-between px-3">
              <div className="mx-5">
                <h1 className="text-4xl font-bold mb-4 text-gray-700 border-b-2 rounded-md border-orange-500">
                  Our {sectionId} Collection
                </h1>
              </div>
              <button
                onClick={() => setisopen(!isopen)}
                className=" mx-5 absolute top-4 right-4 text-white px-4 py-2 bg-[#D4A762] rounded transition-colors duration-300 font-thin hover:bg-white hover:text-[#D4A762]"
              >
                BACK TO GALLERY
              </button>
            </header>
            <Photos />
          </div>
        </section>
      )}
    </div>
  );
};

export default Gallery;
