import React from "react";

const BlogD1 = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Featured Image */}
          <img
            src="https://via.placeholder.com/600x400"
            alt="Featured"
            className="rounded-lg shadow-lg"
          />
          
          {/* Text Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
              Unlock your potential with education over yourself through learning.
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
              <i className="fas fa-calendar-alt mr-2"></i>
              January 19, 2024
            </span>
            <span className="flex items-center">
              <i className="fas fa-user mr-2"></i>
              By admin
            </span>
            <span className="flex items-center">
              <i className="fas fa-comments mr-2"></i>
              Comments (05)
            </span>
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src="https://via.placeholder.com/100"
              alt="Nafiz Bhuiyan"
              className="rounded-full w-16 h-16 mx-auto"
            />
            <h3 className="mt-4 text-center text-xl font-semibold">Nafiz Bhuiyan</h3>
            <p className="text-center text-gray-600 mt-2">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Search</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <i className="fas fa-search absolute top-1/2 right-4 transform -translate-y-1/2 text-teal-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogD1;
