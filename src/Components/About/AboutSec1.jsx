



// import React from 'react';
// import About from '../Assets/About.jpeg';

// const AboutSection = () => {
//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-48">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Section - Image */}
//         <div className="relative col-span-1">
//           <img
//             className="w-full rounded-lg shadow-lg"
//             src={About} // Replace with actual image link
//             alt="Children in School"
//           />
//           <div className="absolute bottom-4 left-4 bg-orange-400 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17 20h5v-2a4 4 0 00-3-3.87M7 20h10a4 4 0 00-4-4H7a4 4 0 00-4 4v2h5zM12 4a4 4 0 110 8 4 4 0 010-8z"
//               />
//             </svg>
//             <p className="font-semibold">5,000+ Satisfied Clients</p>
//           </div>
//         </div>

//         {/* Middle Section - Academy and Experience Stats */}
//         <div className="flex flex-col space-y-4 items-center lg:items-start">
//           {/* Academy Card */}
//           <div className="flex flex-col items-center justify-center bg-teal-50 w-32 h-32 rounded-lg shadow-lg">
//             <div className="flex-shrink-0">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLT8XZcL4oJC9_R21dkyCacxtEIPbZrueDlQ&s" // Replace with actual icon link
//                 alt="Academy Icon"
//                 className="h-10 w-10"
//               />
//             </div>
//             <div className="text-center">
//               <h3 className="font-bold text-teal-600 text-sm">Academy</h3>
//               <p className="text-xs text-gray-500">Learning Ladder</p>
//             </div>
//           </div>

//           {/* Experience Card */}
//           <div className="flex flex-col items-center justify-center bg-gray-50 w-32 h-32 rounded-lg shadow-lg">
//             <div className="flex-shrink-0">
//               <img
//                 src="https://example.com/experience-icon.png" // Replace with actual icon link
//                 alt="Experience Icon"
//                 className="h-10 w-10"
//               />
//             </div>
//             <div className="text-center">
//               <h3 className="font-bold text-gray-700 text-sm">10+</h3>
//               <p className="text-xs text-gray-500">Years of Experience</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Text */}
//         <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
//           <h2 className="text-teal-500 font-semibold">About Us</h2>
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Unlocking Potential, One Child at a Time
//           </h1>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit. Ligula
//             volutpat lobortis molestie sed per accumsan conubia.
//           </p>

//           {/* Call-to-Action */}
//           <button className="mt-6 w-full lg:w-32 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg">
//             Get a Quote
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;





















import React, { useEffect, useState } from 'react';
import About from '../Assets/About.jpeg';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as necessary

const AboutSection = () => {
  // State to hold fetched data
  const [aboutData, setAboutData] = useState({
    mission: '',
    vision: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Vision and Mission from Firestore
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, 'sites', 'www.ascentm.in'); // Adjust to match your Firestore path
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData['About-Us']) {
            // Update the state with mission and vision
            setAboutData({
              mission: siteData['About-Us'].mission || 'Mission data not available.',
              vision: siteData['About-Us'].vision || 'Vision data not available.'
            });
          } else {
            setError('About-Us data not found.');
          }
        } else {
          setError('No such document!');
        }
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError('Error fetching about data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Image */}
        <div className="relative col-span-1">
          <img
            className="w-full rounded-lg shadow-lg"
            src={About}
            alt="Children in School"
          />
          <div className="absolute bottom-4 left-4 bg-orange-400 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a4 4 0 00-3-3.87M7 20h10a4 4 0 00-4-4H7a4 4 0 00-4 4v2h5zM12 4a4 4 0 110 8 4 4 0 010-8z"
              />
            </svg>
            <p className="font-semibold">5,000+ Satisfied Clients</p>
          </div>
        </div>

        {/* Middle Section - Academy and Experience Stats */}
        <div className="flex flex-col space-y-4 items-center lg:items-start">
          <div className="flex flex-col items-center justify-center bg-teal-50 w-32 h-32 rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLT8XZcL4oJC9_R21dkyCacxtEIPbZrueDlQ&s"
                alt="Academy Icon"
                className="h-10 w-10"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-teal-600 text-sm">Academy</h3>
              <p className="text-xs text-gray-500">Learning Ladder</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-50 w-32 h-32 rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                src="https://example.com/experience-icon.png"
                alt="Experience Icon"
                className="h-10 w-10"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-700 text-sm">10+</h3>
              <p className="text-xs text-gray-500">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section - Vision, Mission and Text */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h2 className="text-teal-500 font-semibold">About Us</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Unlocking Potential, One Child at a Time
          </h1>

          {/* Display Vision and Mission from Firebase */}
          <div className="text-gray-600">
            <h2 className="text-lg font-semibold">Vision</h2>
            <p>{aboutData.vision}</p>
          </div>
          <div className="text-gray-600 mt-2">
            <h2 className="text-lg font-semibold">Mission</h2>
            <p>{aboutData.mission}</p>
          </div>

          <button className="mt-6 w-full lg:w-32 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
