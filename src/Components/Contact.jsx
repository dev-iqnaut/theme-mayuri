
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Abt from './Abt';

import StayConnected from './StayCoonected';
import ContactSection from './Contact1';
import ContactSection2 from './Contact2';


const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Abt/>
     <ContactSection/>
     <ContactSection2/>
     <StayConnected/>
    
     <Footer/>
    </div>
  );
}

export default Contact;