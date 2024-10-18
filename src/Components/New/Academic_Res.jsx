// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const AcademicResources = () => {
//   const [academicData, setAcademicData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAcademicData = async () => {
//       try {
//         const docRef = doc(db, "sites", "www.ascentm.in");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData.AcademicResources) {
//             setAcademicData(siteData.AcademicResources);
//           } else {
//             setError("AcademicResources data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         setError(err.message || "Error fetching academic data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAcademicData();
//   }, []);

//   if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;

//   return (
//     <section className="bg-gradient-to-br from-teal-500 via-teal-400 to-teal-300 py-16">
//       <div className="container mx-auto px-6 md:px-12">
//         <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
//           Academic Resources
//         </h1>

//         {academicData ? (
//           <div className="bg-white shadow-2xl rounded-lg p-8 md:p-16 space-y-12 transition duration-500 transform hover:scale-105 hover:shadow-3xl">
//             {/* Map through the academic resources */}
//             {Object.entries(academicData).map(([key, value]) => (
//               <div key={key} className="text-center md:text-left border-l-4 border-teal-500 pl-6">
//                 <h2 className="text-3xl font-bold text-teal-600 mb-4">{key}</h2>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   {value || `${key} data not available.`}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No academic data available.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AcademicResources;


import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const AcademicResources = () => {
  const [academicData, setAcademicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcademicData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.AcademicResources) {
            setAcademicData(siteData.AcademicResources);
          } else {
            setError("AcademicResources data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching academic data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAcademicData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
          Academic Resources
        </h1>

        {academicData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through the academic resources */}
            {Object.entries(academicData).map(([key, value]) => (
              <div
                key={key}
                className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
              >
                <h2 className="text-2xl font-bold text-teal-600 mb-4 transition-colors duration-300 group-hover:text-teal-800">
                  {key}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-900">
                  {value || `${key} data not available.`}
                </p>
                <a
                  href={value} // Assuming the value can be a link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white bg-teal-600 hover:bg-teal-700 py-2 px-4 rounded transition duration-300 text-center"
                >
                  View Resource
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No academic data available.</p>
        )}
      </div>
    </section>
  );
};

export default AcademicResources;
