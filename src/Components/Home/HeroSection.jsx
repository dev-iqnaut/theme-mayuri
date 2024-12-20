
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";

const HeroSection = () => {
  const [vision, setVision] = useState(null);
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroImage, setHeroImage] = useState(null);
  const [schoolName, setSchoolName] = useState('');

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;
          if (siteData && siteData["aboutUs"]) {
            const aboutUsData = siteData["aboutUs".trim()];
            setVision(aboutUsData.focus);
            setMission(aboutUsData.mission);
          } else {
            setError("About-Us data not found.");
          }
          if (siteData && siteData["home"]) {
            setHeroImage(siteData["home"].hero.heroImage);
            if (siteData["home"].schoolDetails) {
              setSchoolName(siteData["home"].schoolDetails.schoolName);
            }
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        setError(err.message || "Error fetching about data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div 
      className="relative flex items-center justify-center min-h-[600px] bg-cover bg-center text-center text-white" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 h-16 w-16 bg-pink-300 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-20 right-10 h-12 w-12 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 h-20 w-20 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl p-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Exploring Minds <br />
          <span className="text-pink-300">{schoolName || 'Elementary School'}</span>
        </h1>

        {/* Mission and Vision with Gradient and Border */}
        {/* <div className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 p-1 rounded-lg mb-4">
          <p className="text-lg md:text-xl font-light bg-black bg-opacity-80 text-gray-100 rounded-lg p-4 leading-relaxed">
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Our Mission:</span> {mission}
          </p>
        </div> */}
        
        {/* <div className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 p-1 rounded-lg mb-8">
          <p className="text-lg md:text-xl font-light bg-black bg-opacity-80 text-gray-100 rounded-lg p-4 leading-relaxed">
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Our Focus:</span> {vision}
          </p>
        </div> */}
        {vision}
        <br/>
        <br/>

        <Button
          variant="contained"
          color="success"
          className="bg-green-500 hover:bg-green-400 px-6 py-3 text-sm md:text-base font-semibold rounded-full shadow-xl transition-transform transform hover:scale-110"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
