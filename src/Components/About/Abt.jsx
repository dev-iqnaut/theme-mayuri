

// import React from 'react';
// import { useLocation } from 'react-router-dom'; // Ensure you're using React Router

// const Abt = () => {
//   const location = useLocation(); // Get the current location

//   const getPageName = () => {
//     const path = location.pathname;

//     switch (path) {
//       case '/':
//         return 'Home';
//       case '/About':
//         return 'About';
//       case '/FAQ':
//         return 'FAQ';
//       case '/contact':
//         return 'Contact';
//       case '/Blog':
//         return 'Blog';
//       case '/BlogDetails':
//         return 'Blog Details';
//       case '/ServiceDetails':
//         return 'Service Details';
//       case '/Service':
//         return 'Service';
    
//       default:
//         return 'Dashboard'; // Default name for unknown routes
//     }
//   };

//   return (
//     <section className="relative flex items-center justify-between py-4 px-6 bg-pink-200 h-48"> {/* Solid baby pink background */}
//       {/* Content */}
//       <div className="container mx-auto relative z-10 flex items-center justify-between pl-10 pr-10">
//         {/* Left: Text Section */}
//         {/* <div className="w-1/2 space-y-2 pl-16">
//           <div className="flex items-center space-x-4">
//             <span className="text-lg font-semibold">{getPageName()}</span>
//           </div>
//         </div> */}
//         {/* <div className="w-full flex justify-center py-4">
//   <div className="flex items-center">
//     <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center drop-shadow-lg">
//       {getPageName()}
//     </span>
//   </div>
// </div> */}
// <div className="w-full flex flex-col items-center py-4 space-y-2">
//   {/* Bold and attractive title */}
//   <div className="flex items-center">
//     <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center drop-shadow-lg">
//       {getPageName()}
//     </span>
//   </div>

//   {/* Breadcrumb navigation */}
//   <div className="flex items-center space-x-2 text-gray-600 text-lg">
//     <span>Home</span>
//     <span>{'>'}</span>
//     <span className="font-semibold">{getPageName()}</span>
//   </div>
// </div>




//         {/* Right: Image of Boy (Placeholder for future content) */}
//       </div>
//     </section>
//   );
// };

// export default Abt;



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
