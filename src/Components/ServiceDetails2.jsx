import React from 'react';

const ServiceDetails2 = () => {
  return (
    <section className="p-10">
  <h2 className="text-2xl font-semibold mb-4">Service all details</h2>
  
  <div className="flex flex-col md:flex-row items-start justify-between">
    {/* Left Side (Text Section) */}
    <div className="md:w-1/2 mb-6 md:mb-0">
      <p className="text-gray-700 mb-6">
        There are many variations passages a This category focariatio of design Redefining the an the concept of living.
        This category focuses on the design and construction of arrangement furniture and decorative elements within them focariatio of design.
      </p>
      <ul className="list-none pl-0">
        <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
          It plays a vital role in shaping the future generation and promoting
        </li>
        <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
          Education encompasses formal learning in schools, colleges, and universities
        </li>
        <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
          Education opens doors to opportunities, fosters critical thinking, and promotes
        </li>
        <li className="relative pl-8 mb-2 before:content-['»'] before:absolute before:left-0 before:text-teal-500 before:text-lg">
          Man encompasses formal learning in schools, colleges, and universities
        </li>
      </ul>
    </div>
    
    {/* Right Side (Image Section) */}
    <div className="md:w-1/2">
      <img 
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." 
        alt="Description of the image" 
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>

  );
};

export default ServiceDetails2;
