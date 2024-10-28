

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const GalleryComponent = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        console.log("Fetching gallery data...");
        const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust Firestore document reference
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document fetched successfully:", docSnap.data());
          const siteData = docSnap.data().siteData;
          console.log("Site Data fetched:", siteData); // Log the entire siteData

          // Ensure that siteData and "Gallery" exist
          if (siteData && siteData.gallery) {
            setGalleryData(siteData.gallery); // Access the "Gallery" field
            console.log("Gallery data set:", siteData.gallery); // Log the Gallery data
          } else {
            console.error("Gallery data not found in siteData");
            setError("Gallery data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        console.error("Detailed error fetching gallery data:", err);
        setError(err.message || "Error fetching gallery data.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  // Check if galleryData is set correctly
  console.log("Rendering galleryData:", galleryData);

  return (
    <div className="px-8 lg:px-32 py-32 font-sans max-w-screen-lg mx-auto">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
        Gallery
      </h1>

      {galleryData ? (
        <div>
          {/* Images Section */}
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {galleryData.images && galleryData.images.length > 0 ? (
              galleryData.images.map((image, index) => (
                <div
                  key={image.id || index}
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={image.url}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">No images available.</p>
            )}
          </div>

          {/* Videos Section */}
          <h2 className="text-4xl font-bold text-center text-gray-700 mt-10 mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {galleryData.videos && galleryData.videos.length > 0 ? (
              galleryData.videos.map((videos, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <video controls className="w-full h-64 object-cover rounded-lg">
                    <source src={videos.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">No videos available.</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No gallery data available.</p>
      )}
    </div>
  );
};

export default GalleryComponent;
