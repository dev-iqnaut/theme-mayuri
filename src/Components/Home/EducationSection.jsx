import React from 'react';

const EducationSection = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center px-28">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-left mr-6">
        <h2 className="text-sky-400 italic text-lg mb-2">
          Student Knowledge
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
      {/* <div className="relative grid grid-cols-2 gap-4 md:w-1/2">
  <div className="bg-pink-200 p-4 text-center text-sm rounded-lg w-60 h-16 flex items-center justify-center">
    1-2 Years
  </div>
  <div className="bg-blue-200 p-4 text-center text-sm rounded-lg w-60 h-16 flex items-center justify-center">
    3-5 Years
  </div>
  <div className="bg-green-200 p-4 text-center text-sm rounded-lg w-72 h-16 flex items-center justify-center">
    6-8 Years
  </div>
  <div className="bg-purple-200 p-4 text-center text-sm rounded-lg w-64 h-16 flex items-center justify-center">
    9-11 Years
  </div>
  <div className="bg-teal-200 p-4 text-center text-sm rounded-lg w-64 h-16 flex items-center justify-center">
    9-11 Years
  </div>
  <div className="bg-teal-200 p-4 text-center text-sm rounded-lg w-64 h-16 flex items-center justify-center">
    9-11 Years
  </div>
</div> */}

<div className="relative grid grid-cols-1 gap-6 md:w-1/2">
  {/* 1st and 2nd boxes */}
  <div className="relative">
    <div className="bg-pink-200 p-4 text-center text-sm rounded-lg w-60 h-16 flex items-center justify-center">
      1-2 Years
    </div>
    <div className="bg-blue-200 p-4 text-center text-sm rounded-lg w-60 h-16 flex items-center justify-center absolute -right-4 top-8">
      3-5 Years
    </div>
  </div>

  {/* 3rd and 4th boxes */}
  <div className="relative">
    <div className="bg-green-200 p-4 text-center text-sm rounded-lg w-72 h-16 flex items-center justify-center">
      6-8 Years
    </div>
    <div className="bg-purple-200 p-4 text-center text-sm rounded-lg w-64 h-16 flex items-center justify-center absolute -right-4 top-8">
      9-11 Years
    </div>
  </div>

  {/* 5th and 6th boxes */}
  <div className="relative">
    <div className="bg-teal-200 p-4 text-center text-sm rounded-lg w-64 h-16 flex items-center justify-center">
      9-11 Years
    </div>
    <div className="bg-teal-200 p-4 text-center text-sm rounded-lg w-64 h-16 flex items-center justify-center absolute -right-4 top-8">
      9-11 Years
    </div>
  </div>
</div>


      
    </div>
  );
};

export default EducationSection;
