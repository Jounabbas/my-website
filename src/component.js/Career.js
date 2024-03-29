import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import pic1 from "./career/pic1.png"
const Career = () => {
    const navigate=useNavigate()
  return (
    <>
      <div className="car_sec1">
        <img data-aos="zoom-in-left" src={pic1} alt="" />
      </div>

      
      <div className="row mt-3 mx-3">
        <div className="col-md-3"id='col' data-aos="slide-right">
            <h2 >CG Artist</h2>
            <p>Location: JAMAN SHAH</p>
        </div>
        <div className="col-md-6" style={{textAlign:"justify"}} data-aos="slide-up">
            <p onClick={()=>navigate("/jobs")}><Link  href="" style={{textDecoration:"none",color:"black"}}>Game District is an emerging Mobile Games Leader with 500+ Million Games Downloads and trusted by the Biggest companies like NFL, Hobbits, LEGO, and Outfit7. We are looking for a talented CG Artist to join our design team.</Link></p>
        </div>
        <div className="col-md-3"id='col2' data-aos="slide-left" >
            <button data-aos="slide-up" onClick={()=>navigate("/jobs")}>VIEW DETAIL</button>
        </div>
      </div><hr/> 

      <div className="row mt-3 mx-3">
        <div className="col-md-3"id='col'data-aos="slide-right" >
            <h2 >Unity Game </h2>
            <p>Location: JAMAN SHAH</p>
        </div>
        <div className="col-md-6"style={{textAlign:"justify"}}  data-aos="slide-down">
            <p onClick={()=>navigate("/jobs")}><Link href="" style={{textDecoration:"none",color:"black"}}>Game District is an emerging Mobile Games Leader with 500+ Million Games Downloads and trusted by the Biggest companies like NFL, Hobbits, LEGO, and Outfit7. We are looking for a talented CG Artist to join our design team.</Link></p>
        </div>
        <div className="col-md-3"id='col2' data-aos="slide-left">
            <button data-aos="slide-up" onClick={()=>navigate("/jobs")}>VIEW DETAIL</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Career
