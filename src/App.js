

import './App.css';

import { BrowserRouter as Main, Routes, Route,Link, Form } from 'react-router-dom';

import Home from './component.js/Home';
import Publishing from './component.js/Publishing';
import Career from './component.js/Career';
import Jobsdetail from './component.js/Jobsdetail';
import Applyform from './component.js/Applyform';
import Contact from './component.js/Contact';
import About from './component.js/About';
import Solution from './component.js/Solution';
import Games from './component.js/Games';
import Nave from './component.js/Nave'
import Team from './component.js/Team';


function App() {
                                                                
  return (
    <>
    <Main>
    <Nave/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/publishing' element={<Publishing/>}/>
      <Route exact path='/jobs' element={<Jobsdetail/>}/>
      <Route exact path='/career' element={<Career/>}/>
      <Route exact path='/form' element={<Applyform/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/solution' element={<Solution/>}/>
      <Route exact path='/games' element={<Games/>}/>
      <Route exact path="/team" element={<Team/>}/>
    </Routes>
    </Main>
    </>
  );
}

export default App;
