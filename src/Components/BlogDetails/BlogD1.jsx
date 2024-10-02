import React from "react";

const BlogD1 = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Featured Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBLC8fhrPGV99tj5WUT6l9kyrzxFb6LwI5w&s"
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
              src="data:image/jpeg;base64,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"
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
