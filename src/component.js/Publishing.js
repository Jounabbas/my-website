import React from 'react';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import pub_pic1 from "./publishing/1.png"
import pub_pic2 from "./publishing/2.png"
import pub_pic3 from "./publishing/3.png"
import pub_pic4 from "./publishing/4.png"
import pub_pic5 from "./publishing/5.png"
import pub_pic6 from "./publishing/6.png"
import pub_pic7 from "./publishing/7.png"
import pub_pic8 from "./publishing/8.png"
import pub_pic9 from "./publishing/9.png"
import pub_pic10 from "./publishing/10.png"
import pub_pic11 from "./publishing/11.png"
import pub_pic12 from "./publishing/12.png"
import pub_pic13 from "./publishing/13.png"

const Publishing = () => {
  const navigate=useNavigate();
  return (
    <>
        <div className='pub_sec1'>
          <div className='pub_sec1_1' data-aos="slide-right">
            <h1>Publishing Games From Dreams to Reality</h1>
            <p>   Jabir Sons has established a rich history of collaborative efforts with independent ventures,
           gaming teams, and companies over the past few months. We recognize the importance of tailoring an
           exclusive strategy for each new project that lands on our table. Our success lies in comprehending 
           the unique dynamics of each individual venture and crafting a specialized publishing strategy to meet
           its distinct needs. This approach has not only garnered the trust of numerous professionals and businessmen 
           but has also positioned Jabir Sons as a trusted and reliable partner in the gaming industry.</p>
            <Link to="https://inquiry.forms.app/gdpublishing/publish-your-game" target='_blank' > <button>PUBLISHING</button></Link>
          </div>
          <div className="pub_sec1_2">
           <img data-aos="flip-right" src={pub_pic4} alt="" />
          </div>
        </div>

        <div className="pub_sec2">
          <div className="pub_sec2_1" data-aos="slide-right">
            <img src={pub_pic8} alt="" />
          </div>
          <div className="pub_sec2_2" data-aos="slide-left">
            <h1>x</h1>
            <h2>Utilize our global platform for your amazing games.</h2>
            <p>
                Jabir Sons invites savvy ventures and projects to join our platform for publication.
                Benefit from our reputable platform to propel your venture toward success and achieve
                optimal results. Partner with us for a publishing experience that ensures credibility,
                expertise, and the realization of your vision.
            </p>
            <img src="https://www.gamedistrict.co/assets/img/ring.png" alt="" />
          </div>
        </div>

        <div className="pub_sec3" data-aos="slide-down">
          <h2>Publishing Games <br/>From Dreams to Reality</h2>
          <p>Turning dreams into reality, our passion for publishing games transforms creative 
                    visions into immersive experiences for global audiences. </p>
        </div>

        
        <div className="pub_sec4">
          <div className="pub_sec4_1">
            <img data-aos="flip-right" src={pub_pic1} alt="" />
          </div>
          <div className="pub_sec4_2" data-aos="slide-left">
            <h1>Global existence.</h1>
            <p>Amplifying your global presence through strategic SMM, we navigate diverse platforms with
              precision, ensuring your brand stays current and reaches a worldwide audience. By discerning
              market nuances, we enhance brand loyalty, fostering a global reputation that resonates with success.</p>
          </div>
        </div>

        <div className="pub_sec5">
          <div className="pub_sec5_1" data-aos="slide-right">
            <h1>Become market leader.</h1>
            <p>  Crafting an extraordinary game is challenging, but marketing it can be even tougher.
               With an audience exceeding 1,000,000 players to date, our team ensures your game reaches
               the right eyes. Leveraging cross-promotional strategies, we engage over 50 million monthly 
               active users, encouraging them to discover and download your game.
            </p>
          </div>
          <div className="pub_sec5_2">
            <img data-aos="flip-right" src={pub_pic2} alt="" />
          </div>
        </div>

        <div className="pub_sec4">
          <div className="pub_sec4_1">
            <img data-aos="flip-right" src={pub_pic3} alt="" />
          </div>
          <div className="pub_sec4_2" data-aos="slide-left">
            <h1> Develop desirability.</h1>
            <p>Harnessing our passion for development hacking and client acquisition, our teams are dedicated 
               to identifying the optimal audience and the perfect market entry timing for your project. With
               seasoned executives and QA leads, we provide expert guidance on surpassing player expectations
               and achieving unparalleled game quality.</p>
          </div>
        </div>

        <div className="pub_sec5">
          <div className="pub_sec5_1" data-aos="slide-right">
            <h1>It’s your venture!</h1>
            <p>
               Harnessing our passion for development hacking and client acquisition, our teams are dedicated 
               to identifying the optimal audience and the perfect market entry timing for your project. With
               seasoned executives and QA leads, we provide expert guidance on surpassing player expectations
               and achieving unparalleled game quality.</p>
          </div>
          <div className="pub_sec5_2">
            <img data-aos="flip-right" src={pub_pic1} alt="" />
          </div>
        </div>

        <div className="pub_sec6">
          <h1 data-aos="slide-doen">What are we looking for?</h1>
          <div className="pub_sec6_1" data-aos="slide-right">
            <img src={pub_pic5} alt="" />
            <h4>Innovation</h4>
            <p>A great idea in this time & age must include some level of innovation & creativity, with the room of improvement. A promising idea is easy to polish, sell & get returns from.</p>
          </div>
          <div className="pub_sec6_1" data-aos="slide-up">
            <img src={pub_pic6} alt="" />
            <h4>Stealth</h4>
            <p>Many of the times, an exemplary idea is not that easy to float in to the crowd. Going up from smaller markets to big ones or dividing it into beta & alpha versions is one way to go about it.</p>
          </div>
          <div className="pub_sec6_1" data-aos="slide-left">
            <img src={pub_pic7} alt="" />
            <h4>Readiness</h4>
            <p>Come to us prepared for the launch. Make necessary steps to take it to 90% and then we will easily take over it make it reach more than a 100%. Gutsy & bold steps give you exponential success.</p>
          </div>

        </div>
        <div className="pub_sec7">
        <div className="pub_sec7_1" data-aos="slide-right">
            <img src={pub_pic9} alt="" />
            <h4>Teamwork</h4>
            <p>A great piece of work is made by a great team working in sync together. Passion & talent put to hard work yield some unthinkable results beyond expectations.</p>
          </div>
          <div className="pub_sec7_2" data-aos="slide-left">
            <img src={pub_pic10} alt="" />
            <h4>Mobile</h4>
            <p>We are mainly focused on the mobile platforms & we prefer projects developed for iOS & Android. Hypercasual, shooting, sports, adventure & kids games are our top selling ideas.</p>
          </div>
          </div>

          <div className="pub_sec8">
            <h1 data-aos="slide-down">Submit your project to learn more</h1>
            <div id='ima' data-aos="zoom-in-right">
              <img src={pub_pic11} alt="" />
              <img src={pub_pic12} alt="" />
              <img src={pub_pic13} alt="" />
            </div>
            <button data-aos="slide-up">PUBLISHING YOUR GAME</button>
          </div>
          <Footer/>
    </>
  )
}
export default Publishing
