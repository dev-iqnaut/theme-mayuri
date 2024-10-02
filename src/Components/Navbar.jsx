

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Box, IconButton } from '@mui/material'; // Material UI imports
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Define the handleSelectChange function
const handleSelectChange = (event) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Redirect to selected page
  }
};

const Navbar = () => {
  return (
    <nav>
      {/* Upper Line with Pink Background */}
      <div className="bg-pink-500 p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section: Contact Info */}
          <div className="flex items-center space-x-4 text-white text-sm">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>(629) 555-0129</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>6391 Elgin St. Celina, 10299</span>
            </div>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with White Background */}
      <div className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Ascent Logo" className="w-8 h-8" />
            <span className="font-bold text-xl text-gray-700">Ascent</span>
          </div>

          {/* Navigation Links with Dropdowns */}
          <Box display="flex" alignItems="center">
            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">Home</option>
              <option value="/">Home</option>
             
            </select>

            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">About Us</option>
              <option value="/About">About</option>
             
            </select>

            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">Services</option>
              <option value="/Service">Service</option>
              <option value="/Service Details">Service Details</option>
            </select>

            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">FAQ</option>
              <option value="/FAQ">FAQ</option>
            </select>

            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">Blog</option>
              <option value="/Blogs">Blog</option>
              <option value="/BlogDetails">BlogDetails</option>
            </select>

            <select
              className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
              onChange={handleSelectChange}
            >
              <option value="">Contact</option>
              <option value="/Contact">Contact</option>
             
            </select>

            {/* Menu Icon */}
            <IconButton edge="end" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
              <MenuIcon />
            </IconButton>

            {/* Search Icon */}
            <IconButton color="inherit" aria-label="search" sx={{ ml: 2 }}>
              <SearchIcon />
            </IconButton>

            {/* Get a Quote Button */}
            <button
              className="text-black text-center py-2 px-4 rounded bg-pink-500 hover:bg-pink-600 transition-colors duration-200 ml-4"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Get Quote <ArrowForwardIcon style={{ marginLeft: '4px' }} />
            </button>
          </Box>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
