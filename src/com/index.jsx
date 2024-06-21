import React from 'react';
import Blog from "./Blog";
import Testimonial from './Client';

import GrowingJourney from './GrowingJourney';
import Hero from './Hero';
import Presence from "./Presence";
import Proud from './Proud';
import Above from './above';
import Servies from "./services";


const index = () => {
  return (
    <> 
   
    <Hero/>
    <Above />
    <Proud/>
    <Servies />
    
    <Testimonial/>
    <GrowingJourney/>
    <Blog />
    <Presence />
   

    </>
  )
}

export default index
