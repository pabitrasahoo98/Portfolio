import React, { useEffect, useRef } from 'react';
import './Home.css';
import pdf from '../Pdf/resume_PabitraKumarSahoo.pdf'; // Ensure the correct file path
import hero from '../images/hero.jpg'; // Ensure the correct image path
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null); // Reference for Typed.js container

  useEffect(() => {
    // Initialize Typed.js when the component is mounted
    const options = {
      strings: ["Full Stack Developer", "Mobile App Developer (ReactNative)", "DevOps Engineer"],
      typeSpeed: 50, // Speed of typing
      backSpeed: 50, // Speed of backspacing
      loop: true, // Loop the animation
      showCursor: true, // Enable the cursor
      cursorChar: '|', // Cursor character
      contentType: 'html', // Allows HTML in strings
    };

    // Create a new Typed instance
    const typed = new Typed(typedRef.current, options);

    // Clean up when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div className="home">
      <div className="left">
        <h1>Hi, I am Pabitra Kumar Sahoo</h1>
        <p className='para'>I am a </p>
        <div className="typed-text" ref={typedRef}></div> {/* Typed.js text will appear here */}
        <div>
          <p>
            I am a skilled and adaptive developer, driven by a passion for tech innovation. With hands-on experience in delivering 
            scalable, high-quality solutions, I approach challenges with a growth mindset and a commitment to impactful results.
          </p>
        </div>
        <a href={pdf} download="ResumePabitra_Sahoo.pdf" className="btn btn-outline-warning">
          Check Resume
        </a>
      </div>
      <div className="right">
        <div className="img">
          <img src={hero} alt="Pabitra Kumar Sahoo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
