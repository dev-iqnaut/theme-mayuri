

import React from 'react';
import { useLocation } from 'react-router-dom';

const Abt = () => {
  const location = useLocation();

  const getPageName = () => {
    const path = location.pathname.toLowerCase(); // Normalize to lower case

    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/faq':
        return 'FAQ';
      case '/contact':
        return 'Contact';
      case '/blog':
        return 'Blog';
      case '/blogdetails':
        return 'Blog Details';
      case '/servicedetails':
        return 'Service Details';
      case '/service':
        return 'Service';
      default:
        return 'Dashboard'; // Default name for unknown routes
    }
  };

  return (
    <section className="relative flex items-center justify-between py-4 px-6 bg-pink-200 h-48">
      <div className="container mx-auto relative z-10 flex items-center justify-between pl-10 pr-10">
        <div className="w-full flex flex-col items-center py-4 space-y-2">
          <div className="flex items-center">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center drop-shadow-lg">
              {getPageName()}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-lg">
            <span>Home</span>
            <span>{'>'}</span>
            <span className="font-semibold">{getPageName()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abt;














































// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

// const Abt = () => {
//   const location = useLocation();
//   const [aboutData, setAboutData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getPageName = () => {
//     const path = location.pathname.toLowerCase();
//     switch (path) {
//       case '/':
//         return 'Home';
//       case '/about':
//         return 'About';
//       case '/faq':
//         return 'FAQ';
//       case '/contact':
//         return 'Contact';
//       case '/blog':
//         return 'Blog';
//       case '/blogdetails':
//         return 'Blog Details';
//       case '/servicedetails':
//         return 'Service Details';
//       case '/service':
//         return 'Service';
//       default:
//         return 'Dashboard';
//     }
//   };

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const docRef = doc(db, 'sites', 'www.ascentm.in');
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const siteData = docSnap.data().siteData;
//           if (siteData && siteData['aboutUs']) {
//             setAboutData(siteData['aboutUs']);
//           } else {
//             setError('About-Us data not found.');
//           }
//         } else {
//           throw new Error('No such document!');
//         }
//       } catch (err) {
//         setError(err.message || 'Error fetching about data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (loading) return <p className="text-center text-teal-600 animate-pulse">Loading...</p>;
//   if (error) return <p className="text-center text-red-600">Error: {error}</p>;

//   // Destructure principalMessage and principalImage from aboutData
//   const { principalMessage, principalImage } = aboutData?.principalMessage || {};

//   return (
//     <section className="relative flex items-center justify-between py-4 px-6 md:px-32 bg-pink-200 h-48">
//       <div className="container mx-auto flex justify-between items-center">
        
//         {/* Left Section: Page Title */}
//         <div className="flex flex-col space-y-2">
//           <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
//             {getPageName()}
//           </div>
//           <div className="flex items-center space-x-2 text-gray-600 text-lg">
//             <span>Home</span>
//             <span>{'>'}</span>
//             <span className="font-semibold">{getPageName()}</span>
//           </div>
//         </div>

//         {/* Right Section: Principal's Image and Message */}
//         <div className="flex flex-col items-center space-y-2">
//           {principalImage ? (
//             <img
//               src={principalImage}
//               alt="Principal"
//               className="w-24 h-24 rounded-full object-cover shadow-lg"
//             />
//           ) : (
//             <p className="text-gray-600">Principal image not available.</p>
//           )}
//           <div className="text-lg text-gray-700 font-semibold text-center">
//             {principalMessage || 'Welcome!'}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Abt;
