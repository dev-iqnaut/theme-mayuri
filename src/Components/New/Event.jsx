// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as needed

// const NewsEventsSection = () => {
//   const [newsEventsData, setNewsEventsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchNewsEventsData = async () => {
//     try {
//       const docRef = doc(db, "sites", "www.ascentm.in");
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const siteData = docSnap.data().siteData;
//         console.log("Fetched Site Data:", siteData); // Log the data

//         if (siteData && siteData["News-Events"]) {
//           setNewsEventsData(siteData["News-Events"]);
//         } else {
//           throw new Error("News and Events data not found.");
//         }
//       } else {
//         throw new Error("No such document!");
//       }
//     } catch (err) {
//       console.error("Fetch Error:", err.message);
//       setError(err.message || "Error fetching news and events data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNewsEventsData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleDateString();
//   };

//   if (loading) {
//     return <div className="text-center text-gray-600 animate-pulse">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">Error: {error}</div>;
//   }

//   return (
//     <section className="py-36 bg-gray-100">
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8 animate-fade-in">
//           News and Events
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Announcements Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
//             <h3 className="text-2xl font-semibold text-teal-600 mb-4">Announcements</h3>
//             {newsEventsData?.announcement.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 py-2">
//                 <p className="text-lg font-medium text-teal-800">{item.title}</p>
//                 <p className="text-gray-500">{formatDate(item.date)}</p>
//                 <img src={item.url} alt={item.title} className="w-full h-auto rounded mt-2 shadow-md" />
//               </div>
//             ))}
//           </div>

//           {/* Header Announcements Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
//             <h3 className="text-2xl font-semibold text-teal-600 mb-4">Header Announcements</h3>
//             {newsEventsData?.header_announcement.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 py-2">
//                 <p className="text-teal-800">{item.announcement}</p>
//               </div>
//             ))}
//           </div>

//           {/* News Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
//             <h3 className="text-2xl font-semibold text-teal-600 mb-4">News</h3>
//             {newsEventsData?.news.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 py-2">
//                 <h4 className="text-lg font-medium text-teal-800">{item.title}</h4>
//                 <p className="text-gray-600">{item.description}</p>
//                 <p className="text-gray-500">{formatDate(item.date)}</p>
//                 {item.image && <img src={item.image} alt={item.title} className="w-full h-auto rounded mt-2 shadow-md" />}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsEventsSection;









import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as needed

const NewsEventsSection = () => {
  const [newsEventsData, setNewsEventsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNewsEventsData = async () => {
    try {
      const docRef = doc(db, "sites", "www.ascentm.in");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const siteData = docSnap.data().siteData;
        console.log("Fetched Site Data:", siteData); // Log the data

        if (siteData && siteData["News-Events"]) {
          setNewsEventsData(siteData["News-Events"]);
          console.log("Fetched News Events Data:", siteData["News-Events"]); // Log fetched news/events data
        } else {
          throw new Error("News and Events data not found.");
        }
      } else {
        throw new Error("No such document!");
      }
    } catch (err) {
      console.error("Fetch Error:", err.message);
      setError(err.message || "Error fetching news and events data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsEventsData();
  }, []);

  const formatDate = (timestamp) => {
    if (timestamp && typeof timestamp === "object" && timestamp.toDate) {
      return timestamp.toDate().toLocaleDateString();
    }
    return "Invalid date";
  };

  if (loading) {
    return <div className="text-center text-gray-600 animate-pulse">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <section className="py-36 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8 animate-fade-in">
          News and Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Announcements Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Announcements</h3>
            {newsEventsData?.announcement && newsEventsData.announcement.length > 0 ? (
              newsEventsData.announcement.map((item, index) => {
                console.log("Announcement Image URL:", item.url); // Log the image URL
                return (
                  <div key={index} className="border-b border-gray-200 py-2">
                    <p className="text-lg font-medium text-teal-800">{item.title}</p>
                    <p className="text-gray-500">{formatDate(item.date)}</p>
                    {item.url ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-auto rounded mt-2 shadow-md"
                        onError={(e) => { e.target.onerror = null; e.target.src="path_to_fallback_image.jpg"; }} // Fallback image
                      />
                    ) : (
                      <p className="text-red-500">Image URL is missing.</p>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No announcements available.</p>
            )}
          </div>

          {/* Header Announcements Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Header Announcements</h3>
            {newsEventsData?.header_announcement && newsEventsData.header_announcement.length > 0 ? (
              newsEventsData.header_announcement.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-2">
                  <p className="text-teal-800">{item.announcement}</p>
                </div>
              ))
            ) : (
              <p>No header announcements available.</p>
            )}
          </div>

          {/* News Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">News</h3>
            {newsEventsData?.news && newsEventsData.news.length > 0 ? (
              newsEventsData.news.map((item, index) => {
                console.log("News Image URL:", item.image); // Log the image URL
                return (
                  <div key={index} className="border-b border-gray-200 py-2">
                    <h4 className="text-lg font-medium text-teal-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-500">{formatDate(item.date)}</p>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto rounded mt-2 shadow-md"
                        onError={(e) => { e.target.onerror = null; e.target.src="path_to_fallback_image.jpg"; }} // Fallback image
                      />
                    ) : (
                      <p className="text-red-500">Image URL is missing.</p>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No news available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
