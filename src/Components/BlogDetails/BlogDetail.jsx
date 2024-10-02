
import React from 'react';
import Abt from '../About/Abt';
import BlogD1 from './BlogD1';
import StayConnected from '../StayCoonected';
import BlogD2 from './BlogD2';

// import BlogD3 from './BlogD3';


const BlogDetails= () => {
  return (
    <div className='pt-28'>
    
     <Abt/>
     <BlogD1/>
    <BlogD2/>
     {/* <BlogD3/> */}
     <StayConnected/>
    
    
    </div>
  );
}
export default BlogDetails;
