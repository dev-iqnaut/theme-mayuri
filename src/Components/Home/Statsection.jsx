



// import React from 'react';
// import { Button } from '@mui/material';
// import { AiOutlineUser, AiOutlineCheck, AiOutlineTeam, AiOutlineUnorderedList } from 'react-icons/ai'; 

// const StatsSection = () => {
//   return (
//     <div className="flex items-center justify-between px-28 py-6 bg-white">
//       <div className="text-left flex-1">
//         <span className="italic text-sky-500 block mb-2">NUMBER TALKS</span>
//         <h2 className="font-bold text-2xl mb-2">Invest in education, invest in the future</h2>
//         <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, odio?</p>
//         <Button variant="contained" color="primary">
//           Get a Quote
//         </Button>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 flex-1">
//         {/* Stats Boxes */}
//         <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 mr-4">
//               <AiOutlineUser className="text-white text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">20K</h3>
//               <p className="text-gray-700">Running Students</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 mr-4">
//               <AiOutlineCheck className="text-white text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">12K</h3>
//               <p className="text-gray-700">Completed</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 mr-4">
//               <AiOutlineTeam className="text-white text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">3K</h3>
//               <p className="text-gray-700">Teachers</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
//           <div className="flex items-center">
//             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 mr-4">
//               <AiOutlineUnorderedList className="text-white text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl">23K</h3>
//               <p className="text-gray-700">Students Enrolled</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;



import React from 'react';
import { Button } from '@mui/material';
import { AiOutlineUser, AiOutlineCheck, AiOutlineTeam, AiOutlineUnorderedList } from 'react-icons/ai'; 

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-28 py-6 bg-white">
      {/* Left Section */}
      <div className="text-left mb-6 md:mb-0 md:flex-1">
        <span className="italic text-sky-500 block mb-2">NUMBER TALKS</span>
        <h2 className="font-bold text-2xl md:text-3xl mb-2">Invest in education, invest in the future</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, odio?
        </p>
        <Button variant="contained" color="primary">
          Get a Quote
        </Button>
      </div>
      
      {/* Right Section (Stats Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-1">
        {/* Stats Box 1 */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 mr-4">
              <AiOutlineUser className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-xl">20K</h3>
              <p className="text-gray-700">Running Students</p>
            </div>
          </div>
        </div>
        
        {/* Stats Box 2 */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 mr-4">
              <AiOutlineCheck className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-xl">12K</h3>
              <p className="text-gray-700">Completed</p>
            </div>
          </div>
        </div>

        {/* Stats Box 3 */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 mr-4">
              <AiOutlineTeam className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-xl">3K</h3>
              <p className="text-gray-700">Teachers</p>
            </div>
          </div>
        </div>

        {/* Stats Box 4 */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 mr-4">
              <AiOutlineUnorderedList className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-xl">23K</h3>
              <p className="text-gray-700">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
