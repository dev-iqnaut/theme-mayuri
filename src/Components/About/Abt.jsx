// import React from 'react';

// const Abt = () => {

//   const getPageName = () => {
//     const path = location.pathname;

//     // if (path.startsWith('/profile/')) {
//     //   return 'Profile'; // For dynamic routes like /profile/:name
//     // }

//     switch (path) {
//       case '/':
//         return 'Home';
//       case '/About':
//         return 'About';
//       case '/performance-analytics':
//         return 'Performance Analytics';
//       case '/payroll':
//         return 'Payroll';
//         case '/reports':
//         return 'Reports';
//         case '/roles':
//         return 'Roll';
//         case '/payroll-dashboard':
//         return 'Payroll Dashboard';
//         case '/payroll-report':
//         return 'Payroll Report';
//       case '/department-management':
//         return 'Department';
//       case '/performance-management':
//         return 'Performance Review';
//       // Add more cases as needed
//       default:
//         return 'Dashboard'; // Default name

//     }
//   };


//   return (
//     <section className="relative flex items-center justify-between py-4 px-6 bg-pink-200 h-48"> {/* Solid baby pink background */}
      
//       {/* Content */}
//       <div className="container mx-auto relative z-10 flex items-center justify-between pl-10 pr-10">

//         {/* Left: Text Section */}
//         <div className="w-1/2 space-y-2 pl-16"> {/* Reduced padding */}
//           {/* <h1 className="text-3xl font-bold text-gray-800 leading-tight"> 
//             About Us
//           </h1>
//           <h3 className="text-gray-500 font-semibold">{`Home > About Us`}</h3> */}
//            <div className="flex items-center space-x-4">
//         <span className="text-lg font-semibold">{getPageName()}</span>
//       </div>
//         </div>

//         {/* Right: Image of Boy */}
        

//       </div>
//     </section>
//   );
// };

// export default Abt;


import React from 'react';
import { useLocation } from 'react-router-dom'; // Ensure you're using React Router

const Abt = () => {
  const location = useLocation(); // Get the current location

  const getPageName = () => {
    const path = location.pathname;

    switch (path) {
      case '/':
        return 'Home';
      case '/About':
        return 'About';
      case '/FAQ':
        return 'FAQ';
      case '/contact':
        return 'Contact';
      case '/Blog':
        return 'Blog';
      case '/BlogDetails':
        return 'Blog Details';
      case '/ServiceDetails':
        return 'Service Details';
      case '/Service':
        return 'Service';
      case '/department-management':
        return 'Department';
      case '/performance-management':
        return 'Performance Review';
      default:
        return 'Dashboard'; // Default name for unknown routes
    }
  };

  return (
    <section className="relative flex items-center justify-between py-4 px-6 bg-pink-200 h-48"> {/* Solid baby pink background */}
      {/* Content */}
      <div className="container mx-auto relative z-10 flex items-center justify-between pl-10 pr-10">
        {/* Left: Text Section */}
        <div className="w-1/2 space-y-2 pl-16">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">{getPageName()}</span>
          </div>
        </div>

        {/* Right: Image of Boy (Placeholder for future content) */}
      </div>
    </section>
  );
};

export default Abt;

