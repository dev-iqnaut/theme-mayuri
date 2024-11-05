
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

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

        if (siteData && siteData["newsEvents"]) {
          setNewsEventsData(siteData["newsEvents"]);
          console.log("Fetched News Events Data:", siteData["newsEvents"]); // Log fetched news/events data
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
    <section className="py-44 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-32">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-12 animate-fade-in">
          News and Events
        </h2>

        {/* Horizontal layout with flexbox */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Announcements Section */}
          <div className="flex-1 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:shadow-2xl hover:scale-105">
            <h3 className="text-3xl font-bold mb-6">Announcements</h3>
            {newsEventsData?.announcement && newsEventsData.announcement.length > 0 ? (
              newsEventsData.announcement.map((item, index) => (
                <div key={index} className="border-b border-white pb-4 mb-4">
                  <p className="text-xl font-medium">{item.title}</p>
                  <p className="text-sm opacity-80">{formatDate(item.date)}</p>
                  {item.url ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mt-4 shadow-md hover:shadow-xl transition-shadow duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src="fallback_image.jpg"; }}
                    />
                  ) : (
                    <p className="text-red-500">Image URL is missing.</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-white">No announcements available.</p>
            )}
          </div>

          {/* Header Announcements Section */}
          <div className="flex-1 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:shadow-2xl hover:scale-105">
            <h3 className="text-3xl font-bold mb-6">Header Announcements</h3>
            {newsEventsData?.header_announcement && newsEventsData.header_announcement.length > 0 ? (
              newsEventsData.header_announcement.map((item, index) => (
                <div key={index} className="border-b border-white pb-4 mb-4">
                  <p className="text-lg">{item.announcement}</p>
                </div>
              ))
            ) : (
              <p className="text-white">No header announcements available.</p>
            )}
          </div>

          {/* News Section */}
          <div className="flex-1 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:shadow-2xl hover:scale-105">
            <h3 className="text-3xl font-bold mb-6">News</h3>
            {newsEventsData?.news && newsEventsData.news.length > 0 ? (
              newsEventsData.news.map((item, index) => (
                <div key={index} className="border-b border-white pb-4 mb-4">
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.description}</p>
                  <p className="text-sm opacity-80">{formatDate(item.date)}</p>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mt-4 shadow-md hover:shadow-xl transition-shadow duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src="fallback_image.jpg"; }}
                    />
                  ) : (
                    <p className="text-red-500">Image URL is missing.</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-white">No news available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
