import React from "react";

const StayConnected = () => {
  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="space-y-4 max-w-lg">
          <p className="text-teal-500 font-semibold">Stay With Us</p>
          <h1 className="text-4xl font-bold text-gray-800">
            The path to success starts with education
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
            dictum facilisis sem. Imperdiet massa turpis sit proin metus
            volutpat.
          </p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="hidden lg:block">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Tree and Kids Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
