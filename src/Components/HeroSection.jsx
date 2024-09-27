import React from 'react';
import { Button } from '@mui/material'; // Assuming you're using Material UI for the button

const HeroSection = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#fdf4e3', position: 'relative' }}>
      {/* Image on the upper right side with a subtle hover effect */}
      <img 
        src="https://media.istockphoto.com/id/1372481295/photo/photo-of-school-boy-wear-yellow-t-shirt-backpack-in-background-stock-photo.jpg?s=612x612&w=0&k=20&c=lRsVHozgtzpj9W6ZjEW2g2qTkh4iV4BLePFgvUt7kvE=" 
        alt="Child with Books" 
        style={{ 
          position: 'absolute', 
          top: '5%', 
          right: '5%', 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
          transition: 'transform 0.3s', // Smooth transform transition
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      {/* Image on the lower left side with a subtle hover effect */}
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaqCi1T3heLoU5ZOtQ13EcjeLh4xcS8tboQ&s" 
        alt="Child Flexing" 
        style={{ 
          position: 'absolute', 
          bottom: '5%', 
          left: '5%', 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
          transition: 'transform 0.3s', // Smooth transform transition
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      
      <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          position: 'relative', 
          display: 'inline-block', 
          color: 'transparent', 
          WebkitTextStroke: '2px #333', // Stroke color and width
          margin: '20px 0'
        }}>
        Exploring Minds<br /> 
        Elementary School
      </h1>
      <p>Starting a corporate business typically involves several steps, <br/> such as developing a business plan.</p>
      <br/> 
      <Button variant="contained" color="success">Learn More</Button>
    </div>
  );
};

export default HeroSection;
