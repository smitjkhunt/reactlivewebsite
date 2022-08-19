import React from 'react';
import Common from './Common';

const About = () => {
    const web = 'https://source.unsplash.com/user/erondu/520x520/';
  return (
    <>
        <Common 
            name='Welcone to About page' 
            imgsrc={web} 
            visit='/contact' 
            btname='Contact Now' 
        />
    </>
  );
};

export default About;