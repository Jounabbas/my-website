import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from "./icons/3.png"
import icon2 from "./icons/1.png"

function Footer() {
  return (
    <>
       
      <div className="sec8">
        <div className="sec8_1" >
          <img id="logo_8" src="https://www.gamedistrict.co/assets/images/footer_logo.png" alt="" />
          <p>Making you realize the power of Digital Intelligence.</p>
          <div className='inp'>
            <img style={{width:'80px',height:"80px" ,borderRadius:"40px",cursor:"pointer"}} src={icon1}/>
            <img style={{width:'50px',height:"50px" ,borderRadius:"25px",cursor:"pointer"}} src={icon2}/>
           
          </div>
          <input style={{marginLeft:"40px"}} type='text' placeholder='Enter here.'></input>
          <p>© Copyright Game District 2019,All Rights Reserved.</p>
        </div>

        <div className="sec8_2">
          <h3 >COMPANY</h3>
          <ul>
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="solution">SOLUTION</Link></li>
            <li><Link to="publishing">PUBLISHING</Link></li>
            <li><Link to="games">WHY GAMES</Link></li>
          </ul>
        </div>
        <div className="sec8_3" >
          <h3>GET ON BOARD</h3>
          <ul>
            <li><Link to="/career" >CAREER</Link></li>
            <li><Link to="/">TERMS AND CODITION</Link></li>
            <li><Link to="/">PRIVACY POLICY</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      <div className="sec8_4"  >
        <h3 >GET INTO TOUCH</h3>
          
         <Link target='_blank' to=""> <img src="https://www.gamedistrict.co/assets/images/icon_phone.jpg" alt="" /></Link>
           <p style={{color:"white" ,margin:"21px"}}><a>+92-315-3357-007</a></p>

           <Link target='_blank' to="hr.jabirsons@gmail.com">  <img style={{marginTop:"5px"}} src="https://www.gamedistrict.co/assets/images/icon_email.jpg" alt="" /></Link>
           <p style={{color:"white" ,margin:"21px"}}><a>hr.jabirsons@gmail.com</a></p>
         
           <Link target='_blank' to="https://www.facebook.com/jabirsons">  <img style={{marginTop:"5px"}} src="https://www.gamedistrict.co/assets/images/icon_facebook.jpg" alt="" />
           <p style={{color:"white" ,margin:"21px"}}><a>Facebook</a></p></Link>
         
           <Link target='_blank' to="https://www.instagram.com/jabir3sons/">  <img style={{marginTop:"5px"}} src="https://www.gamedistrict.co/assets/images/icon_instagram.jpg" alt="" />
           <p style={{color:"white" ,margin:"21px"}}><a>Instagram</a></p></Link>

          <Link target='_blank' to="https://www.linkedin.com/company/jabirsons/"><img style={{marginTop:"5px"}} src="https://www.gamedistrict.co/assets/images/icon_linkedin.jpg" alt="" />
           <p style={{color:"white" ,margin:"21px"}}><a>LinkedIn</a></p></Link> 
          
      </div>

      </div>
    </>
  )
}

export default Footer
