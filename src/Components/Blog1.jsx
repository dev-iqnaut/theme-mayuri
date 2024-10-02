








// import React from "react";

// const Blog1 = () => {

//   const categories = [
//     { name: 'EduTech Solutions', count: '01', link: '/edutech-solutions' },
//     { name: 'SmartAcademy', count: '07', link: '/smartacademy' },
//     { name: 'KnowledgeHub', count: '02', link: '/knowledgehub' },
//     { name: 'Specialist', count: '04', link: '/specialist' },
//     { name: 'Education is the door', count: '03', link: '/education-door' },
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'Expand your horizons with Most Of education',
//       category: 'Category',
//       comments: 0,
//     },
//     {
//       id: 2,
//       title: 'Invest in education invest in yourself Best',
//       category: 'Category',
//       comments: 0,
//     },
//     {
//       id: 3,
//       title: 'Empower yourself through learning',
//       category: 'Category',
//       comments: 0,
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto p-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Section: Blog Content */}
//         <div className="lg:col-span-2">
//           {/* Featured Image */}
//           <img
//             src="https://via.placeholder.com/600x400"
//             alt="Featured"
//             className="rounded-lg shadow-lg"
//           />
          
//           {/* Text Section */}
//           <div className="mt-6">
//             <h2 className="text-2xl font-bold">
//               Unlock your potential with education: Grow and succeed through learning.
//             </h2>
//             <p className="mt-4 text-gray-600">
//               It is a long established fact that a reader will be distracted by the readable content.
//             </p>
            
//             {/* Read More Button */}
//             <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition">
//               Read More
//             </button>
//           </div>

//           {/* Metadata */}
//           <div className="mt-6 flex space-x-4 text-gray-500">
//             <span className="flex items-center">
//               <i className="fas fa-calendar-alt mr-2"></i>
//               January 19, 2024
//             </span>
//             <span className="flex items-center">
//               <i className="fas fa-user mr-2"></i>
//               By admin
//             </span>
//             <span className="flex items-center">
//               <i className="fas fa-comments mr-2"></i>
//               Comments (05)
//             </span>
//           </div>
//         </div>

//         {/* Right Section: Sidebar */}
//         <div className="lg:col-span-1 space-y-8">
//           {/* Categories */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold mb-4">
//               Category<span className="text-green-500">_</span>
//             </h3>
//             <ul className="space-y-4">
//               {categories.map((category, index) => (
//                 <li key={index}>
//                   <a
//                     href={category.link}
//                     className="flex justify-between items-center border border-gray-300 p-4 rounded-lg hover:bg-green-100 hover:text-green-600 transition duration-300 ease-in-out"
//                   >
//                     <span className="text-gray-700 font-medium">{category.name}</span>
//                     <span className="text-gray-500">{category.count}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Recent Posts */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Recent post_</h2>
//             <div className="space-y-4">
//               {posts.map((post) => (
//                 <a
//                   key={post.id}
//                   href="#"
//                   className="block p-4 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors duration-300"
//                 >
//                   <div className="text-sm text-gray-600 flex justify-between items-center mb-2">
//                     <span>{post.category}</span>
//                     <span>Comments {post.comments}</span>
//                   </div>
//                   <h3 className="text-lg font-semibold text-black">{post.title}</h3>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold">Tags</h3>
//             <div className="flex flex-wrap mt-4">
//               <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Learning</span>
//               <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Edu-Tech</span>
//               <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Study Room</span>
//               <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Academy</span>
//               <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Innovation</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog1;





















import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faComments } from '@fortawesome/free-solid-svg-icons';

const Blog1 = () => {
  const categories = [
    { name: 'EduTech Solutions', count: '01', link: '/edutech-solutions' },
    { name: 'SmartAcademy', count: '07', link: '/smartacademy' },
    { name: 'KnowledgeHub', count: '02', link: '/knowledgehub' },
    { name: 'Specialist', count: '04', link: '/specialist' },
    { name: 'Education is the door', count: '03', link: '/education-door' },
  ];

  const posts = [
    {
      id: 1,
      title: 'Expand your horizons with Most Of education',
      category: 'Category',
      comments: 0,
    },
    {
      id: 2,
      title: 'Invest in education invest in yourself Best',
      category: 'Category',
      comments: 0,
    },
    {
      id: 3,
      title: 'Empower yourself through learning',
      category: 'Category',
      comments: 0,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Blog Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* First Featured Image */}
          <img
            src="data:image/jpeg;base64,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"
            alt="First Featured"
            className="rounded-lg shadow-lg"
          />
            <div className="mt-6">
            <h2 className="text-2xl font-bold">
            Invest in education, invest in yourself: Education through learning
            </h2>
            <p className="mt-4 text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            
            {/* Read More Button */}
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition">
              Read More
            </button>
          </div>

          
          

          <div className="mt-6 flex space-x-4 text-gray-500">
  <span className="flex items-center">
    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
    January 19, 2024
  </span>
  <span className="flex items-center">
    <FontAwesomeIcon icon={faUser} className="mr-2" />
    By admin
  </span>
  <span className="flex items-center">
    <FontAwesomeIcon icon={faComments} className="mr-2" />
    Comments (05)
  </span>
</div>

          {/* Second Featured Image */}
          <img
            src="https://via.placeholder.com/600x400"
            alt="Second Featured"
            className="rounded-lg shadow-lg"
          />

          {/* Text Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
            The gateway to a brighter future: Learn, grow, and succeed with education
            </h2>
            <p className="mt-4 text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            
            {/* Read More Button */}
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition">
              Read More
            </button>
          </div>

          {/* Metadata */}
          
          <div className="mt-6 flex space-x-4 text-gray-500">
  <span className="flex items-center">
    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
    January 19, 2024
  </span>
  <span className="flex items-center">
    <FontAwesomeIcon icon={faUser} className="mr-2" />
    By admin
  </span>
  <span className="flex items-center">
    <FontAwesomeIcon icon={faComments} className="mr-2" />
    Comments (05)
  </span>
</div>
        </div>


        {/* Right Section: Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">
              Category<span className="text-green-500">_</span>
            </h3>
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.link}
                    className="flex justify-between items-center border border-gray-300 p-4 rounded-lg hover:bg-green-100 hover:text-green-600 transition duration-300 ease-in-out"
                  >
                    <span className="text-gray-700 font-medium">{category.name}</span>
                    <span className="text-gray-500">{category.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent post_</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href="#"
                  className="block p-4 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="text-sm text-gray-600 flex justify-between items-center mb-2">
                    <span>{post.category}</span>
                    <span>Comments {post.comments}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">{post.title}</h3>
                </a>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Tags</h3>
            <div className="flex flex-wrap mt-4">
              <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Learning</span>
              <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Edu-Tech</span>
              <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Study Room</span>
              <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Academy</span>
              <span className="mr-2 mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
