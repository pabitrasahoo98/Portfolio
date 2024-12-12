import React from 'react';
import './about.css';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className="about">
      {/* About header outside of the card */}
      <Typography variant="h3" gutterBottom color="gold" className="about-header">
        ABOUT
      </Typography>
      
      <div className="about-left">
        <p>
          I am a passionate and adaptive developer with expertise in multiple
          technologies, including full-stack web development, mobile app
          development, and DevOps. With a deep interest in technology and
          innovation, I have worked on numerous projects ranging from large-scale
          enterprise applications to creative mobile solutions. I thrive in
          challenging environments, and my goal is always to create meaningful
          solutions that make an impact.
        </p>
        <p>
          I am continuously learning and evolving to stay at the forefront of the
          latest tech trends. Whether it's building robust back-end systems,
          creating intuitive front-end interfaces, or optimizing deployment
          pipelines, I bring a hands-on approach to everything I do.
        </p>

        <div className="education">
          <Typography variant="h5" gutterBottom>Education</Typography>
          <ul>
            <li>
              <strong>Integrated MCA</strong>
              <br />
              <em>Utkal University, 2021</em>
            </li>
            <li>
              <strong>Higher Secondary Schooling (12th)</strong>
              <br />
              <em>Maharishi College Of Natural Law, 2016</em>
            </li>
            <li>
              <strong>Secondary Schooling (10th)</strong>
              <br />
              <em>Vivekananda Shiksha Kendra, 2014</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
