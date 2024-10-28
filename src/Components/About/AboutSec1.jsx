


import React, { useEffect, useState } from 'react';
import About from '../Assets/About.jpeg';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import Ten from '../Assets/10th.jpg';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    mission: '',
    vision: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, 'sites', 'www.ascentm.in'); // Adjust to match your Firestore path
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData['aboutUs']) {
            setAboutData({
              mission: siteData['aboutUs'].mission || 'Mission data not available.',
              vision: siteData['aboutUs'].vision || 'Vision data not available.'
            });
          } else {
            setError('About-Us data not found.');
          }
        } else {
          setError('No such document!');
        }
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError('Error fetching about data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        
        {/* Left Section - Bigger Image with Client Badge */}
        <div className="relative col-span-1 lg:col-span-2">
          <img className="w-full rounded-xl shadow-xl" src={About} alt="Children in School" />
          <div className="absolute -bottom-6 left-6 bg-orange-400 text-white py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M7 20h10a4 4 0 00-4-4H7a4 4 0 00-4 4v2h5zM12 4a4 4 0 110 8 4 4 0 010-8z" />
            </svg>
            <p className="font-semibold">5,000+ Satisfied Clients</p>
          </div>
        </div>

        {/* Middle Section - Academy and Experience Stats */}
        <div className="flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left col-span-1">
          <div className="flex flex-col items-center justify-center bg-teal-50 w-40 h-40 rounded-lg shadow-lg p-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLT8XZcL4oJC9_R21dkyCacxtEIPbZrueDlQ&s" alt="Academy Icon" className="h-12 w-12 mb-2" />
            <h3 className="font-bold text-teal-600 text-lg">Academy</h3>
            <p className="text-sm text-gray-500">Learning Ladder</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 w-40 h-40 rounded-lg shadow-lg p-4">
            <img src={Ten} alt="Experience Icon" className="h-12 w-12 mb-2" />
            <h3 className="font-bold text-gray-700 text-lg">10+</h3>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </div>
        </div>

        {/* Right Section - Vision, Mission, and Text */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left col-span-1 lg:col-span-2">
          <h2 className="text-teal-500 font-semibold text-lg">About Us</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Unlocking Potential, One Child at a Time
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Our vision and mission define who we are. We aim to provide quality education that shapes the future.
          </p>

          {/* Display Vision and Mission from Firebase */}
          <div className="text-gray-600 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-2">Vision</h2>
            <p className="text-sm">{aboutData.vision}</p>
          </div>
          <div className="text-gray-600 bg-gray-100 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-2">Mission</h2>
            <p className="text-sm">{aboutData.mission}</p>
          </div>

          <button className="mt-6 w-full lg:w-40 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
