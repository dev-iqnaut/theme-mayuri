
import React from 'react';
import GalleryComponent from './Gallery';
import AcademicResources from './Academic_Res';
import Admissions from './Admission';
import AboutUsSection2 from '../About/try';
import Academics from './AcademicSec';
import CBSEComplianceSection from './CBSE';
import InfrastructureSection from './Infrastructure';
import FacultyStaffSection from './Faculty';
import NewsEventsSection from './Event';

// import Navbar from './Navbar';



const New = () => {
  return (
    <div className='pt-28'>
     {/* <Navbar/> */}
     
     <Academics/>
     <InfrastructureSection/>
     <FacultyStaffSection/>
     <CBSEComplianceSection/>
     <AboutUsSection2/>
     <GalleryComponent/>
     <AcademicResources/>
     <Admissions/>
     <NewsEventsSection/>
    </div>
  );
}

export default New;