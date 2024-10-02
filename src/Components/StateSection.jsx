import React from 'react';
import { Button } from '@mui/material'; // Ensure you have MUI installed for the Button component
import { AiOutlineUser, AiOutlineCheck, AiOutlineTeam, AiOutlineUnorderedList } from 'react-icons/ai'; // Importing icons

const StatsSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px 20px', backgroundColor: '#ffffff', }}>
      <div style={{ textAlign: 'left', flex: 1 }}>
      <span className="italic text-sky-500 p-8">NUMBER TALKS</span>

      <h2><strong>Invest in education, invest in the future</strong></h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, odio?</p>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Get a Quote
        </Button>
      </div>
      
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
          gap: '10px', // Smaller space between boxes
          flex: 1 ,
          
        }}>
        {/* Stats Boxes */}
        <div style={{ ...compactBoxStyle }}>
          <div style={flexRowStyle}>
            <div style={{ ...iconContainerStyle, backgroundColor: '#ffeb3b' }}>
              <AiOutlineUser style={iconStyle} />
            </div>
            <div>
              <h3 style={textStyle}><strong>20K</strong></h3>
              <p style={textStyle}>Running Students</p>
            </div>
          </div>
        </div>
        <div style={{ ...compactBoxStyle }}>
          <div style={flexRowStyle}>
            <div style={{ ...iconContainerStyle, backgroundColor: '#4caf50' }}>
              <AiOutlineCheck style={iconStyle} />
            </div>
            <div>
              <h3 style={textStyle}><strong>12K</strong></h3>
              <p style={textStyle}>Completed</p>
            </div>
          </div>
        </div>
        <div style={{ ...compactBoxStyle }}>
          <div style={flexRowStyle}>
            <div style={{ ...iconContainerStyle, backgroundColor: '#2196f3' }}>
              <AiOutlineTeam style={iconStyle} />
            </div>
            <div>
              <h3 style={textStyle}><strong>3K</strong></h3>
              <p style={textStyle}>Teachers</p>
            </div>
          </div>
        </div>
        <div style={{ ...compactBoxStyle }}>
          <div style={flexRowStyle}>
            <div style={{ ...iconContainerStyle, backgroundColor: '#f44336' }}>
              <AiOutlineUnorderedList style={iconStyle} />
            </div>
            <div>
              <h3 style={textStyle}><strong>23K</strong></h3>
              <p style={textStyle}>Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the compact stats boxes
const compactBoxStyle = {
  textAlign: 'left',
  padding: '15px', // Reduced padding
  border: '1px solid #ccc',
  borderRadius: '8px', // Slightly smaller border radius
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Lighter shadow for a compact look
  transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', // Smooth transition for hover effects
  cursor: 'pointer', // Change cursor to pointer on hover
  '&:hover': {
    transform: 'scale(1.05)', // Slightly scale up on hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Darker shadow on hover
    backgroundColor: '#f0f0f0', // Light background change on hover
  },
};

// Flex row style for aligning icon and text in one line
const flexRowStyle = {
  display: 'flex',
  alignItems: 'center', // Center the items vertically
};

// Icon container styles
const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px', // Adjust width
  height: '40px', // Adjust height
  borderRadius: '50%', // Round shape
  marginRight: '10px', // Margin to separate icon from text
};

// Icon styles
const iconStyle = {
  fontSize: '20px', // Adjust icon size
  color: '#fff', // White icon color
};

// Text styles
const textStyle = {
  fontSize: '1rem', // Smaller font size
  margin: '5px 0', // Reduced margin for text
};

export default StatsSection;
