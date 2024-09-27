
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import Abt from './Abt';

import StayConnected from './StayCoonected';
import ServiceM from './ServiceM';


const Service = () => {
  return (
    <div>
     <Navbar/>
     <Abt/>
     <ServiceM/>
     <StayConnected/>
    
     <Footer/>
    </div>
  );
}

export default Service;