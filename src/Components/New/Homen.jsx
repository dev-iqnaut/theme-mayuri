// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const HomeSection = () => {
//   const [homeData, setHomeData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust site name accordingly
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData.Home) {
//             setHomeData(siteData.Home);
//           } else {
//             setError("Home data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         setError(err.message || "Error fetching home data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;

//   return (
//     <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
//       <div className="container mx-auto px-6 md:px-12">
//         <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
//           Welcome to Our School
//         </h1>

//         {homeData ? (
//           <>
//             {/* Hero Section */}
//             {homeData.hero?.heroImage && (
//               <div className="mb-12">
//                 <img
//                   src={homeData.hero.heroImage}
//                   alt="Hero"
//                   className="w-full h-96 object-cover shadow-lg"
//                 />
//               </div>
//             )}

//             {/* School Details */}
//             {homeData.schoolDetails && (
//               <div className="text-center mb-12">
//                 <img
//                   src={homeData.schoolDetails.schoolLogo}
//                   alt="School Logo"
//                   className="mx-auto w-48 h-48 object-cover rounded-full shadow-lg"
//                 />
//                 <h2 className="text-4xl font-bold text-white mt-6">
//                   {homeData.schoolDetails.schoolName || "School Name not available"}
//                 </h2>
//               </div>
//             )}

//             {/* Carousel Section */}
//             {homeData.carousel && homeData.carousel.length > 0 && (
//               <div className="carousel space-y-6">
//                 {homeData.carousel.map((item, index) => (
//                   <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//                     <img
//                       src={item.image}
//                       alt={`Carousel Image ${index + 1}`}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                     {item.title && (
//                       <h3 className="text-2xl font-semibold text-teal-600">
//                         {item.title}
//                       </h3>
//                     )}
//                     {item.buttonUrl && (
//                       <a
//                         href={item.buttonUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block mt-4 text-white bg-teal-600 py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
//                       >
//                         {item.buttonText || "Learn More"}
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-center text-gray-600">No home data available.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HomeSection;









// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const HomeSection = () => {
//   const [homeData, setHomeData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust site name accordingly
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData.Home) {
//             setHomeData(siteData.Home);
//           } else {
//             setError("Home data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         setError(err.message || "Error fetching home data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;

//   return (
//     <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
//       <div className="container mx-auto px-6 md:px-12">
        
//         {homeData ? (
//           <>
            
//             {/* Carousel Section */}
//             {homeData.carousel && homeData.carousel.length > 0 && (
//               <div className="carousel space-y-6">
//                 {homeData.carousel.map((item, index) => (
//                   <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//                     <img
//                       src={item.image}
//                       alt={`Carousel Image ${index + 1}`}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                     {item.title && (
//                       <h3 className="text-2xl font-semibold text-teal-600">
//                         {item.title}
//                       </h3>
//                     )}
//                     {item.buttonUrl && item.buttonText && (
//                       <a
//                         href={item.buttonUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block mt-4 text-white bg-teal-600 py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
//                       >
//                         {item.buttonText}
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-center text-gray-600">No home data available.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HomeSection;


import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary
import Slider from "react-slick"; // Import Slider from react-slick
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
          if (siteData && siteData.Home) {
            setHomeData(siteData.Home);
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
    autoplay: true, // Optional: Enable autoplay
    autoplaySpeed: 3000, // Optional: Autoplay speed
  };

  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {homeData ? (
          <>
            {/* Carousel Section */}
            {homeData.carousel && homeData.carousel.length > 0 && (
              <Slider {...settings}>
                {homeData.carousel.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                    <img
                      src={item.image}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                    {item.title && (
                      <h3 className="text-2xl font-semibold text-teal-600">
                        {item.title}
                      </h3>
                    )}
                    {item.buttonUrl && item.buttonText && (
                      <a
                        href={item.buttonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-white bg-teal-600 py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                      >
                        {item.buttonText}
                      </a>
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
