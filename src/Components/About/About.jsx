
import React from 'react';
import Abt from './Abt';
import AboutSection from './AboutSec1';
import PricingPlans from './PricePlans';
import Testimonial from '../Home/Testimonial';
import StayConnected from '../StayCoonected';

// import Navbar from './Navbar';



const About = () => {
  return (
    <div className='pt-28'>
     {/* <Navbar/> */}
     <Abt/>
     <AboutSection/>
     <PricingPlans/>
     <Testimonial/>
     <StayConnected/>
     
    </div>
  );
}

export default About;
