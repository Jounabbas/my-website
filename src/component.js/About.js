import React from "react";
import Midlecontent from "./Midlecontent";
import Footer from "./Footer";
import pic1 from "./about picture/1.png"
import pic2 from "./about picture/2.png"
import pic3 from "./about picture/3.png"
import pic4 from "./about picture/4.png"
import pic5 from "./about picture/5.png"
import pic6 from "./about picture/6.png"
import pic7 from "./about picture/7.png"
import pic8 from "./about picture/8.png"
import pic9 from "./about picture/9.png"
import pic16 from "./about picture/16.png"
import pic17 from "./about picture/17.png"
import pic18 from "./about picture/18.png"
import pic19 from "./about picture/19.png"
import pic20 from "./about picture/20.png"
import pic21 from "./about picture/21.png"
import pic22 from "./about picture/22.png"
const About = () => {
  return (
    <>
      <div id="abu_sec1">
        <div className="abu_sec1_1" data-aos="fade-down">
          <h1>Welcome to the Gaming Revolution: Where Thrills Await You!</h1>
          <p>
          Enter a world of endless gaming thrills. Join us, play, conquer. Welcome to the gaming revolution!
          </p>
          <div className="row my-0">
            <div className="col-md-4">
              <h1>
                6 <span style={{ color: "yellow" }}>+</span>
              </h1>
              <p style={{ fontWeight: "bold" }}>Years since inception</p>
            </div>
            <div className="col-md-4">
              <h1>
                350 <span style={{ color: "yellow" }}>+</span>
              </h1>
              <p style={{ fontWeight: "bold" }}>Strong Team</p>
            </div>
            <div className="col-md-4">
              <h1>
                56K <span style={{ color: "yellow" }}>+</span>
              </h1>
              <p style={{ fontWeight: "bold" }}>Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="abu_sec2" data-aos="fade-up">
        <div className="abu_sec2_1">
          <h2>What Drives Us?</h2>
          <p>
          Game District welcomes vibrant, young minds eager to shape their strategies alongside the ever-evolving gaming landscape.
          </p>
        </div>
      </div>

      <div className="row mx-5" style={{ backgroundColor: "rgb(250,250,250)" }}>
        <div className="col-md-3 "  data-aos="fade-right">
          <img style={{width:"220px",height:"220px",marginLeft:"30px"}}
            src={pic1}
            alt=""
          />
        </div>
        <div className="col-md-3" data-aos="fade-left">
          <h1 style={{ fontWeight: "bold" }}>01</h1>
          <h3 style={{ fontWeight: "700" }}>Professionalism</h3>
          <p>
          Jabir Sons is in search of dynamic and youthful innovators, ready to mold their approaches amidst the evolving challenges of the digital industry.
          </p>
        </div>
        <div className="col-md-3 " data-aos="fade-right">
          <img 
          style={{width:"300px",height:"300px",margin:"-20px 0 0 30px"}}
            src={pic2}
            alt=""
          />
        </div>
        <div className="col-md-3" data-aos="fade-left">
          <h1 style={{ fontWeight: "bold" }}>02</h1>
          <h3 style={{ fontWeight: "700" }}>Love For Work</h3>
          <p>
          Jabir Sons eagerly invites the next generation of talent, urging young minds to shape their strategies in tandem with the ever-changing challenges of the digital industry.
          </p>
        </div>

        <div className="col-md-3 "  data-aos="fade-right">
          <h1 style={{ fontWeight: "bold", textAlign: "right" }}>03</h1>
          <h3 style={{ fontWeight: "700", textAlign: "right" }}>Enthusiasm</h3>
          <p>
          At the core of our mission, Jabir Sons seeks the ingenuity of young minds to shape their approaches amidst the dynamic challenges of the digital industry.
          </p>
        </div>
        <div className="col-md-3"  data-aos="fade-left">
          <img  style={{width:"220px",height:"220px"}}
            src={pic3}
            alt=""
          />
        </div>
        <div className="col-md-3 "  data-aos="fade-right">
          <h1 style={{ fontWeight: "bold", textAlign: "right" }}>04</h1>
          <h3 style={{ fontWeight: "700", textAlign: "right" }}>
          Exceeding Limits
          </h3>
          <p>
          Embracing innovation, Game Haven eagerly welcomes young minds to sculpt their strategies amid the evolving challenges of the digital frontier.
          </p>
        </div>
        <div className="col-md-3"  data-aos="fade-left">
          <img style={{width:"210px",height:"210px",marginLeft:"30px"}}
            src={pic4}
            alt=""
          />
        </div>
      </div>

      <div className="abu_sec4 "  data-aos="slide-up">
        <div className="abu_sec4_1">
          <img
          
            src={pic5}
            alt=""
          />
          <p>
          At Jabir Sons, we yearn for the vigor of young minds, eager to shape their approaches amidst the dynamic challenges of the digital industry.
          irection.
          </p>
        </div>
      </div>

      <div id="about_sec5">
        <div id="about_sec5_1"  data-aos="fade-right">
          <h2>
            Ready to start your project
            <span style={{ color: "yellow" }}>?</span>
          </h2>
          <button  data-aos="slide-left">LETS START</button>
        </div>
      </div>

      <div className="container-fluid" id="abu_sec5">
        <div className="row">
          <div className="" id="abu_sec5_1"   data-aos="slide-down">
            <h2>Our Clients</h2>
            <p>
              Game District longs for fresh & young minds who can mould their
              approaches with the changing.
            </p>
          </div>
        </div>

        <div className="row" id="abu_sec5_2">
            <div className="col-md-3 img_col " >
              <img  data-aos="flip-right"  src={pic7} alt="" />
            </div>
            <div className="col-md-3  img_col" >
              <img  data-aos="flip-up"  src={pic22} alt="" />
              </div>
              <div className="col-md-3 img_col" >
                <img  data-aos="flip-down"  src={pic16} alt="" />
              </div>
              <div className="col-md-3 img_col" >
              <img  data-aos="flip-left"  src={pic17} alt="" />
              </div>

              <div className="col-md-3 img_col "  >
              <img data-aos="flip-left"  src={pic18} alt="" />
            </div>
            <div className="col-md-3  img_col" >
              <img data-aos="flip-up" src={pic19} alt="" />
              </div>
              <div className="col-md-3 img_col" >
                <img data-aos="flip-down" src={pic20} alt="" />
              </div>
              <div className="col-md-3 img_col" >
              <img data-aos="flip-left" src={pic21} alt="" />
              </div>
        </div>
      </div>
      <Midlecontent/>

      

      <Footer/>
    </>
  );
};

export default About;
