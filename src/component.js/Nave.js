import React, { useState } from "react";
import "./Nave.css";
import { NavLink,Link } from "react-router-dom";
import logo from "./JS.jpeg"
const Nave = () => {
  const [display, setdisplay] = useState(false);
  const cli = () => {
    setdisplay(!display);
  };
  return (
    <>
<<<<<<< HEAD
      <div className="containers">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="hamburger" onClick={cli}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <ul>
              <li><NavLink to='/'>HOME</NavLink></li>
                      <li><NavLink to='/about'>ABOUT</NavLink></li> 
                      <li><NavLink to='/solution'>SOLUTION</NavLink></li>                                        
                      <li><NavLink to='/publishing'>PUBLISH</NavLink></li>
                      <li><NavLink to='/games'>WHY GAMES</NavLink></li>
                      <li><NavLink to='/career'>CAREER</NavLink></li>
                      <li><NavLink to='/contact'>CONTACT</NavLink></li>
              </ul> 
          </div>
          <button>Contact Us</button>
        </div>


        
      </div>

      <div
        className="nav2"
        style={
          display
            ? { display: "inline", transition: "display 1s ease" }
            : { display: "none", transition: "display 1s ease" }
        }
      >
        <div className="logo2" >
            <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
=======
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
>>>>>>> c8bffc255306a10e9ca174e58e041b9cdb5fa851
      </div>
    </>
  );
};

export default Nave;
