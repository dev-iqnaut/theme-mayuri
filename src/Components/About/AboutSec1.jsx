


// import React, { useEffect, useState } from 'react';

// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

// const AboutSection = () => {
//   const [aboutData, setAboutData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const docRef = doc(db, 'sites', 'www.ascentm.in'); // Adjust the Firestore path
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData['aboutUs']) {
//             setAboutData(siteData['aboutUs']);
//           } else {
//             setError('About-Us data not found.');
//           }
//         } else {
//           setError('No such document!');
//         }
//       } catch (err) {
//         setError('Error fetching about data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Safely accessing properties within nested objects
//   const { principalMessage, principalImage } = aboutData?.principalMessage || {}

//   return (
//     <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

//         {/* Left Section - Principal Image with Badge */}
//         <div className="relative col-span-2 lg:col-span-2">
//         {principalImage ? (
//             <img
//               src={principalImage}
//               alt="Principal"
              
//             />
//           ) : (
//             <p className="text-gray-600">Principal image not available.</p>
//           )}
//           <div className="absolute -bottom-6 left-6 bg-orange-400 text-white py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2">
//           {principalMessage || 'Welcome!'}
//           </div>
//         </div>

//         {/* Middle Section - Academy and Experience Stats */}
//             <div className="flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left col-span-1">
//             <div className="flex flex-col items-center justify-center bg-teal-50 w-40 h-40 rounded-lg shadow-lg p-4">
             
//             <h3 className="font-bold text-teal-600 text-lg">FOCUS</h3>
//             {aboutData.focus || "Focus data not available."}
//            </div>
//            <div className="flex flex-col items-center justify-center bg-gray-50 w-40 h-40 rounded-lg shadow-lg p-4">
             
//              <h3 className="font-bold text-gray-700 text-lg">HISTORY</h3>
//              {aboutData.schoolHistory || "School history not available."}
//            </div>
//          </div>

//         {/* Right Section - Vision and Mission */}
//         <div className="flex flex-col justify-center space-y-6 text-center lg:text-left col-span-1 lg:col-span-2">
//           <h2 className="text-teal-500 font-semibold text-lg">About Us</h2>
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
//             Unlocking Potential, One Child at a Time
//           </h1>
//           <p className="text-gray-600 text-base leading-relaxed">
//             Our vision and mission define who we are. We aim to provide quality education that shapes the future.
//           </p>
           
          
//           <div className="text-gray-600 bg-gray-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-2">Vision</h2>
//             <p className="text-sm">{aboutData?.vision || 'Vision data not available.'}</p>
//           </div>
//           <div className="text-gray-600 bg-gray-100 p-4 rounded-lg shadow-md mt-4">
//             <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-2">Mission</h2>
//             <p className="text-sm">{aboutData?.mission || 'Mission data not available.'}</p>
//           </div>

//           <button className="mt-6 w-full lg:w-40 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
//             Get a Quote
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, 'sites', 'www.ascentm.in');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData['aboutUs']) {
            setAboutData(siteData['aboutUs']);
          } else {
            setError('About-Us data not found.');
          }
        } else {
          setError('No such document!');
        }
      } catch (err) {
        setError('Error fetching about data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { principalMessage, principalImage } = aboutData?.principalMessage || {};

  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

        {/* Left Section - Principal Image with Badge */}
        <div className="relative col-span-1 lg:col-span-2 flex justify-center">
          {principalImage ? (
            <img
              src={principalImage}
              alt="Principal"
              className="w-full h-96 object-cover rounded-lg shadow-lg" // Small height with responsive width
            />
          ) : (
            <p className="text-gray-600">Principal image not available.</p>
          )}
          <div className="absolute -bottom-6 left-6 bg-orange-400 text-white py-2 px-4 rounded-lg shadow-lg">
            {principalMessage || 'Welcome!'}
          </div>
        </div>

        {/* Middle Section - Academy and Experience Stats */}
        <div className="flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left col-span-1">
          <div className="flex flex-col items-center justify-center bg-teal-50 w-40 h-40 rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-teal-600 text-lg">FOCUS</h3>
            {aboutData.focus || "Focus data not available."}
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 w-40 h-40 rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-gray-700 text-lg">HISTORY</h3>
            {aboutData.schoolHistory || "School history not available."}
          </div>
        </div>

        {/* Right Section - Vision and Mission */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left col-span-1 lg:col-span-2">
          <h2 className="text-teal-500 font-semibold text-lg">About Us</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Unlocking Potential, One Child at a Time
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Our vision and mission define who we are. We aim to provide quality education that shapes the future.
          </p>
          <div className="text-gray-600 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-2">Vision</h2>
            <p className="text-sm">{aboutData?.vision || 'Vision data not available.'}</p>
          </div>
          <div className="text-gray-600 bg-gray-100 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-2">Mission</h2>
            <p className="text-sm">{aboutData?.mission || 'Mission data not available.'}</p>
          </div>
          <button className="mt-6 w-full lg:w-40 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
