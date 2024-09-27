import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const FacultyCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">John Doe</h2>
        <p className="text-gray-600 mb-4">Marketing Coordinator</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 hover:text-blue-800 text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-blue-500 hover:text-blue-700 text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
