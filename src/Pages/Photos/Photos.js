import React, { useEffect, useState } from "react";
import fetchPhotos from "../../Services/PhotoServices";
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";

function Photos() {
  const [photosData, setPhotosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Loading state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetchPhotos();
        console.log("Files fetched: ", response);

        // Verify each fetched file has the necessary fields
        const validPhotos = response.filter(img => {
          if (img.thumbnail && img.webContentLink) {
            return true;
          } else {
            console.warn(`Invalid file: ${img.name}`, img);
            return false;
          }
        });
        console.log("Valid Photos: ", validPhotos);

        // Introduce a 5-second delay before updating the state
        setTimeout(() => {
          setPhotosData(validPhotos);
          setIsLoading(false);  // Set loading to false once the data is fetched
        }, 5000);  // 5-second delay

      } catch (error) {
        console.error("Error fetching photos:", error);
        setIsLoading(false);  // Ensure loading is turned off in case of error
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

      {/* Loading Indicator */}
      {isLoading ? (
        <div className="text-center">
          <p>Loading photos...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photosData.map((img, id) => (
            <div key={id} className="relative group">
              <img
                alt={`Gallery Thumbnail ${id + 1}`}
                src={img.thumbnail}
                className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-transparent group-hover:border-red-500 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(img.webContentLink)}
                onError={(e) => {
                  console.error(`Failed to load thumbnail for ${img.name}: ${e.target.src}`);
                  e.target.src = 'https://via.placeholder.com/150';  // Fallback image URL
                  e.target.alt = 'Image not available';  // Fallback alt text
                }}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer"
                onClick={() => openModal(img.webContentLink)}
              >
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
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
              onError={(e) => {
                console.error(`Failed to load full-size image: ${e.target.src}`);
                e.target.src = 'https://via.placeholder.com/600';  // Fallback image URL for modal
                e.target.alt = 'Image not available';  // Fallback alt text
              }}
            />
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}

export default Photos;
