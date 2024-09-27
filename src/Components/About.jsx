
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutSection1 from './AboutSec1';
import Abt from './Abt';
import PricingPlans from './PricePlans';
import Testimonial from './Testimonial';
import StayConnected from './StayCoonected';


const About = () => {
  return (
    <div>
     <Navbar/>
     <Abt/>
     <AboutSection1/>
     <PricingPlans/>
     <Testimonial/>
     <StayConnected/>
    
     <Footer/>
    </div>
  );
}

export default About;
