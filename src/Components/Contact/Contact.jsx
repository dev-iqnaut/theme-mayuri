
import React from 'react';
import Abt from '../About/Abt';
import ContactSection from './Contact1';
import StayConnected from '../StayCoonected';
import ContactSection2 from './Contact2';



const Contact = () => {
  return (
    <div className='pt-28'>
    
     <Abt/>
     <ContactSection/>
    <ContactSection2/>
     
    <StayConnected/>
    </div>
  );
}

export default Contact;