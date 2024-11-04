
// import React, { useState } from 'react';
// import lsc2 from '../Assets/LSC2.jpeg';
// import lsc3 from '../Assets/LSC3.jpeg';
// import lsc1 from '../Assets/LSC1.jpeg';

// const Modal = ({ isOpen, onClose, content }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-24">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
//         <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-2xl">
//           &times;
//         </button>
        
//         {/* Image positioned at the upper boundary */}
//         <div className="flex justify-center mb-4">
//           <img src={content.image} alt={content.title} className="w-20 h-20 object-contain" />
//         </div>
        
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.title}</h3>
//         <p className="text-gray-600 mb-4">{content.description}</p>

//         {/* "Read More" Arrow */}
//         <a
//           href="#"
//           className="text-green-500 flex items-center gap-2 font-semibold hover:underline">
//           Read More
//           <span className="text-green-500">&rarr;</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// const LatestService = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({ title: '', description: '', image: '' });

//   const openModal = (title, description, image) => {
//     setModalContent({ title, description, image });
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <section className="py-12 px-6 md:px-10 lg:px-32">
//       {/* Main container */}
//       <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        
//         {/* Left section: Text content */}
//         <div className="lg:w-1/2">
//           <h3 className="text-green-500 font-semibold text-lg mb-2">Latest Service</h3>
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Building a Strong Foundation<br/> for Success
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra,<br/> nostra mattis hendrerit proin mollis pretium facilisi in, ligula volutpat.
//           </p>
//           <a
//             href="#"
//             className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
//             Read More &rarr;
//           </a>
//         </div>

//         {/* Right section: Cards */}
//         <div className="lg:w-1/2 bg-orange-100 p-6 rounded-lg relative">
//           {/* Cards grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
//             {/* First card */}
//             <div
//               onClick={() => openModal('Learning School', 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.', 'https://via.placeholder.com/80')}
//               className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
//             >
//               <div className="bg-green-50 p-4 rounded-full mb-4">
//                 <img src={lsc1} alt="Learning School" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Learning School</h3>
//               <p className="text-gray-600 mt-2">
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.
//               </p>
//             </div>

//             {/* Second card */}
//             <div
//               onClick={() => openModal('Learning in the School', 'Lorem ipsum dolor sit amet a the a conse adipiscing.', 'https://via.placeholder.com/80')}
//               className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
//             >
//               <div className="bg-green-50 p-4 rounded-full mb-4">
//                 <img src={lsc2} alt="Learning in the School" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Learning in the School</h3>
//               <p className="text-gray-600 mt-2">
//                 Lorem ipsum dolor sit amet a the a conse adipiscing.
//               </p>
//             </div>

//             {/* Third card */}
//             <div
//               onClick={() => openModal('Stars Preschool', 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.', 'https://via.placeholder.com/80')}
//               className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
//             >
//               <div className="bg-green-50 p-4 rounded-full mb-4">
//                 <img src={lsc3} alt="Stars Preschool" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">Stars Preschool</h3>
//               <p className="text-gray-600 mt-2">
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Modal Component */}
//       <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
//     </section>
//   );
// };

// export default LatestService;

import React, { useState } from 'react';
import lsc2 from '../Assets/LSC2.jpeg';
import lsc3 from '../Assets/LSC3.jpeg';
import lsc1 from '../Assets/LSC1.jpeg';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-24">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-2xl">
          &times;
        </button>
        
        {/* Image positioned at the upper boundary */}
        <div className="flex justify-center mb-4">
          <img src={content.image} alt={content.title} className="w-20 h-20 object-contain" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.title}</h3>
        <p className="text-gray-600 mb-4">{content.description}</p>

        {/* "Read More" Arrow */}
        <a
          href="#"
          className="text-green-500 flex items-center gap-2 font-semibold hover:underline">
          Read More
          <span className="text-green-500">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

const LatestService = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', image: '' });

  const openModal = (title, description, image) => {
    setModalContent({ title, description, image });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="py-12 px-6 lg:px-32">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        
        {/* Left section: Text content */}
        <div className="lg:w-1/2">
          <h3 className="text-green-500 font-semibold text-lg mb-2">Latest Service</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Building a Strong Foundation<br/> for Success
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra,<br/> nostra mattis hendrerit proin mollis pretium facilisi in, ligula volutpat.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
            Read More &rarr;
          </a>
        </div>

        {/* Right section: Cards */}
        <div className="lg:w-1/2 bg-orange-100 p-6 rounded-lg relative">
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* First card */}
            <div
              onClick={() => openModal('Learning School', 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.', 'https://via.placeholder.com/80')}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <img src={lsc1} alt="Learning School" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Learning School</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.
              </p>
            </div>

            {/* Second card */}
            <div
              onClick={() => openModal('Learning in the School', 'Lorem ipsum dolor sit amet a the a conse adipiscing.', 'https://via.placeholder.com/80')}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <img src={lsc2} alt="Learning in the School" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Learning in the School</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet a the a conse adipiscing.
              </p>
            </div>

            {/* Third card */}
            <div
              onClick={() => openModal('Stars Preschool', 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.', 'https://via.placeholder.com/80')}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <img src={lsc3} alt="Stars Preschool" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Stars Preschool</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </section>
  );
};

export default LatestService;
