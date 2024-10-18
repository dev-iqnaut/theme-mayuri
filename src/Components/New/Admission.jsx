
// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const Admissions = () => {
//   const [admissionsData, setAdmissionsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAdmissionsData = async () => {
//       try {
//         console.log("Fetching admissions data...");
//         const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust Firestore document reference
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           console.log("Site Data fetched:", siteData);

//           // Check if admissions field exists in siteData (adjust case sensitivity)
//           if (siteData && siteData.Admissions) {
//             setAdmissionsData(siteData.Admissions); // Set the state with admissions data
//             console.log("Admissions data set:", siteData.Admissions);
//           } else {
//             setError("Admissions data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         console.error("Error fetching admissions data:", err);
//         setError(err.message || "Error fetching admissions data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdmissionsData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Render admissions data
//   return (
//     <div>
//       <h1>Admissions</h1>
//       {admissionsData ? (
//         <div>
//           <h2>Documents</h2>
//           <ul>
//             {admissionsData.documentList && admissionsData.documentList.length > 0 ? (
//               admissionsData.documentList.map((document, index) => (
//                 <li key={index}>{document}</li>
//               ))
//             ) : (
//               <li>No documents available.</li>
//             )}
//           </ul>

//           <h2>Fee Structure</h2>
//           {admissionsData.feeStructure ? (
//             <a href={admissionsData.feeStructure} target="_blank" rel="noopener noreferrer">
//               Download Fee Structure
//             </a>
//           ) : (
//             <p>Fee structure not available.</p>
//           )}
//         </div>
//       ) : (
//         <p>No admissions data available.</p>
//       )}
//     </div>
//   );
// };

// export default Admissions;



// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const Admissions = () => {
//   const [admissionsData, setAdmissionsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAdmissionsData = async () => {
//       try {
//         console.log("Fetching admissions data...");
//         const docRef = doc(db, "sites", "www.ascentm.in"); // Adjust Firestore document reference
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           console.log("Site Data fetched:", siteData);

//           // Check if admissions field exists in siteData
//           if (siteData && siteData.Admissions) {
//             setAdmissionsData(siteData.Admissions); // Set the state with admissions data
//             console.log("Admissions data set:", siteData.Admissions);
//           } else {
//             setError("Admissions data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         console.error("Error fetching admissions data:", err);
//         setError(err.message || "Error fetching admissions data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdmissionsData();
//   }, []);

//   if (loading) return <p className="text-center text-gray-600 animate-pulse">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 md:px-12">
//         <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8 animate-fade-in">Admissions</h1>

//         {admissionsData ? (
//           <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
//             {/* Documents Section */}
//             <div>
//               <h2 className="text-2xl font-semibold text-teal-600 mb-4">Required Documents</h2>
//               <ul className="list-disc list-inside">
//                 {admissionsData.documentList && admissionsData.documentList.length > 0 ? (
//                   admissionsData.documentList.map((document, index) => (
//                     <li key={index} className="text-lg text-gray-700">{document}</li>
//                   ))
//                 ) : (
//                   <li className="text-lg text-gray-500">No documents available.</li>
//                 )}
//               </ul>
//             </div>

//             {/* Fee Structure Section */}
//             <div>
//               <h2 className="text-2xl font-semibold text-teal-600 mb-4">Fee Structure</h2>
//               {admissionsData.feeStructure ? (
//                 <a 
//                   href={admissionsData.feeStructure} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="inline-block bg-teal-600 text-white rounded-md px-4 py-2 hover:bg-teal-700 transition duration-300"
//                 >
//                   Download Fee Structure
//                 </a>
//               ) : (
//                 <p className="text-lg text-gray-500">Fee structure not available.</p>
//               )}
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No admissions data available.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Admissions;










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

          // Check if admissions field exists in siteData
          if (siteData && siteData.Admissions) {
            setAdmissionsData(siteData.Admissions); // Set the state with admissions data
            console.log("Admissions data set:", siteData.Admissions);
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
    <section className="py-20 ">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-white text-center mb-8 animate-fade-in">Admissions</h1>

        {admissionsData ? (
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            {/* Documents Section */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-600 mb-4 border-b-2 border-teal-300 pb-2">Required Documents</h2>
              <ul className="list-disc list-inside space-y-2">
                {admissionsData.documentList && admissionsData.documentList.length > 0 ? (
                  admissionsData.documentList.map((document, index) => (
                    <li key={index} className="text-lg text-gray-700 hover:text-teal-500 transition duration-200">{document}</li>
                  ))
                ) : (
                  <li className="text-lg text-gray-500">No documents available.</li>
                )}
              </ul>
            </div>

            {/* Fee Structure Section */}
            <div>
              <h2 className="text-3xl font-semibold text-teal-600 mb-4 border-b-2 border-teal-300 pb-2">Fee Structure</h2>
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
          <p className="text-center text-gray-600">No admissions data available.</p>
        )}
      </div>
    </section>
  );
};

export default Admissions;
