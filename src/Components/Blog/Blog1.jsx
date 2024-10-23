





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
    <div className="max-w-7xl mx-auto p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Blog Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* First Featured Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwumYRWT-HL0yM84f0NpSmI8eskIj_7f0lw&s"
            alt="First Featured"
            className="rounded-lg shadow-lg w-full h-auto"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3NNCVPVGlZSZOmW4NvWIA95Swam1Yeji0nA&s"
            alt="Second Featured"
            className="rounded-lg shadow-lg w-full h-auto"
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
