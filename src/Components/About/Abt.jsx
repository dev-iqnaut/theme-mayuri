import React from 'react';

const Abt = () => {
  return (
    <section className="relative flex items-center justify-between py-4 px-6 bg-pink-200 h-48"> {/* Solid baby pink background */}
      
      {/* Content */}
      <div className="container mx-auto relative z-10 flex items-center justify-between pl-10 pr-10">

        {/* Left: Text Section */}
        <div className="w-1/2 space-y-2 pl-16"> {/* Reduced padding */}
          <h1 className="text-3xl font-bold text-gray-800 leading-tight"> {/* Adjusted font size */}
            About Us
          </h1>
          <h3 className="text-gray-500 font-semibold">{`Home > About Us`}</h3>
        </div>

        {/* Right: Image of Boy */}
        

      </div>
    </section>
  );
};

export default Abt;
