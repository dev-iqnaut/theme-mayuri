import React from 'react';

const ContactSection2 = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
      {/* Left Section - Images and Project Info */}
      <div className="flex flex-col space-y-6 items-center lg:items-start">
        {/* Title */}
        <p className="text-teal-500 font-semibold">Contact</p>
        <h1 className="text-3xl font-bold">Unlock your potential with education</h1>

        {/* Image and Badge */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 bg-orange-500 text-white p-4 rounded-lg flex items-center space-x-2 shadow-lg">
            <img 
              src="https://img.icons8.com/ios-filled/50/000000/prize.png" 
              alt="Project Icon"
              className="w-6 h-6"
            />
            <div>
              <h4 className="text-lg font-bold">2k+</h4>
              <p>Project Completed</p>
            </div>
          </div>
          {/* Primary Image */}
          <img
            src="https://via.placeholder.com/300"
            alt="Main"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
        <form className="space-y-6">
          <div className="flex space-x-4">
            {/* Name Input with Icon */}
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <i className="fas fa-user absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* Email Input with Icon */}
            <div className="relative w-1/2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <i className="fas fa-envelope absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          {/* Address Input with Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Address"
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <i className="fas fa-map-marker-alt absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          {/* Message Input with Icon */}
          <div className="relative">
            <textarea
              placeholder="Write Message.."
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <i className="fas fa-comment-dots absolute top-4 right-3 text-gray-400"></i>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white p-4 rounded-md w-full hover:bg-orange-600 transition-colors"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection2;
