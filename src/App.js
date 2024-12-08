import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import About from './Components/About';
import Home from './Components/Home';
import webFont from "webfontloader";
import React from 'react';

function App() {
  React.useEffect(()=>{
    webFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  })
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
