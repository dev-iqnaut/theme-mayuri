
import React from 'react';

const EducationalPrograms = () => {
  return (
    <section className="py-12 px-4 md:px-32"> {/* Updated padding for mobile and desktop */}
      {/* Section heading */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-green-500">Educational Programs</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Strong Foundation for Success For Nurturing Curiosity
        </h2>
      </div>

      {/* Program cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Online Class */}
        <div className="relative bg-white p-6 rounded-lg shadow-md">
          {/* Icon on the left side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-4 rounded-lg">
            <img src="https://via.placeholder.com/40" alt="Online Class" />
          </div>
          <div className="ml-20"> {/* Add margin-left to push content to the right */}
            <h3 className="text-xl font-semibold text-gray-800">Online Class</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit platea.
            </p>
            <a href="#" className="text-green-600 mt-4 inline-block">
              Read More &rarr;
            </a>
          </div>
        </div>

        {/* Formal Tuition */}
        <div className="relative bg-white p-6 rounded-lg shadow-md">
          {/* Icon on the left side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-4 rounded-lg">
            <img src="https://via.placeholder.com/40" alt="Formal Tuition" />
          </div>
          <div className="ml-20">
            <h3 className="text-xl font-semibold text-gray-800">Formal Tuition</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit platea.
            </p>
            <a href="#" className="text-green-600 mt-4 inline-block">
              Read More &rarr;
            </a>
          </div>
        </div>

        {/* Preschool */}
        <div className="relative bg-white p-6 rounded-lg shadow-md">
          {/* Icon on the left side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-4 rounded-lg">
            <img src="https://via.placeholder.com/40" alt="Preschool" />
          </div>
          <div className="ml-20">
            <h3 className="text-xl font-semibold text-gray-800">Preschool</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit platea.
            </p>
            <a href="#" className="text-green-600 mt-4 inline-block">
              Read More &rarr;
            </a>
          </div>
        </div>

        {/* Special Tuition */}
        <div className="relative bg-white p-6 rounded-lg shadow-md">
          {/* Icon on the left side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-4 rounded-lg">
            <img src="https://via.placeholder.com/40" alt="Special Tuition" />
          </div>
          <div className="ml-20">
            <h3 className="text-xl font-semibold text-gray-800">Special Tuition</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit platea.
            </p>
            <a href="#" className="text-green-600 mt-4 inline-block">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalPrograms;
