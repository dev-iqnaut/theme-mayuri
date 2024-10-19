import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const Policies = () => {
  const [policyData, setPolicyData] = useState({
    faq: "",
    privacyPolicy: "",
    termsAndConditions: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolicyData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust the collection/document path as necessary
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          setPolicyData({
            faq: siteData["FAQ".trim()] || "<p>No FAQ available.</p>",
            privacyPolicy: siteData["Privacy Policy".trim()] || "<p>No Privacy Policy available.</p>",
            termsAndConditions: siteData["Terms and Conditions".trim()] || "<p>No Terms and Conditions available.</p>",
          });
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching policy data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPolicyData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          Policies
        </h1>

        <div className="bg-white shadow-2xl rounded-lg p-8 md:p-16 space-y-12 transition duration-500 transform hover:scale-105 hover:shadow-3xl">
          
          {/* FAQ Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">FAQ</h2>
            <div
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: policyData.faq }}
            ></div>
          </div>

          {/* Privacy Policy Section */}
          <div className="text-center md:text-left border-l-4 border-teal-500 pl-6">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Privacy Policy</h2>
            <div
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: policyData.privacyPolicy }}
            ></div>
          </div>

          {/* Terms and Conditions Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Terms and Conditions</h2>
            <div
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: policyData.termsAndConditions }}
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Policies;
