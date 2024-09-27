
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Abt from './Abt';

import StayConnected from './StayCoonected';
import BlogD1 from './BlogD1';

import BlogD2 from './BlogD2';
// import BlogD3 from './BlogD3';


const BlogDetails= () => {
  return (
    <div>
     <Navbar/>
     <Abt/>
     <BlogD1/>
     <BlogD2/>
     {/* <BlogD3/> */}
     <StayConnected/>
    
     <Footer/>
    </div>
  );
}
export default BlogDetails;
