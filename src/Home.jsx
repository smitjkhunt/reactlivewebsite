import React from 'react';
import Common from './Common';
const Home = () => {
    const web = 'https://source.unsplash.com/user/erondu/500x500/';
  return (
    <>
        <Common name='Grow your business with' 
            imgsrc={web} 
            visit='/service' 
            btname='Get Started' />
    </>
  )
}

export default Home