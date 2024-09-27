import React from 'react';

const ConnectedH = () => {
  return (
    <section className="relative flex items-center justify-between py-12 px-6 bg-gradient-to-b from-green-50 to-white h-screen">
      
      {/* Content */}
      <div className="container mx-auto relative z-10 flex items-center justify-between">

        {/* Left: Text and Form */}
        <div className="w-1/2 space-y-4">
          <h3 className="text-gray-500 font-semibold">Get Connected</h3>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Education That Sparks Imagination <br />
            Nurturing Curiosity Inspire
          </h1>

          {/* Form */}
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              Submit &rarr;
            </button>
          </div>
        </div>

        {/* Right: Image of Boy */}
        <div className="w-1/2 flex justify-center">
  <img
    src="https://img.freepik.com/premium-vector/schoolboy-saying-hello-time-back-school_546897-234.jpg"
    alt="Boy background"
    className="object-contain w-1/2 h-1/2"
  />
</div>

      </div>
    </section>
  );
};

export default ConnectedH;
