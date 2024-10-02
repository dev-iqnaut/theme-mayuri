
import React from 'react';
import Abt from './Abt';
import AboutSection from './AboutSec1';
import PricingPlans from './PricePlans';
import Testimonial from '../Home/Testimonial';
import StayConnected from '../StayCoonected';
import Footer from '../Footer';
// import Navbar from './Navbar';



const About = () => {
  return (
    <div>
     {/* <Navbar/> */}
     <Abt/>
     <AboutSection/>
     <PricingPlans/>
     <Testimonial/>
     <StayConnected/>
     <Footer/>
    </div>
  );
}

export default About;
