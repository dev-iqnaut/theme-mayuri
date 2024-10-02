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
            src="data:image/jpeg;base64,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"
            alt="Tree and Kids Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default StayConnected;