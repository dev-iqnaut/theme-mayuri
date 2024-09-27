import React from 'react';

const EducationSection = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-left mr-6">
        <h2 className="text-sky-400 italic text-lg mb-2">
          Student College
        </h2>
        <h3 className="text-lg font-semibold mb-4">
          Knowledge for All: Learning Excellence for Everyone
        </h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Learn More
        </button>
      </div>

      {/* Right Side: Overlapping Circles */}
      <div className="relative grid grid-cols-2 gap-4 md:w-1/2">
        <div className="bg-blue-200 p-4 text-center text-sm rounded-full transform translate-x-2 -translate-y-2 z-10 w-24 h-24 flex items-center justify-center">
          1-2 Years
        </div>
        <div className="bg-green-200 p-6 text-center text-md rounded-full transform -translate-x-4 translate-y-3 z-20 w-28 h-28 flex items-center justify-center">
          6-8 Years
        </div>
        <div className="bg-purple-200 p-5 text-center text-lg rounded-full transform translate-x-6 -translate-y-4 z-30 w-32 h-32 flex items-center justify-center">
          3-5 Years
        </div>
        <div className="bg-yellow-200 p-3 text-center text-xs rounded-full transform -translate-x-6 translate-y-4 z-40 w-20 h-20 flex items-center justify-center">
          16-18 Years
        </div>
        <div className="bg-red-200 p-4 text-center text-lg rounded-full transform translate-x-4 -translate-y-3 z-50 w-24 h-24 flex items-center justify-center">
          12-15 Years
        </div>
        <div className="bg-teal-200 p-5 text-center text-md rounded-full transform -translate-x-2 translate-y-5 z-60 w-28 h-28 flex items-center justify-center">
          9-11 Years
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
