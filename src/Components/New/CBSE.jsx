


import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const CBSEComplianceSection = () => {
  const [complianceData, setComplianceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplianceData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.cbseCompliance) {
            setComplianceData(siteData.cbseCompliance);
          } else {
            setError("CBSE Compliance data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching CBSE compliance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchComplianceData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-36">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32"> {/* Responsive padding */}
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          CBSE Compliance
        </h1>

        {complianceData ? (
          <div className="bg-white shadow-2xl rounded-lg p-8 lg:p-16 space-y-4"> {/* Adjusted padding for large screens */}
            {/* Direct links to open the URLs */}
            <div className="text-lg">
              <a
                href={complianceData.annualReport}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 font-bold text-teal-600 underline hover:text-teal-800 focus:text-teal-900 transition-colors duration-300"
              >
                Annual Report
              </a>
              <a
                href={complianceData.cbseAffiliation}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 font-bold text-teal-600 underline hover:text-teal-800 focus:text-teal-900 transition-colors duration-300"
              >
                CBSE Affiliation
              </a>
              <a
                href={complianceData.mandatoryPublicDisclosure}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 font-bold text-teal-600 underline hover:text-teal-800 focus:text-teal-900 transition-colors duration-300"
              >
                Mandatory Public Disclosure
              </a>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No CBSE compliance data available.</p>
        )}
      </div>
    </section>
  );
};

export default CBSEComplianceSection;
