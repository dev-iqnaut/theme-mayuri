

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const AccordionItem = ({ title, children, isOpen, toggle }) => (
  <div className="border-b border-teal-500">
    <button
      onClick={toggle}
      className="w-full text-left p-4 font-bold text-xl text-teal-600 hover:bg-teal-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
    >
      {title}
    </button>
    {isOpen && (
      <div className="p-4 bg-teal-50 text-gray-700 text-md transition-all duration-300">
        {children}
      </div>
    )}
  </div>
);

const CBSEComplianceSection = () => {
  const [complianceData, setComplianceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [openSection, setOpenSection] = useState(null); // State to manage accordion open/close

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

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle accordion state
  };

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32"> {/* Responsive padding */}
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          CBSE Compliance
        </h1>

        {complianceData ? (
          <div className="bg-white shadow-2xl rounded-lg p-8 lg:p-16 space-y-4"> {/* Adjusted padding for large screens */}
            {/* Annual Report Section */}
            <AccordionItem
              title="Annual Report"
              isOpen={openSection === "annual_report"}
              toggle={() => toggleSection("annual_report")}
            >
              <a
                href={complianceData.annual_report}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-600 underline hover:text-teal-800 focus:text-teal-900 transition-colors duration-300"
              >
                {complianceData.annual_report || "Annual report not available."}
              </a>
            </AccordionItem>

            {/* CBSE Affiliation Section */}
            <AccordionItem
              title="CBSE Affiliation"
              isOpen={openSection === "cbse_affiliation"}
              toggle={() => toggleSection("cbse_affiliation")}
            >
              <a
                href={complianceData.cbse_affiliation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-600 underline hover:text-teal-800 focus:text-teal-900 transition-colors duration-300"
              >
                {complianceData.cbse_affiliation || "CBSE affiliation not available."}
              </a>
            </AccordionItem>

            {/* Mandatory Public Disclosure Section */}
            <AccordionItem
              title="Mandatory Public Disclosure"
              isOpen={openSection === "mandatory_public_disclosure"}
              toggle={() => toggleSection("mandatory_public_disclosure")}
            >
              <a
                href={complianceData.mandatory_public_disclosure}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-600 underline hover:text-teal-800 focus:text-teal-900 transition-colors duration-300"
              >
                {complianceData.mandatory_public_disclosure || "Mandatory public disclosure not available."}
              </a>
            </AccordionItem>
          </div>
        ) : (
          <p className="text-center text-gray-600">No CBSE compliance data available.</p>
        )}
      </div>
    </section>
  );
};

export default CBSEComplianceSection;
