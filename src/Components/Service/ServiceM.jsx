import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="bg-green-100 p-4 rounded-lg flex-shrink-0">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">
          {description}
        </p>
        <a href="#" className="text-teal-600 font-medium hover:underline flex items-center space-x-2">
          <span>Read More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ServiceM = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 px-12 py-10">
      <Card 
        title="Online Class"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asf of a proin mollis pretium facilisi in, ligula volutpat."
        icon="https://img.icons8.com/ios-filled/50/000000/online.png"
      />
      <Card 
        title="Formal Tuition"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asf of a proin mollis pretium facilisi in, ligula volutpat."
        icon="https://img.icons8.com/ios-filled/50/000000/classroom.png"
      />
      <Card 
        title="Pre School"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asf of a proin mollis pretium facilisi in, ligula volutpat."
        icon="https://img.icons8.com/ios-filled/50/000000/school-building.png"
      />
      <Card 
        title="Special Tuition"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asf of a proin mollis pretium facilisi in, ligula volutpat."
        icon="https://img.icons8.com/ios-filled/50/000000/tutoring.png"
      />
      <Card 
        title="Edu Connect"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asf of a proin mollis pretium facilisi in, ligula volutpat."
        icon="https://img.icons8.com/ios-filled/50/000000/conference-call.png"
      />
      <Card 
        title="Knowledge Hub"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit platea the asf of a proin mollis pretium facilisi in, ligula volutpat."
        icon="https://img.icons8.com/ios-filled/50/000000/literature.png"
      />
    </div>
  );
};

export default ServiceM;
