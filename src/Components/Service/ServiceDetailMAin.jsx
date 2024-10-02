
import React from 'react';
import Abt from '../About/Abt';
import ServiceDetails1 from './ServiceDetails';
import ServiceDetails2 from './ServiceDetails2';
import StayConnected from '../StayCoonected';




const ServiceDetail = () => {
  return (
    <div className='pt-28'>
     
     <Abt/>
     
    <ServiceDetails1/>
    <ServiceDetails2/>
     <StayConnected/>
    </div>
  );
}

export default ServiceDetail;