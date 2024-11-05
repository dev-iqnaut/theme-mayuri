

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const FacultyStaffSection = () => {
  const [facultyPicture, setFacultyPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyStaffData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.facultyStaff && siteData.facultyStaff.facultyPicture) {
            setFacultyPicture(siteData.facultyStaff.facultyPicture);
          } else {
            setError("Faculty picture not found.");
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
    <section className="py-40 bg-gradient-to-b from-pink-200 to-sky-200">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        <h2 className="text-3xl font-bold text-teal-600">Meet Our Professional</h2>
        <p className="text-xl text-gray-600 mt-2">Joyful Journeys Childcare and the Of a Education</p>

        {facultyPicture ? (
          <div className="flex flex-wrap justify-center mt-12 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-center">
              <div className="rounded-full overflow-hidden mx-auto w-32 h-32 mb-4">
                <img
                  src={facultyPicture}
                  alt="Faculty"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Jane Cooper</h3>
              <p className="text-gray-500">Marketing Coordinator</p>
              <div className="flex justify-center space-x-4 mt-4 text-gray-500">
                <a href="#" className="hover:text-teal-600">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-teal-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-teal-600">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No faculty picture available.</p>
        )}
      </div>
    </section>
  );
};

export default FacultyStaffSection;
