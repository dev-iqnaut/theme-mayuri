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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFkm5KMUKGSMYM34CXkjamnJZrlegYzKpvg&s"
          name="Jane Cooper"
          title="Marketing Coordinator"
          bgColor="bg-pink-50"
        />
        {/* Profile 2 */}
        <ProfileCard
          image="data:image/jpeg;base64,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"
          name="Jane Cooper"
          title="Marketing Coordinator"
          bgColor="bg-green-50"
        />
        {/* Profile 3 */}
        <ProfileCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB32be3RYqkknLpD1I_gh7tccLsyYTPXQbA&s"
          name="Jane Cooper"
          title="Marketing Coordinator"
          bgColor="bg-blue-50"
        />
      </div>
    </section>
  );
};

export default FacultyCard;













