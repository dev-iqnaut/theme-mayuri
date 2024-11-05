

import React from 'react';
import { useLocation } from 'react-router-dom';

const Abt = () => {
  const location = useLocation();

  const getPageName = () => {
    const path = location.pathname.toLowerCase(); 

    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/faq':
        return 'FAQ';
      case '/contact':
        return 'Contact';
      case '/blog':
        return 'Blog';
      case '/blogdetails':
        return 'Blog Details';
      case '/servicedetails':
        return 'Service Details';
      case '/service':
        return 'Service';
      default:
        return 'Dashboard'; // Default name for unknown routes
    }
  };

  return (
    <section className="relative flex items-center justify-between py-4 px-6 bg-pink-200 h-48">
      <div className="container mx-auto relative z-10 flex items-center justify-between pl-10 pr-10">
        <div className="w-full flex flex-col items-center py-4 space-y-2">
          <div className="flex items-center">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center drop-shadow-lg">
              {getPageName()}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-lg">
            <span>Home</span>
            <span>{'>'}</span>
            <span className="font-semibold">{getPageName()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abt;































