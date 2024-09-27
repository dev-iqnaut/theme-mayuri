
import React from 'react';
import Navbar from './Navbar';
import StatsSection from './StateSection';
import Footer from './Footer';
import EducationSection from './EducationSection';
import HeroSection from './HeroSection';
import FacultyCard from './Faculty';
import EducationalPrograms from './EducationProgram';
import PricingPlans from './PricePlans';


// import Introduction from './introduction';
// import "./assets/Home.css";

const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FacultyCard/>
     <StatsSection/>
     <PricingPlans/>
     <EducationSection/>
     <EducationalPrograms/>
     <Footer/>
    </div>
  );
}

export default Home;