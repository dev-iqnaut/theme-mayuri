
import React from 'react';
import BlogSection from './BlogSectionH';
import Testimonial from './Testimonial';
import EducationSection from './EducationSection';
import FacultyCard from './Faculty';
import AboutSection from '../About/AboutSec1';
import EducationalPrograms from './EducationProgram';
import PortfolioSection from './Profilesection';
import LatestService from './LatestService';
import FAQSection from '../FAQ/Faq1';
import HeroSection from './HeroSection';
import StatsSection from './Statsection';
import ConnectedH from '../ConnectedH';
// import Navbar from './Navbar';


// import Introduction from './introduction';
// import "./assets/Home.css";

const Home = () => {
  return (
    <div>
     {/* <Navbar/> */}
     {/* <HeroSection/>
     <StatsSection/> */}
     <HeroSection/>
     <StatsSection/>
     <AboutSection/>
    <EducationalPrograms/>
     <PortfolioSection/>
     <LatestService/>
   <FAQSection/>
     <FacultyCard/>
     <EducationSection/>
    <BlogSection/>
    <Testimonial/>
    <ConnectedH/>
     
    



     
     
     
     
    
     
    </div>
  );
}

export default Home;