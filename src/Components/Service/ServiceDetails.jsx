



import React from "react";
// Import images if they are local assets
import service1 from '../Components/Assets/service1.jpg'; // Update the path as necessary
import service2 from '../Components/Assets/service2.jpg'; // Update the path as necessary
import service3 from '../Components/Assets/service3.jpg'; // Update the path as necessary

const ServiceDetails1 = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Top Image */}
      <div className="mb-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFVEyO88Axs3L7oKEkbUbHRwm0WaIgqUyKQ&s"
          alt="Group of Students"
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Discover the power of education, Knowledge is the key
        </h1>
        <p className="text-gray-600 mt-4">
          There are many variations of passages. This category focuses on the
          design and construction of living spaces. This category focuses on the
          design and arrangement of educational environments.
        </p>
      </div>

      {/* Bullet Points Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
        <div>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <p className="text-gray-700">
                Education is the key to success. It empowers individuals with
                knowledge.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <p className="text-gray-700">
                Education encompasses formal learning in schools, colleges, and
                universities.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <p className="text-gray-700">
                Education opens doors to opportunities, fosters critical
                thinking, and promotes development.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <p className="text-gray-700">
                It plays a vital role in shaping the future generation and
                promoting a better world.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src={service1}
          alt="Student Learning"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src={service2}
          alt="Child holding book"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src={service3}
          alt="Children Playing"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ServiceDetails1;
