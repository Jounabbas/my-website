import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import slider_pic from "./slider/Become your better self.png"
import slider_pic_1 from "./slider/Untitled design (1).png"
import slider_pic_2 from "./slider/Untitled design.png"

const Slider = () => { 

  const responsive = {
    desktop: {
     breakpoint: { max: 3000,min: 300},
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
  }
  return ( 
    <>
    <Carousel className='Carousel' autoPlay="true" responsive={responsive}
  autoPlaySpeed={3000}   showDots={true}   infinite={"true"}>
      <div style={{margin:'10px'}}><img src={ slider_pic} alt="" /></div>
      <img src={slider_pic_1} alt="" />
      <img src={slider_pic_2} alt="" />
    </Carousel>
   </>
  );
};

export default Slider;
