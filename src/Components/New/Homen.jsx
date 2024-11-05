

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSection = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust site name accordingly
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.home) {
            setHomeData(siteData.home);
          } else {
            setError("Home data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching home data.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand', // Lazy load images to ensure they load properly
  };

  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {homeData ? (
          <>
            {/* Carousel Section */}
            {homeData.carousel && homeData.carousel.length > 0 && (
              <Slider {...settings} className="w-full max-w-4xl mx-auto">
                {homeData.carousel.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                    {/* Check if image URL exists */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`Carousel Image ${index + 1}`}
                        className="w-full h-72 object-contain rounded-md mb-4" // Adjusted to object-contain
                        onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url_here"; }} // Fallback image handling
                      />
                    ) : (
                      <p className="text-center text-red-500">Image not available</p>
                    )}
                    {item.title && (
                      <h3 className="text-2xl font-semibold text-teal-600 text-center">
                        {item.title}
                      </h3>
                    )}
                    {item.buttonUrl && item.buttonText && (
                      <div className="text-center">
                        <a
                          href={item.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-white bg-teal-600 py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                        >
                          {item.buttonText}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600">No home data available.</p>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
