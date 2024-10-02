

// import React from 'react';

// const BlogD3 = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {/* Left Section (Main Content) */}
//       <div className="lg:col-span-2">
//         {/* Tags Section */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">Tags:</h3>
//           <div className="flex flex-wrap gap-2">
//             {['All Project', 'Edu Connect', 'Smart Academy'].map((tag, index) => (
//               <button
//                 key={index}
//                 className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Post Navigation Section */}
//         <div className="flex justify-between items-center my-6">
//           <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
//             <i className="fas fa-chevron-left mr-2"></i> Previous post
//           </a>
//           <div className="flex space-x-4">
//             <button className="bg-red-400 rounded-full text-white p-2 hover:bg-red-500">
//               X
//             </button>
//             <a href="#" className="text-gray-500 hover:text-gray-700">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-700">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-700">
//               <i className="fab fa-pinterest"></i>
//             </a>
//           </div>
//           <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
//             Next post <i className="fas fa-chevron-right ml-2"></i>
//           </a>
//         </div>

//         {/* Comment Section */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h3 className="text-xl font-semibold mb-6">Write your comment</h3>
//           <form>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//               {/* Name Input */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//                 <i className="fas fa-phone absolute top-3 right-4 text-gray-400"></i>
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//                 <i className="fas fa-paper-plane absolute top-3 right-4 text-gray-400"></i>
//               </div>
//             </div>

//             {/* Message Textarea */}
//             <div className="mb-6">
//               <textarea
//                 placeholder="Write your message here"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 rows="5"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
//               Send Now
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Section (Tags Cloud Sidebar) */}
//       <div className="lg:col-span-1">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Tags_</h3>
//           <div className="flex flex-wrap gap-2">
//             {['LearnWell', 'Edu Pro', 'Study Boost', 'Academy', 'LearnEase', 'BrainWave'].map((tag, index) => (
//               <button
//                 key={index}
//                 className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogD3;
