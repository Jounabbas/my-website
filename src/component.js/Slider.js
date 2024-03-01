import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';

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
  autoPlaySpeed={3000}   showDots={true}   infinite={true}>
      <div style={{margin:'10px'}}><img src="https://img.freepik.com/free-photo/rendering-abstract-futuristic-background-with-glowing-neon-blue-orange-lights_181624-19807.jpg" alt="" /></div>
      <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20200701/ourmid/pngtree-cool-texture-geometric-abstract-background-image_345876.jpg" alt="" />
      <img src="https://t3.ftcdn.net/jpg/04/99/43/10/360_F_499431037_xMK5TKegMQ24NynFAK6LNMXZo4wAS3qy.jpg" alt="" />
    </Carousel>
   </>
  );
};

export default Slider;
