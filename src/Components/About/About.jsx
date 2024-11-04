
import React from 'react';
import Abt from './Abt';
import AboutSection from './AboutSec1';
import PricingPlans from './PricePlans';
import Testimonial from '../Home/Testimonial';
import StayConnected from '../StayCoonected';

import ParentsCorner from './Parent';
// import AboutUsSection2 from './try';


// import Navbar from './Navbar';



const About = () => {
  return (
    <div className='pt-28'>
     {/* <Navbar/> */}
     <Abt/>
     
     {/* <AboutUsSection2/> */}
     <AboutSection/>
    
     <PricingPlans/>
     <Testimonial/>
     <ParentsCorner/>
     <StayConnected/>
     
    </div>
  );
}

export default About;
