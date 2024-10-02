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
            src="data:image/jpeg;base64,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"
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
