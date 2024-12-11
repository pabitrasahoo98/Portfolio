import './App.css';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import About from './Components/About';
import Home from './Components/Home';
import webFont from "webfontloader";
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Element } from 'react-scroll'; // Import Element for sections

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);

  return (
    <>
      <Header />

      {/* Sections wrapped in Element to enable smooth scrolling */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Experience />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}

export default App;
