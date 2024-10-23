





import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-28 relative">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center mb-10 lg:mb-0 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFUlCHhwfKxYoWiVwl71ua7PVRoaQICTD1Q&s"
          alt="Child with Laptop"
          className="w-80 h-auto z-10"
        />
        {/* Vertically aligned circles */}
        <div className="absolute bottom-3 right-0 bg-green-200 w-32 h-32 rounded-full -z-7" />
        <div className="absolute top-10 right-0 bg-pink-200 w-32 h-32 rounded-full -z-10" />
      </div>

      {/* Right FAQ Section */}
      <div className="lg:w-1/2 w-full lg:ml-10">
        <h2 className="text-teal-600 font-semibold mb-3">Some FAQ</h2>
        <h1 className="text-3xl font-bold mb-5">
          Empowering Children Through Education Playful Mind
        </h1>

        {/* FAQ Items */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(0)}
            >
              <h3 className="font-semibold">Why do we have to go to school?</h3>
              <span
                className={`${
                  activeIndex === 0 ? 'text-teal-600' : 'text-gray-600'
                } transition-colors duration-300 ease-in-out`}
              >
                {activeIndex === 0 ? '-' : '+'}
              </span>
            </div>
            {activeIndex === 0 && (
              <p className="mt-2 text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content...
              </p>
            )}
          </div>

          <div className="border rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(1)}
            >
              <h3 className="font-semibold">What subjects will I learn in school?</h3>
              <span
                className={`${
                  activeIndex === 1 ? 'text-teal-600' : 'text-gray-600'
                } transition-colors duration-300 ease-in-out`}
              >
                {activeIndex === 1 ? '-' : '+'}
              </span>
            </div>
            {activeIndex === 1 && (
              <p className="mt-2 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
            )}
          </div>

          <div className="border rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(2)}
            >
              <h3 className="font-semibold">How long is a school day?</h3>
              <span
                className={`${
                  activeIndex === 2 ? 'text-teal-600' : 'text-gray-600'
                } transition-colors duration-300 ease-in-out`}
              >
                {activeIndex === 2 ? '-' : '+'}
              </span>
            </div>
            {activeIndex === 2 && (
              <p className="mt-2 text-gray-600">
                The standard school day usually lasts between 6-7 hours...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
