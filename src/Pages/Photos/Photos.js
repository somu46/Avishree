import React, { useEffect, useState } from "react";
import fetchPhotos from "../../Services/PhotoServices";
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";
import { LoadingBlueSpinner } from "../../Components/Loding/Loding";

function Photos() {
  const [photosData, setPhotosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetchPhotos();
        console.log("Files fetched: ", response);

        const validPhotos = response.filter(img => {
          if (img.thumbnail && img.original) {
            return true;
          } else {
            console.warn(`Invalid file: ${img.alt}`, img);
            return false;
          }
        });
        console.log("Valid Photos: ", validPhotos);

        setPhotosData(validPhotos);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 1-second delay for better UX

      } catch (error) {
        console.error("Error fetching photos:", error);
        setIsLoading(false);
      }
    };
    getPhotos();
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="mt-[5.1rem] mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Photo Gallery</h2>

      {isLoading ? (
        <div className="text-center mt-5 p-5">
          <LoadingBlueSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photosData.length > 0 ? (
            photosData.map((img, id) => (
              <div key={id} className="relative group">
                <img
                  alt={`Gallery Thumbnail ${id + 1}`}
                  src={img.thumbnail}
                  className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-transparent group-hover:border-red-500 transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(img.original)}
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer"
                  onClick={() => openModal(img.original)}
                >
                  <span className="text-white text-lg font-semibold">View Image</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full">
              <p>No photos available</p>
            </div>
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="mt-10 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-lg p-4">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Full view"
              className="w-full h-auto max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}

      <FloatingWhatsAppButton />
    </div>
  );
}

export default Photos;
