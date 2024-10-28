



import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const InfrastructureSection = () => {
  const [infrastructureData, setInfrastructureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfrastructureData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.infrastructure) {
            setInfrastructureData(siteData.infrastructure);
          } else {
            setError("Infrastructure data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching infrastructure data.");
      } finally {
        setLoading(false);
      }
    };

    fetchInfrastructureData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="bg-gray-100 py-36">
      <div className="container mx-auto px-6 lg:px-32 md:px-12">
        <h1 className="text-5xl font-extrabold text-teal-600 mb-12 text-center animate-fade-in">
          Infrastructure
        </h1>

        {infrastructureData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(infrastructureData).map(([key, value]) => (
              value && value.length > 0 && (
                <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-3xl font-bold text-teal-600 p-4 border-b-2 border-teal-500">
                    {key.replace(/_/g, ' ')}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 p-4">
                    {value.map((item, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                        <img
                          src={typeof item === "string" ? item : item.url}
                          alt={`${key} Image ${index + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg">
                          View Image
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No infrastructure data available.</p>
        )}
      </div>
    </section>
  );
};

export default InfrastructureSection;
