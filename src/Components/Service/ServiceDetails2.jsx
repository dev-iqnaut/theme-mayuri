

import React from 'react';
import Port from "../Assets/port2.jpeg";

const ServiceDetails2 = () => {
  return (
    <div className="App">
      {/* Service Cards Section */}
      <section className="flex flex-col md:flex-row justify-around p-8 bg-orange-50">
        <div className="bg-orange-100 p-6 m-2 flex-1 rounded-lg text-center max-w-xs">
          <div className="text-4xl mb-4">🚗</div>
          <h3 className="text-xl font-semibold mb-4">Online Class</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asor of a proin mollis
          </p>
        </div>
        <div className="bg-orange-100 p-6 m-2 flex-1 rounded-lg text-center max-w-xs">
          <div className="text-4xl mb-4">👶</div>
          <h3 className="text-xl font-semibold mb-4">Special Tuition</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asor of a proin mollis
          </p>
        </div>
        <div className="bg-orange-100 p-6 m-2 flex-1 rounded-lg text-center max-w-xs">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-4">Knowledge Hub</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asor of a proin mollis
          </p>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="p-6 md:p-10 lg:px-32">
        <h2 className="text-2xl font-semibold mb-4">Service All Details</h2>

        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Side (Text Section) */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-gray-700 mb-6">
              There are many variations passages. This category focuses on the design and construction of living spaces,
              arrangement of furniture, and decorative elements within them.
            </p>
            <ul className="list-none pl-0">
              <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
                It plays a vital role in shaping the future generation and promoting education.
              </li>
              <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
                Education encompasses formal learning in schools, colleges, and universities.
              </li>
              <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
                Education opens doors to opportunities, fosters critical thinking, and promotes development.
              </li>
              <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
                It encompasses formal learning in schools, colleges, and universities.
              </li>
            </ul>
          </div>

          {/* Right Side (Image Section) */}
          <div className="md:w-1/2">
            <img 
              src={Port} 
              alt="Description of the image" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails2;
