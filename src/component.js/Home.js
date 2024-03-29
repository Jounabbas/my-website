
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
      <div className="section1"  >
       <Slider/>
      </div>
      
      <div className="slider">
        <img  src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg" alt="" />
        <img  src="https://img.freepik.com/premium-vector/futuristic-game-pad-video-games-vector-joystick-with-neon-glow-game-console-abstract-geometric-symbols-computer-games-concept-your-design-eps-10_185386-811.jpg" alt="" />
        <img  src="https://st.depositphotos.com/1013230/2210/i/450/depositphotos_22104925-Game-controller-and-blue-light.jpg" alt="" />
      </div>
      <div className="section2" >
        <h1>We Empower Small StartupsTo Turn Into Big Enterprises.</h1>
        <p>
          Our app solutions mutiply your ROI, enhance brand visibilty, and
          delight your customers
        </p>
      </div>

      <div className="section3"  >
        <div id="sec3_1" >
          <button onClick={()=>navigate("/publishing")}>PUBLISH WITH US</button>
        </div>
        <div className="sec3_2" >
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
      
      <div className="sec4" >
        <h1>Our Journey So Far</h1>
        <p>
          Since 2015, we have helped a number of start-ups and big brands
          convert their digital ideas into engaging, feature rich apps & games.
          Building trending mobile games with
        </p>
      </div>
       
      <div className="sec5" >
        <img src="https://i.pinimg.com/736x/8d/85/c4/8d85c4af3912d39f02923312f12f3832.jpg" alt="" />
        
      </div>

      <div className="sec6"  data-aos="fade-right"  >
        <div className="sec6_1" >
            <img src="https://www.gamedistrict.co/assets/img/icon-published-game.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" >
            <img src="https://www.gamedistrict.co/assets/img/icon-strong-team.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" >
            <img src="https://www.gamedistrict.co/assets/img/icon-projects-delivered.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" >
            <img src="https://www.gamedistrict.co/assets/img/icon-fortune.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
        <div className="sec6_2" >
            <img src="https://www.gamedistrict.co/assets/img/icon-raisad.jpg" alt="" />
            <h1>345 <span style={{color:"yellow",fontWeight:"bolder"}}>+</span> </h1>
            <p>Published Games</p>
        </div>
      <button >Learn More</button>
      </div>

      <div className="sec7">
        <div className="sec7_1" ><img src="https://www.gamedistrict.co/assets/img/best-clan-left.jpg" alt="" /></div>
        <div className="sec7_2" >
          <h1>It’s the best clan you can find online</h1>
          <p>Game District longs for fresh & young minds who can mould their approaches with the changing challenges of the digital industry. A growing mind is one of the cherished sights for us as it’s a proof of growth & success in the right direction.</p>
          <button onClick={()=>navigate("/about")}>ABOUT</button>
        </div>
        <div className="sec7_3" >
          <img src="https://www.gamedistrict.co/assets/img/best-clan-right.jpg" alt="" />
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
