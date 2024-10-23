
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material'; // Material UI Button can still be used
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const HeroSection = () => {
  // States for vision, mission, loading, error, hero image, and school name
  const [vision, setVision] = useState(null);
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroImage, setHeroImage] = useState(null); // For the background image
  const [schoolName, setSchoolName] = useState(''); // For the school name

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const siteData = docSnap.data().siteData;

          // Ensure that siteData and "About-Us" exist
          if (siteData && siteData["About-Us"]) {
            const aboutUsData = siteData["About-Us".trim()];
            setVision(aboutUsData.vision); // Set the vision data
            setMission(aboutUsData.mission); // Set the mission data
          } else {
            setError("About-Us data not found.");
          }

          // Set the hero image and school name from Home section
          if (siteData && siteData["Home"]) {
            setHeroImage(siteData["Home"].hero.heroImage); // Set the hero image background
            
            if (siteData["Home"].schoolDetails) {
              setSchoolName(siteData["Home"].schoolDetails.schoolName); // Set the school name
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

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Rendering Hero Section with background image and dynamic school name
  return (
    <div 
      className={`text-center relative bg-cover bg-center min-h-[500px]`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Container with responsive padding */}
      <div className="px-6 py-20 md:px-10 lg:px-32"> 
        {/* Heading with dynamic school name */}
        <h1 
          className="text-3xl md:text-5xl font-bold relative inline-block text-white 
                     stroke-gray-800 stroke-2 mb-4"
        >
          Exploring Minds<br />
          {schoolName || 'Elementary School'}
        </h1>

        {/* Dynamic Vision and Mission Text */}
        <p className="text-white text-sm md:text-base">
          {mission} <br />
          {vision}
        </p>

        {/* Button */}
        <Button 
          variant="contained" 
          color="success" 
          className="mt-6 text-xs md:text-sm"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
