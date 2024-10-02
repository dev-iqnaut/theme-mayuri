import React, { useState } from 'react';

const PortfolioSection = () => {
  // Simulate selected category state
  const [selectedCategory, setSelectedCategory] = useState('Education');

  const categories = ['Education', 'School', 'Learn', 'Child', 'Coaching'];

  const images = [
    { id: 1, src: 'https://via.placeholder.com/300', title: 'Exploring Minds Elementary Best School', subtitle: 'Dreamland Elementary', category: 'Education' },
    { id: 2, src: 'https://via.placeholder.com/300', title: '', subtitle: '', category: 'School' },
    { id: 3, src: 'https://via.placeholder.com/300', title: '', subtitle: '', category: 'Child' },
    { id: 4, src: 'https://via.placeholder.com/300', title: '', subtitle: '', category: 'Learn' },
    { id: 5, src: 'https://via.placeholder.com/300', title: '', subtitle: '', category: 'Coaching' },
    { id: 6, src: 'https://via.placeholder.com/300', title: '', subtitle: '', category: 'Education' }
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold text-teal-500 text-center">Latest Portfolio</h2>
        <h1 className="text-3xl font-bold mt-2 mb-6 text-center">
          Exploring Minds Elementary School<br/>Education the only school
        </h1>
        
        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border border-gray-300 text-gray-500 hover:bg-orange-500 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative rounded-lg overflow-hidden shadow-lg ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
              
              {index === 0 && (
                <div className="absolute inset-0 bg-orange-500 bg-opacity-50 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                    <p className="mt-2">{image.subtitle}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-start mt-4">
          <button className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
