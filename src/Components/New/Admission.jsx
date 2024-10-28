

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const Admissions = () => {
  const [admissionsData, setAdmissionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmissionsData = async () => {
      try {
        console.log("Fetching admissions data...");
        const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust Firestore document reference
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          console.log("Site Data fetched:", siteData);

          if (siteData && siteData.admissions) {
            setAdmissionsData(siteData.admissions); // Set the state with admissions data
            console.log("Admissions data set:", siteData.admissions);
          } else {
            setError("Admissions data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        console.error("Error fetching admissions data:", err);
        setError(err.message || "Error fetching admissions data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmissionsData();
  }, []);

  if (loading) return <p className="text-center text-gray-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="py-40 min-h-screen bg-gradient-to-b from-pink-200 to-sky-200">
      <div className="container mx-auto px-6 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8 animate-fade-in">Admissions</h1>

        {admissionsData ? (
          <div className="bg-white shadow-2xl rounded-lg p-6 md:p-12 space-y-8 transform transition-all duration-500 hover:scale-105">
            
            {/* Documents Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500">
              <h2 className="text-3xl font-semibold text-teal-700 mb-4 border-b-4 border-teal-400 pb-2">
                Required Documents
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {admissionsData.documentList && admissionsData.documentList.length > 0 ? (
                  admissionsData.documentList.map((document, index) => (
                    <li key={index} className="text-lg text-gray-700 hover:text-teal-600 transition duration-300">
                      {document}
                    </li>
                  ))
                ) : (
                  <li className="text-lg text-gray-500">No documents available.</li>
                )}
              </ul>
            </div>

            {/* Fee Structure Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500">
              <h2 className="text-3xl font-semibold text-teal-700 mb-4 border-b-4 border-teal-400 pb-2">
                Fee Structure
              </h2>
              {admissionsData.feeStructure ? (
                <a 
                  href={admissionsData.feeStructure} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-teal-600 text-white rounded-md px-6 py-3 hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                >
                  Download Fee Structure
                </a>
              ) : (
                <p className="text-lg text-gray-500">Fee structure not available.</p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-200">No admissions data available.</p>
        )}
      </div>
    </section>
  );
};

export default Admissions;
