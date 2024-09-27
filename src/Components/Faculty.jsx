import React from 'react';


// Profile card component
const ProfileCard = ({ image, name, title, bgColor }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 shadow-md ${bgColor} rounded-tl-2xl rounded-br-2xl`}
    >
      <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4" />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-500 hover:text-blue-700">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

// Main Team Component
const FacultyCard = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-teal-600">Meet Our Professional</h2>
        <h3 className="text-xl text-gray-700 mt-2">
          Joyful Journeys Childcare and the Of a Education
        </h3>
      </div>

      <div className="flex justify-center space-x-6">
        {/* Profile 1 */}
        <ProfileCard
          image="https://via.placeholder.com/150/ff7f7f"
          name="Jane Cooper"
          title="Marketing Coordinator"
          bgColor="bg-pink-50"
        />
        {/* Profile 2 */}
        <ProfileCard
          image="https://via.placeholder.com/150/7f7fff"
          name="Jane Cooper"
          title="Marketing Coordinator"
          bgColor="bg-green-50"
        />
        {/* Profile 3 */}
        <ProfileCard
          image="https://via.placeholder.com/150/7fff7f"
          name="Jane Cooper"
          title="Marketing Coordinator"
          bgColor="bg-blue-50"
        />
      </div>
    </section>
  );
};

export default FacultyCard;













