import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Image */}
        <div className="relative col-span-1">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://example.com/school-image.jpg" // Replace with actual image link
            alt="Children in School"
          />
          <div className="absolute bottom-4 left-4 bg-orange-400 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 20h5v-2a4 4 0 00-3-3.87M7 20h10a4 4 0 00-4-4H7a4 4 0 00-4 4v2h5zM12 4a4 4 0 110 8 4 4 0 010-8z"
    />
  </svg>
  <p className="font-semibold">5,000+ Satisfied Clients</p>
</div>

        </div>

        {/* Middle Section - Academy and Experience Stats */}
        <div className="flex flex-col space-y-4">
  {/* Academy Card */}
  <div className="flex flex-col items-center justify-center bg-teal-50 w-32 h-32 rounded-lg shadow"> {/* Set width and height */}
    <div className="flex-shrink-0">
      <img
        src="https://example.com/icon.png" // Replace with actual icon link
        alt="Academy Icon"
        className="h-10 w-10"
      />
    </div>
    <div className="text-center">
      <h3 className="font-bold text-teal-600 text-sm">Academy</h3>
      <p className="text-xs text-gray-500">Learning Ladder</p>
    </div>
  </div>

  {/* Experience Card */}
  <div className="flex flex-col items-center justify-center bg-gray-50 w-32 h-32 rounded-lg shadow"> {/* Set width and height */}
    <div className="flex-shrink-0">
      <img
        src="https://example.com/experience-icon.png" // Replace with actual icon link
        alt="Experience Icon"
        className="h-10 w-10"
      />
    </div>
    <div className="text-center">
      <h3 className="font-bold text-gray-700 text-sm">10+</h3>
      <p className="text-xs text-gray-500">Years of Experience</p>
    </div>
  </div>
</div>


        {/* Right Section - Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-teal-500 font-semibold">About Us</h2>
          <h1 className="text-4xl font-bold text-gray-900">
            Unlocking Potential, One Child at a Time
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ligula
            volutpat lobortis molestie sed per accumsan conubia.
          </p>

          {/* Call-to-Action */}
          <button className="mt-6 w-32 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
