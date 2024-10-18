// import React, { useEffect, useState } from 'react';
// import { Button } from '@mui/material'; // Assuming you're using Material UI for the button
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from "../firebaseConfig"; // Adjust the path as necessary

// const HeroSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile check using MUI breakpoints

//   // States for vision, mission, loading, and error handling
//   const [vision, setVision] = useState(null);
//   const [mission, setMission] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         console.log("Fetching about data...");
//         const docRef = doc(db, "sites", "www.ascentm.in");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           console.log("Document fetched successfully:", docSnap.data());

//           const siteData = docSnap.data().siteData;
//           console.log("Site Data fetched:", siteData); // Log the entire siteData

//           // Ensure that siteData and "About-Us" exist
//           if (siteData && siteData["About-Us"]) {
//             const aboutUsData = siteData["About-Us".trim()];
//             setVision(aboutUsData.vision); // Set the vision data
//             setMission(aboutUsData.mission); // Set the mission data
//             console.log("About data set:", aboutUsData); // Log the About-Us data
//           } else {
//             console.error("About-Us data not found in siteData");
//             setError("About-Us data not found.");
//           }
//         } else {
//           throw new Error("No such document!");
//         }
//       } catch (err) {
//         console.error("Detailed error fetching about data:", err);
//         setError(err.message || "Error fetching about data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Rendering Hero Section
//   return (
//     <div 
//       style={{ 
//         textAlign: 'center', 
//         padding: isMobile ? '20px 10px' : '50px 20px', // Smaller padding for mobile
//         backgroundColor: '#fdf4e3', 
//         position: 'relative' 
//       }}
//     >
//       {/* Static Image on the upper right side */}
//       <img 
//         src="https://media.istockphoto.com/id/1372481295/photo/photo-of-school-boy-wear-yellow-t-shirt-backpack-in-background-stock-photo.jpg?s=612x612&w=0&k=20&c=lRsVHozgtzpj9W6ZjEW2g2qTkh4iV4BLePFgvUt7kvE=" 
//         alt="Child with Books" 
//         style={{ 
//           position: 'absolute', 
//           top: '5%', 
//           right: isMobile ? '2%' : '5%', // Adjust for mobile
//           width: isMobile ? '100px' : '150px', // Smaller width for mobile
//           height: isMobile ? '100px' : '150px', 
//           borderRadius: '50%', 
//           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
//           transition: 'transform 0.3s',
//         }}
//         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//       />

//       {/* Static Image on the lower left side */}
//       <img 
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaqCi1T3heLoU5ZOtQ13EcjeLh4xcS8tboQ&s" 
//         alt="Child Flexing" 
//         style={{ 
//           position: 'absolute', 
//           bottom: '5%', 
//           left: isMobile ? '2%' : '5%', // Adjust for mobile
//           width: isMobile ? '100px' : '150px', 
//           height: isMobile ? '100px' : '150px', 
//           borderRadius: '50%', 
//           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
//           transition: 'transform 0.3s',
//         }}
//         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//       />
      
//       {/* Heading */}
//       <h1 
//         style={{ 
//           fontSize: isMobile ? '2rem' : '3rem', // Adjust font size for mobile
//           fontWeight: 'bold', 
//           position: 'relative', 
//           display: 'inline-block', 
//           color: 'transparent', 
//           WebkitTextStroke: '2px #333', 
//           margin: '20px 0'
//         }}
//       >
//         Exploring Minds<br /> 
//         Elementary School
//       </h1>

//       {/* Dynamic Vision and Mission Text */}
//       <p style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}> {/* Adjust font size for mobile */}
//         {mission} <br/> 
//         {vision}
//       </p>
      
//       {/* Button */}
//       <Button 
//         variant="contained" 
//         color="success" 
//         style={{ marginTop: '20px', fontSize: isMobile ? '0.8rem' : '1rem' }} // Smaller button text for mobile
//       >
//         Learn More
//       </Button>
//     </div>
//   );
// };

// export default HeroSection;







import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material'; // Assuming you're using Material UI for the button
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig"; // Adjust the path as necessary

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile check using MUI breakpoints

  // States for vision, mission, loading, and error handling
  const [vision, setVision] = useState(null);
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroImage, setHeroImage] = useState(null); // For the background image

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        console.log("Fetching about data...");
        const docRef = doc(db, "sites", "www.ascentm.in");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document fetched successfully:", docSnap.data());

          const siteData = docSnap.data().siteData;
          console.log("Site Data fetched:", siteData); // Log the entire siteData

          // Ensure that siteData and "About-Us" exist
          if (siteData && siteData["About-Us"]) {
            const aboutUsData = siteData["About-Us".trim()];
            setVision(aboutUsData.vision); // Set the vision data
            setMission(aboutUsData.mission); // Set the mission data
            console.log("About data set:", aboutUsData); // Log the About-Us data
          } else {
            console.error("About-Us data not found in siteData");
            setError("About-Us data not found.");
          }

          // Set the hero image from Home section
          if (siteData && siteData["Home"]) {
            setHeroImage(siteData["Home"].hero.heroImage); // Set the hero image background
          }
        } else {
          throw new Error("No such document!");
        }
      } catch (err) {
        console.error("Detailed error fetching about data:", err);
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

  // Rendering Hero Section with background image
  return (
    <div 
      style={{ 
        textAlign: 'center', 
        padding: isMobile ? '20px 10px' : '50px 20px', 
        backgroundColor: '#fdf4e3', 
        position: 'relative', 
        backgroundImage: `url(${heroImage})`, // Set hero image as background
        backgroundSize: 'cover', // Cover the whole section
        backgroundPosition: 'center', // Center the background image
        minHeight: '500px' // Set a minimum height
      }}
    >
      {/* Static Image on the upper right side */}
      {/* <img 
        src="https://media.istockphoto.com/id/1372481295/photo/photo-of-school-boy-wear-yellow-t-shirt-backpack-in-background-stock-photo.jpg?s=612x612&w=0&k=20&c=lRsVHozgtzpj9W6ZjEW2g2qTkh4iV4BLePFgvUt7kvE=" 
        alt="Child with Books" 
        style={{ 
          position: 'absolute', 
          top: '5%', 
          right: isMobile ? '2%' : '5%', 
          width: isMobile ? '100px' : '150px', 
          height: isMobile ? '100px' : '150px', 
          borderRadius: '50%', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
          transition: 'transform 0.3s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      /> */}

      {/* Static Image on the lower left side */}
      {/* <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaqCi1T3heLoU5ZOtQ13EcjeLh4xcS8tboQ&s" 
        alt="Child Flexing" 
        style={{ 
          position: 'absolute', 
          bottom: '5%', 
          left: isMobile ? '2%' : '5%', 
          width: isMobile ? '100px' : '150px', 
          height: isMobile ? '100px' : '150px', 
          borderRadius: '50%', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
          transition: 'transform 0.3s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      /> */}
      
      {/* Heading */}
      <h1 
  style={{ 
    fontSize: isMobile ? '2rem' : '3rem', 
    fontWeight: 'bold', 
    position: 'relative', 
    display: 'inline-block', 
    color: '#333', // This defines the color for the stroke
    WebkitTextStroke: '2px #333', // Stroke with dark gray or black color
    WebkitTextFillColor: 'white', // Fill the text with white color
    margin: '20px 0'
  }}
      >
        Exploring Minds<br /> 
        Elementary School
      </h1>

      {/* Dynamic Vision and Mission Text */}
      <p style={{ fontSize: isMobile ? '0.9rem' : '1rem' ,WebkitTextFillColor: 'white'}}>
        {mission} <br/> 
        {vision}
      </p>
      
      {/* Button */}
      <Button 
        variant="contained" 
        color="success" 
        style={{ marginTop: '20px', fontSize: isMobile ? '0.8rem' : '1rem' }}
      >
        Learn More
      </Button>
    </div>
  );
};

export default HeroSection;
