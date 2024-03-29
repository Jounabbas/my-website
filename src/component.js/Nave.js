import React, { useState } from 'react'
import './Nave.css'
import { Link, NavLink } from 'react-router-dom';
import logo from "../component.js/JS.jpeg"
const Nave = () => {
  const [men,setmen]=useState(true);
  const setmenu=()=>{
    setmen (!men)
    console.log(men)
  }
  return ( 
    <>
    <div className='header'>
      <nav>
            <div className='logo' >
                <img src={logo}/>
            </div>
            <div className='burger' onClick={setmenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <ul className={men?"menu":""}> 
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/about'>ABOUT</NavLink></li> 
                    <li><NavLink to='/solution'>SOLUTION</NavLink></li>                                        
                    <li><NavLink to='/publishing'>PUBLISH</NavLink></li>
                    <li><NavLink to='/games'>WHY GAMES</NavLink></li>
                    <li><NavLink to='/team'>TEAM</NavLink></li>
                    <li><NavLink to='/career'>CAREER</NavLink></li>
                    <li><NavLink to='/contact'>CONTACT</NavLink></li>
                </ul>
            </div>
            <div className=' btnn'>
                <button className={men?"menu":""} >publishing</button>
            </div>
      </nav>
      </div>
    </>
  )
}

export default Nave
