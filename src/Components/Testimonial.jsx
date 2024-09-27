// import React from 'react';

// const Testimonial = () => {
//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Title Section */}
//       <div className="absolute left-0 top-0 mt-10 ml-10 z-10 pl-[100px]">
//         <h2 className="text-teal-600 text-lg font-semibold">Client's Testimonial</h2>
//         <h1 className="text-4xl font-bold mt-2">Unlocking the Power of Wonderworks Child</h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="relative flex items-center justify-center mt-32 max-w-6xl mx-auto px-12">
//         {/* Image Section */}
//         <div className="relative w-1/2 p-4">
//           <img
//             src="https://www.podareducation.org/Uploads/content/2021-1-21--12-12-35-2_ready-steady-books-why-its-important-for-your-kids-to-read_banner.jpg"
//             alt="Children reading"
//             className="rounded-lg object-cover w-full h-full"
//           />
//         </div>

//         {/* Testimonial Section (Overlapping Card) */}
//         <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-1/3 bg-white shadow-md rounded-lg p-8 z-20">
//           {/* Quote Sign */}
//           <div className="absolute top-4 right-4 text-3xl text-gray-300">
//             &ldquo;
//           </div>
          
//           <div className="flex items-center mb-4">
//             <img
//               src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
//               alt="Shakib Al Hasan"
//               className="w-10 h-10 rounded-full mr-4"
//             />
//             <div>
//               <p className="font-bold text-gray-800">Shakib Al Hasan</p>
//               <p className="text-sm text-gray-600">Marketing Manager</p>
//             </div>
//           </div>

//           <p className="text-gray-700 italic mb-4">
//             "Their product exceeded my expectations. The quality and attention to detail are outstanding and have become essential for me."
//           </p>

//           <div className="flex items-center justify-between">
//             {/* Rating (Stars) */}
//             <div className="flex items-center">
//               {[...Array(4)].map((_, index) => (
//                 <svg
//                   key={index}
//                   className="w-5 h-5 text-yellow-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927a1 1 0 011.902 0l1.433 4.422a1 1 0 00.95.69h4.65c.92 0 1.3 1.19.588 1.81l-3.755 2.755a1 1 0 00-.364 1.118l1.433 4.421c.285.88-.755 1.614-1.541 1.118L10 15.27l-3.755 2.755c-.785.496-1.826-.239-1.54-1.118l1.432-4.421a1 1 0 00-.364-1.118L2.118 9.85c-.711-.621-.332-1.81.588-1.81h4.65a1 1 0 00.951-.69L9.049 2.927z" />
//                 </svg>
//               ))}
//               <svg
//                 className="w-5 h-5 text-gray-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927a1 1 0 011.902 0l1.433 4.422a1 1 0 00.95.69h4.65c.92 0 1.3 1.19.588 1.81l-3.755 2.755a1 1 0 00-.364 1.118l1.433 4.421c.285.88-.755 1.614-1.541 1.118L10 15.27l-3.755 2.755c-.785.496-1.826-.239-1.54-1.118l1.432-4.421a1 1 0 00-.364-1.118L2.118 9.85c-.711-.621-.332-1.81.588-1.81h4.65a1 1 0 00.951-.69L9.049 2.927z" />
//               </svg>
//             </div>
//             {/* Rounded Dots */}
//             <div className="flex space-x-2 mt-4">
//               <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;







import React from 'react';

const Testimonial = () => {
  return (
    <div className="relative flex flex-col items-center px-12">
      {/* Title Section */}
      <div className="absolute left-0 top-0 mt-10 ml-10 z-10">
        <h2 className="text-teal-600 text-lg font-semibold">Client's Testimonial</h2>
        <h1 className="text-4xl font-bold mt-2">Unlocking the Power <br /> of Wonderworks Child</h1>
      </div>

      {/* Main Content Section */}
      <div className="relative flex items-center justify-center mt-32 max-w-6xl mx-auto">
        {/* Text Above Image */}
        <div className="w-full text-center mb-4">
          <p className="text-gray-700">
            "Their product exceeded my expectations. The quality and attention to detail are outstanding and have become essential for me."
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-1/2 p-4 ml-5"> {/* Shifted 20px to the left */}
          <img
            src="https://www.podareducation.org/Uploads/content/2021-1-21--12-12-35-2_ready-steady-books-why-its-important-for-your-kids-to-read_banner.jpg"
            alt="Children reading"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Testimonial Section (Overlapping Card) */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-1/3 bg-white shadow-md rounded-lg p-8 z-20 ml-5"> {/* Shifted 20px to the left */}
          {/* Quote Sign */}
          <div className="absolute top-4 right-4 text-3xl text-gray-300">&ldquo;</div>

          <div className="flex items-center mb-4">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt="Shakib Al Hasan"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-gray-800">Shakib Al Hasan</p>
              <p className="text-sm text-gray-600">Marketing Manager</p>
            </div>
          </div>

          <p className="text-gray-700 italic mb-4">
            "Their product exceeded my expectations. The quality and attention to detail are outstanding and have become essential for me."
          </p>

          <div className="flex items-center justify-between">
            {/* Rating (Stars) */}
            <div className="flex items-center">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.433 4.422a1 1 0 00.95.69h4.65c.92 0 1.3 1.19.588 1.81l-3.755 2.755a1 1 0 00-.364 1.118l1.433 4.421c.285.88-.755 1.614-1.541 1.118L10 15.27l-3.755 2.755c-.785.496-1.826-.239-1.54-1.118l1.432-4.421a1 1 0 00-.364-1.118L2.118 9.85c-.711-.621-.332-1.81.588-1.81h4.65a1 1 0 00.951-.69L9.049 2.927z" />
                </svg>
              ))}
              <svg
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.433 4.422a1 1 0 00.95.69h4.65c.92 0 1.3 1.19.588 1.81l-3.755 2.755a1 1 0 00-.364 1.118l1.433 4.421c.285.88-.755 1.614-1.541 1.118L10 15.27l-3.755 2.755c-.785.496-1.826-.239-1.54-1.118l1.432-4.421a1 1 0 00-.364-1.118L2.118 9.85c-.711-.621-.332-1.81.588-1.81h4.65a1 1 0 00.951-.69L9.049 2.927z" />
              </svg>
            </div>
            {/* Rounded Dots */}
            <div className="flex space-x-2 mt-4">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
