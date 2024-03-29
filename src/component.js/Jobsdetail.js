import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Jobsdetail = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="row m-4">
        <div className="col-4" id='job_sec1' >
          <h3 className='text'>CG Artist</h3>
          <li style={{listStyle:"none"}} className='my-3'>Position: <span  className="text">CG Artist</span></li><hr/>
          <li style={{listStyle:"none"}}>Location: <span className="text">JAMAN SHAH</span></li><hr/>
          <li style={{listStyle:"none"}}>Minimum Experience: <span className="text">2 to 3 Years</span></li><hr/>
          <li style={{listStyle:"none"}}>Job Type: <span className="text">FULL TIME</span> </li><hr/>
          <li style={{listStyle:"none"}}>Openings: <span className="text">4</span></li><hr/>
          <button onClick={()=>navigate("/career")} style={{width:'100%'}} className='btn mb-3'>SEE MORE JOBS</button>
        </div>
        <div className="col-8" id='job_sec2'>
          <h2>Company Description:</h2>
          <p className='mt-4'>Game District is an emerging Mobile Games Leader with 500+ Million Games Downloads and trusted by the Biggest companies like NFL, Hobbits, LEGO, and Outfit7. We believe in making outstanding & engaging games that take the market by storm. Specializing in Casual, Rpg, Mid core, and Hyper casual games.</p>
          <h2>Job Description:</h2>
          <p className='mt-4'>Game District is an emerging Mobile Games Leader with 500+ Million Games Downloads and trusted by the Biggest companies like NFL, Hobbits, LEGO, and Outfit7. We believe in making outstanding & engaging games that take the market by storm. Specializing in Casual, Rpg, Mid core, and Hyper casual games.</p>
          <li className='my-3'>Create high-quality artwork for a game, such as the texture, characters, environment</li>
          <li className='my-3'>Develop UI mockups and prototypes that clearly illustrate how Games function and look like</li>
          <li className='my-3'>Create original graphic designs (e.g. images, sketches, and tables)</li>
          <li className='my-3'>Identify and troubleshoot UX problems (e.g. responsiveness)</li>
          <li className='my-3'>Proficiency in UV and Texturing</li>
          <li className='my-3'>Capable of making game environments</li>
          <li className='my-3'>Work closely with game designers, artists, and developer to create UI/UX design for our large-scale video games</li>
          <h2>Software Requirements:</h2>
          <li className="my-3">Photoshop or Illustrator</li>
          <li className="my-3">3DS Max or Auto desk Maya (1 is Must)</li>
          <li className="my-3">Unity or Unreal Engine Must (1 is Must)</li>
          <li className="my-3">Arnold or V-Ray (1 is Must)</li>
          <li className="my-3">Blender is a plus point</li>
          <li className="my-3">Keyshot is a plus point</li>
          <li className="my-3">Marmoset toolbag is a plus point</li>
          <button className="btn2" onClick={()=>navigate("/form")}>APPLY NOW</button>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Jobsdetail
