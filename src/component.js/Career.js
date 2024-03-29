import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import pic1 from "./career/pic1.png"
const Career = () => {
    const navigate=useNavigate()
  return (
    <>
      <div className="car_sec1">
        <img  src={pic1} alt="" />
      </div>

      
      <div className="car_sec2">
        <div className="car_sec2_1" >
            <h2 >CG Artist</h2>
            <p>Location: JAMAN SHAH</p>
        </div>
        <div className="car_sec2_2" style={{textAlign:"justify"}} >
            <p onClick={()=>navigate("/jobs")}><Link  href="" style={{textDecoration:"none",color:"black"}}>Game District is an emerging Mobile Games Leader with 500+ Million Games Downloads and trusted by the Biggest companies like NFL, Hobbits, LEGO, and Outfit7. We are looking for a talented CG Artist to join our design team.</Link></p>
        </div>
        <div className="car_sec2_3" >
            <button  onClick={()=>navigate("/jobs")}>VIEW DETAIL</button>
        </div>
      </div><hr/> 

      <div className="car_sec2">
        <div className="car_sec2_1" >
            <h2 >CG Artist</h2>
            <p>Location: JAMAN SHAH</p>
        </div>
        <div className="car_sec2_2" style={{textAlign:"justify"}} >
            <p onClick={()=>navigate("/jobs")}><Link  href="" style={{textDecoration:"none",color:"black"}}>Game District is an emerging Mobile Games Leader with 500+ Million Games Downloads and trusted by the Biggest companies like NFL, Hobbits, LEGO, and Outfit7. We are looking for a talented CG Artist to join our design team.</Link></p>
        </div>
        <div className="car_sec2_3" >
            <button  onClick={()=>navigate("/jobs")}>VIEW DETAIL</button>
        </div>
      </div><hr/> 
      <Footer/>
    </>
  )
}

export default Career
