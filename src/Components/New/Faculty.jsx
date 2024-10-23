


import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const FacultyStaffSection = () => {
  const [facultyStaffData, setFacultyStaffData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyStaffData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.FacultyStaff) {
            setFacultyStaffData(siteData.FacultyStaff);
          } else {
            setError("Faculty and Staff data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching faculty and staff data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyStaffData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="py-36 bg-gradient-to-b from-pink-200 to-sky-200">
      <div className="container mx-auto px-6 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-12 animate-fade-in">
          Faculty and Staff
        </h1>

        {facultyStaffData ? (
          <div className="bg-white shadow-2xl rounded-lg p-8 md:p-16 space-y-12 transition duration-500 transform hover:scale-105 hover:shadow-3xl">
            {/* Faculty Picture Section */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Faculty Picture</h2>
              <img
                src={facultyStaffData.facultyPicture}
                alt="Faculty"
                className="rounded-lg shadow-lg mx-auto max-w-xs hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No faculty and staff data available.</p>
        )}
      </div>
    </section>
  );
};

export default FacultyStaffSection;

