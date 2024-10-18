


import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const AboutUsSection2 = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData["About-Us".trim()]) {
            setAboutData(siteData["About-Us".trim()]);
          } else {
            setError("About-Us data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching about data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          About Us
        </h1>

        {aboutData ? (
          <div className="bg-white shadow-2xl rounded-lg p-8 md:p-16 space-y-12 transition duration-500 transform hover:scale-105 hover:shadow-3xl">
            
            {/* Focus Section */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Focus</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.focus || "Focus data not available."}
              </p>
            </div>

            {/* Mission Section */}
            <div className="text-center md:text-left border-l-4 border-teal-500 pl-6">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.mission || "Mission data not available."}
              </p>
            </div>

            {/* Principal's Message */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-teal-600 mb-4">Principal's Message</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {aboutData.principal_message?.principal_message || "Principal's message not available."}
                </p>
              </div>
              {aboutData.principal_message?.principal_image ? (
                <img
                  src={aboutData.principal_message.principal_image}
                  alt="Principal"
                  className="rounded-full w-48 h-48 object-cover shadow-lg transform hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <p className="text-gray-600">Principal image not available.</p>
              )}
            </div>

            {/* School History */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">School History</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.school_history || "School history not available."}
              </p>
            </div>

            {/* Vision Section */}
            <div className="relative bg-teal-500 p-8 rounded-lg text-white shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
              <h2 className="text-3xl font-bold mb-4">Vision</h2>
              <p className="text-lg leading-relaxed">
                {aboutData.vision || "Vision data not available."}
              </p>
              <div className="absolute top-0 right-0 h-24 w-24 bg-teal-300 rounded-full opacity-25 transform scale-125 blur-xl"></div>
            </div>

          </div>
        ) : (
          <p className="text-center text-gray-600">No about data available.</p>
        )}
      </div>
    </section>
  );
};

export default AboutUsSection2;
