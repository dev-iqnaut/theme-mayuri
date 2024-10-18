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
          if (siteData && siteData.CBSECompliance) {
            setComplianceData(siteData.CBSECompliance);
          } else {
            setError("CBSECompliance data not found.");
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
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          CBSE Compliance
        </h1>

        {complianceData ? (
          <div className="bg-white shadow-2xl rounded-lg p-8 md:p-16 space-y-12 transition duration-500 transform hover:scale-105 hover:shadow-3xl">
            {/* Annual Report Section */}
            <div className="text-center md:text-left border-l-4 border-teal-500 pl-6">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Annual Report</h2>
              <a
                href={complianceData.annual_report}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-600 underline"
              >
                {complianceData.annual_report || "Annual report not available."}
              </a>
            </div>

            {/* CBSE Affiliation Section */}
            <div className="text-center md:text-left border-l-4 border-teal-500 pl-6">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">CBSE Affiliation</h2>
              <a
                href={complianceData.cbse_affiliation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-600 underline"
              >
                {complianceData.cbse_affiliation || "CBSE affiliation not available."}
              </a>
            </div>

            {/* Mandatory Public Disclosure Section */}
            <div className="text-center md:text-left border-l-4 border-teal-500 pl-6">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Mandatory Public Disclosure</h2>
              <a
                href={complianceData.mandatory_public_disclosure}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-600 underline"
              >
                {complianceData.mandatory_public_disclosure || "Mandatory public disclosure not available."}
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
