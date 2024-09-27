
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Abt from './Abt';

import StayConnected from './StayCoonected';
import BlogD1 from './BlogD1';
import Blog1 from './Blog1';


const Blog = () => {
  return (
    <div>
     <Navbar/>
     <Abt/>
     <BlogD1/>
     <Blog1/>
     <StayConnected/>
    
     <Footer/>
    </div>
  );
}

export default Blog;
