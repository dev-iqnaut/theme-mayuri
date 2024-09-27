
import React from 'react';
import Navbar from './Navbar';
import StatsSection from './StateSection';
import Footer from './Footer';
import EducationSection from './EducationSection';
import HeroSection from './HeroSection';
import FacultyCard from './Faculty';
import EducationalPrograms from './EducationProgram';

import FAQSection from './Faq1';


import BlogD1 from './BlogD1';
import ConnectedH from './ConnectedH';
import Testimonial from './Testimonial';
import LatestService from './LatestService';
import ServiceDetails2 from './ServiceDetails2';
import AboutSection from './AboutSec1';


// import Introduction from './introduction';
// import "./assets/Home.css";

const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <StatsSection/>
     <AboutSection/>
     <EducationalPrograms/>
     <LatestService/>
     <FAQSection/>
     <FacultyCard/>
     <EducationSection/>
     <Testimonial/>
     <ConnectedH/>
     <Footer/>



     
     
     
     
     
     
     <BlogD1/>
     
     <ServiceDetails2/>
     
    </div>
  );
}

export default Home;