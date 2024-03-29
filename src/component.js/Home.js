
import React,{} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Slider from "./Slider";
 

const Home = () => {
    const navigate=useNavigate()
    //https://www.gamedistrict.co/assets/img/bullion.png
  return (
    <>
   <div  className="con">
      <div className="section1" >
       <Slider/>
      </div>
      
      <div className="slider" >
        <img data-aos="slide-right" src="data:image/jpeg;base64,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" alt="" />
        <img data-aos="slide-up" src="https://img.freepik.com/premium-vector/futuristic-game-pad-video-games-vector-joystick-with-neon-glow-game-console-abstract-geometric-symbols-computer-games-concept-your-design-eps-10_185386-811.jpg" alt="" />
        <img data-aos="slide-left" src="https://st.depositphotos.com/1013230/2210/i/450/depositphotos_22104925-Game-controller-and-blue-light.jpg" alt="" />
      </div>
      <div className="section2" data-aos="slide-right">
        <h1>We Empower Small StartupsTo Turn Into Big Enterprises.</h1>
        <p>
          Our app solutions mutiply your ROI, enhance brand visibilty, and
          delight your customers
        </p>
      </div>

      <div className="section3"  >
        <div id="sec3_1" data-aos="fade-up-right">
          <button onClick={()=>navigate("/publishing")}>PUBLISH WITH US</button>
        </div>
        <div className="sec3_2" data-aos="fade-down-left">
          <div className="sec3_2_1">
            <img
              src="https://www.gamedistrict.co/assets/img/icon-marketing.jpg"
              alt=""
            />
            <h1>Marketing Expertise </h1>
            <p>
              Turn a great idea into a product concept that is ready to start
              development
            </p>
          </div>
          <div className="sec3_2_1">
            <img
              src="https://www.gamedistrict.co/assets/img/icon-strategy.jpg"
              alt=""
            />
            <h1>Release Strategy</h1>
            <p>
            Features enough to satisfy early customers & provide feedback for future development.
            </p>
          </div>
          <div className="sec3_2_1">
            <img
              src="https://www.gamedistrict.co/assets/img/icon-management.jpg"
              alt=""
            />
            <h1>Community </h1>
            <p>
            Answer critical queries through research, design, prototyping, interviews & testing.
            </p>
          </div>
        </div>
      </div>
      
      <div className="sec4" data-aos="slide-up">
        <h1>Our Journey So Far</h1>
        <p>
          Since 2015, we have helped a number of start-ups and big brands
          convert their digital ideas into engaging, feature rich apps & games.
          Building trending mobile games with
        </p>
      </div>
       
      <div className="sec5" data-aos="zoom-out">
        <img src="https://i.pinimg.com/736x/8d/85/c4/8d85c4af3912d39f02923312f12f3832.jpg" alt="" />
        
      </div>

      <div className="sec6">
        <div className="sec6_1" data-aos="fade-up-right">
            <img src="https://www.gamedistrict.co/assets/img/icon-published-game.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" data-aos="fade-down">
            <img src="https://www.gamedistrict.co/assets/img/icon-strong-team.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" data-aos="fade-up">
            <img src="https://www.gamedistrict.co/assets/img/icon-projects-delivered.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" data-aos="zoom-in">
            <img src="https://www.gamedistrict.co/assets/img/icon-fortune.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" data-aos="fade-left">
            <img src="https://www.gamedistrict.co/assets/img/icon-raisad.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
      <button data-aos="slide-up">Learn More</button>
      </div>

      <div className="sec7">
        <div className="sec7_1" data-aos="slide-left"><img src="https://www.gamedistrict.co/assets/img/best-clan-left.jpg" alt="" /></div>
        <div className="sec7_2" data-aos="slide-up">
          <h1>It’s the best clan you can find online</h1>
          <p>Game District longs for fresh & young minds who can mould their approaches with the changing challenges of the digital industry. A growing mind is one of the cherished sights for us as it’s a proof of growth & success in the right direction.</p>
          <button onClick={()=>navigate("/about")}>ABOUT</button>
        </div>
        <div className="sec7_3" data-aos="slide-left">
          <img src="https://www.gamedistrict.co/assets/img/best-clan-right.jpg" alt="" />
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
