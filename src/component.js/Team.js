import React from 'react'
import "./team.css"
import { FoodBankTwoTone } from '@mui/icons-material'
import Footer from './Footer'
import Carousel from 'react-multi-carousel';
const Team = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1224 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1224, min: 764 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 764, min: 300 },
          items: 1
        }
      };
  return (
    <>
    <div className='team_sec1'>
        <p>MEET THE TEAM</p>
        <h1>POWERED BY OUR PEOPLE</h1>
        <div className='team_sec1_1'>
            <div className='team_sec1_2'>
                <img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg'/>
                <h3>MALIK SHUJAT</h3>
                <p>head of house</p>
            </div>
            <div className='team_sec1_2'>
                <img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' />
                <h3>MALIK JABBAR</h3>
                <p>head of house</p>
            </div>
            <div className='team_sec1_2'>
                <img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' />
                <h3>MALIK WASEEM</h3>
                <p>head of house</p>
            </div>
        </div>

        <div className='team_sec1_1'>
            <div className='team_sec1_2'>
                <img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg'/>
                <h3>MALIK SHUJAT</h3>
                <p>head of house</p>
            </div>
            <div className='team_sec1_2'>
                <img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' />
                <h3>MALIK JABBAR</h3>
                <p>head of house</p>
            </div>
            <div className='team_sec1_2'>
                <img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' />
                <h3>MALIK WASEEM</h3>
                <p>head of house</p>
            </div>
        </div>
    </div>

    <div className='team_sec2'  >
    <Carousel  responsive={responsive} draggable={"true"}  ssr={"true"} infinite="true" autoPlay="true" autoPlaySpeed="3000">
        <div className='carousel'><img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' /></div>
        <div className='carousel'><img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' /></div>
        <div className='carousel'><img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' /></div>
        <div className='carousel'><img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' /></div>
        <div className='carousel'><img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' /></div>
        <div className='carousel'><img src='https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg' /></div>
    </Carousel>
    </div>
      <Footer/>
    </>
  )
}

export default Team
