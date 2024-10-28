


// import React, { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const Academics = () => {
//   const [academicsData, setAcademicsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAcademicsData = async () => {
//       try {
//         const docRef = doc(db, "sites", "www.ascentm.in");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData.academics) {
//             setAcademicsData(siteData.academics);
//           } else {
//             setError("Academics data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         setError(err.message || "Error fetching academics data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAcademicsData();
//   }, []);

//   if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;

//   return (
//     <section className="bg-gray-100 py-16">
//       {/* Apply mobile padding px-6 and desktop padding px-32 */}
//       <div className="container mx-auto px-6 lg:px-32">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">
//           Academics
//         </h1>

//         {academicsData ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Academic Calendar Card */}
//             <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
//               <h2 className="text-2xl font-bold text-teal-600 mb-4">Academic Calendar</h2>
//               <p className="text-gray-600 mb-4">
//                 {academicsData.academicCalendar ? "Click below to view the calendar." : "Academic calendar not available."}
//               </p>
//               {academicsData.academicCalendar && (
//                 <a
//                   href={academicsData.academicCalendar}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-teal-600 bg-teal-100 hover:bg-teal-200 py-2 px-4 rounded transition duration-300 text-center"
//                 >
//                   View Calendar
//                 </a>
//               )}
//             </div>

//             {/* Exam Schedule Card */}
//             <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
//               <h2 className="text-2xl font-bold text-teal-600 mb-4">Exam Schedule</h2>
//               <p className="text-gray-600 mb-4">
//                 {academicsData.examSchedule ? "Click below to view the exam schedule." : "Exam schedule not available."}
//               </p>
//               {academicsData.examSchedule && (
//                 <a
//                   href={academicsData.examSchedule}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-teal-600 bg-teal-100 hover:bg-teal-200 py-2 px-4 rounded transition duration-300 text-center"
//                 >
//                   View Schedule
//                 </a>
//               )}
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No academic data available.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Academics;
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Academics = () => {
  const [academicsData, setAcademicsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcademicsData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData.academics) {
            setAcademicsData(siteData.academics);
          } else {
            setError("Academics data not found.");
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching academics data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAcademicsData();
  }, []);

  if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mb-12">
          Academics
        </h1>

        {academicsData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Academic Calendar Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-teal-600 mb-4">Academic Calendar</h2>
                <p className="text-gray-600 mb-4">
                  {academicsData.academicCalendar ? "Click below to view the calendar." : "Academic calendar not available."}
                </p>
                {academicsData.academicCalendar && (
                  <a
                    href={academicsData.academicCalendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-teal-600 bg-teal-100 hover:bg-teal-200 py-2 px-4 rounded-lg transition duration-300 text-center"
                  >
                    View Calendar
                  </a>
                )}
              </div>
              <EventNoteIcon className="text-teal-600 text-12xl" />
            </div>

            {/* Exam Schedule Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-teal-600 mb-4">Exam Schedule</h2>
                <p className="text-gray-600 mb-4">
                  {academicsData.examSchedule ? "Click below to view the exam schedule." : "Exam schedule not available."}
                </p>
                {academicsData.examSchedule && (
                  <a
                    href={academicsData.examSchedule}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-teal-600 bg-teal-100 hover:bg-teal-200 py-2 px-4 rounded-lg transition duration-300 text-center"
                  >
                    View Schedule
                  </a>
                )}
              </div>
              <ScheduleIcon className="text-teal-600 text-12xl" />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No academic data available.</p>
        )}
      </div>
    </section>
  );
};

export default Academics;
