// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openMenu, setOpenMenu] = useState(null);

//   const handleClick = (event, menu) => {
//     setAnchorEl(event.currentTarget);
//     setOpenMenu(menu);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setOpenMenu(null);
//   };

//   const handleSelectChange = (event) => {
//     const selectedValue = event.target.value;
//     if (selectedValue) {
//       window.location.href = selectedValue; // Redirect to the selected value URL
//     }
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: '#ff4081' }}>
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//           <MenuIcon />
//         </IconButton>

//         <Box sx={{ flexGrow: 1 }} />

//         <Typography variant="h6" style={{ marginRight: '1rem' }}>
//           Ascent
//         </Typography>

//         {/* Home Dropdown */}
//         <select
//           className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
//           onChange={handleSelectChange}
//         >
//           <option value="">Home</option>
//           <option value="/home1">Home 1</option>
//           <option value="/home2">Home 2</option>
//         </select>

//         {/* About Us Dropdown */}
//         <select
//           className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
//           onChange={handleSelectChange}
//         >
//           <option value="">About Us</option>
//           <option value="/about-story">Our Story</option>
//           <option value="/about-team">Team</option>
//         </select>

//         {/* Services Dropdown */}
//         <select
//           className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
//           onChange={handleSelectChange}
//         >
//           <option value="">Services</option>
//           <option value="/service1">Service 1</option>
//           <option value="/service2">Service 2</option>
//         </select>

//         {/* Projects Dropdown */}
//         <select
//           className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
//           onChange={handleSelectChange}
//         >
//           <option value="">Projects</option>
//           <option value="/project1">Project 1</option>
//           <option value="/project2">Project 2</option>
//         </select>

//         {/* Blog Dropdown */}
//         <select
//           className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
//           onChange={handleSelectChange}
//         >
//           <option value="">Blog</option>
//           <option value="/blog1">Blog 1</option>
//           <option value="/blog2">Blog 2</option>
//         </select>

//         {/* Contact Dropdown */}
//         <select
//           className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
//           onChange={handleSelectChange}
//         >
//           <option value="">Contact</option>
//           <option value="/contact1">Contact 1</option>
//           <option value="/contact2">Contact 2</option>
//         </select>

//       </Toolbar>
//     </AppBar>
//   );
// }




























// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box, Grid } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// export default function Navbar() {
//   return (
//     <AppBar position="static" style={{ backgroundColor: '#ff4081' }}>
//       <Toolbar style={{ padding: '0.5rem 1rem' }}>
//         <Grid container justifyContent="space-between" alignItems="center">

//           {/* Center: Contact Details */}
//           <Grid item>
//             <Box display="flex" alignItems="center">
//               <PhoneIcon style={{ marginRight: '8px' }} />
//               <Typography variant="body2" style={{ marginRight: '16px' }}>
//                 +123 456 7890
//               </Typography>
//               <EmailIcon style={{ marginRight: '8px' }} />
//               <Typography variant="body2" style={{ marginRight: '16px' }}>
//                 info@example.com
//               </Typography>
//               <LocationOnIcon style={{ marginRight: '8px' }} />
//               <Typography variant="body2">
//                 123 Main St, City, Country
//               </Typography>
//             </Box>
//           </Grid>

//           {/* Right side: Logo and "Ascent" Text */}
//           <Grid item>
//             <Box display="flex" alignItems="center" style={{ marginLeft: '0' }}>
//               <img src="/path-to-your-logo.png" alt="Ascent Logo" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
//               <Typography 
//                 variant="h6"  
//                 style={{ 
//                   background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', 
//                   WebkitBackgroundClip: 'text', 
//                   WebkitTextFillColor: 'transparent' 
//                 }}
//               >
//                 Ascent
//               </Typography>
//             </Box>
//           </Grid>

//           {/* Right side: Social Media Icons, Search Button, and Menu Icon */}
//           <Grid item>
//             <Box display="flex" alignItems="center">
//               <IconButton color="inherit">
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <LinkedInIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <img src="/path-to-your-fox-symbol.png" alt="Fox Symbol" style={{ width: '24px', height: '24px' }} />
//               </IconButton>

//               {/* Search Button */}
//               <IconButton aria-label="search" sx={{ ml: 2 }}>
//                 <SearchIcon style={{ color: '#000000' }} />
//               </IconButton>

//               {/* Menu Icon */}
//               <IconButton edge="end" aria-label="menu">
//                 <MenuIcon style={{ color: '#000000' }} />
//               </IconButton>
//             </Box>
//           </Grid>

//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// }


































import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue; // Redirect to the selected value URL
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#ff4081' }}>
      <Toolbar style={{ backgroundColor: '#fff', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Left Side: Social Media and Contact Information */}
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit">
            <img src="/path-to-your-fox-symbol.png" alt="Fox Symbol" style={{ width: '24px', height: '24px' }} />
          </IconButton>

          <Box display="flex" alignItems="center" ml={2}>
            <PhoneIcon style={{ marginRight: '8px' }} />
            <Typography variant="body2" style={{ marginRight: '16px' }}>
              +123 456 7890
            </Typography>
            <EmailIcon style={{ marginRight: '8px' }} />
            <Typography variant="body2" style={{ marginRight: '16px' }}>
              info@example.com
            </Typography>
            <LocationOnIcon style={{ marginRight: '8px' }} />
            <Typography variant="body2">
              123 Main St, City, Country
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Navigation Dropdowns and Buttons */}
        <Box display="flex" alignItems="center">
          <select
            className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
            onChange={handleSelectChange}
          >
            <option value="">Home</option>
            <option value="/home1">Home 1</option>
            <option value="/home2">Home 2</option>
          </select>

          <select
            className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
            onChange={handleSelectChange}
          >
            <option value="">About Us</option>
            <option value="/about-story">Our Story</option>
            <option value="/about-team">Team</option>
          </select>

          <select
            className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
            onChange={handleSelectChange}
          >
            <option value="">Services</option>
            <option value="/service1">Service 1</option>
            <option value="/service2">Service 2</option>
          </select>

          <select
            className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
            onChange={handleSelectChange}
          >
            <option value="">Projects</option>
            <option value="/project1">Project 1</option>
            <option value="/project2">Project 2</option>
          </select>

          <select
            className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
            onChange={handleSelectChange}
          >
            <option value="">Blog</option>
            <option value="/blog1">Blog 1</option>
            <option value="/blog2">Blog 2</option>
          </select>

          <select
            className="text-black text-center py-2 px-2 rounded transition-colors duration-200 ml-2 hover:bg-gray-200"
            onChange={handleSelectChange}
          >
            <option value="">Contact</option>
            <option value="/contact1">Contact 1</option>
            <option value="/contact2">Contact 2</option>
          </select>

          {/* Menu Icon */}
          <IconButton edge="end" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Search Icon */}
          <IconButton color="inherit" aria-label="search" sx={{ ml: 2 }}>
            <SearchIcon />
          </IconButton>

          {/* Get Quote Button */}
          <button
            className="text-black text-center py-2 px-4 rounded bg-pink-500 hover:bg-pink-600 transition-colors duration-200 ml-4"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Get Quote <ArrowForwardIcon style={{ marginLeft: '4px' }} />
          </button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
