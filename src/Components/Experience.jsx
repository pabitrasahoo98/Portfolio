import React from "react";
import skills from "../data/skills.json";
import './experience.css'
import { Typography } from "@mui/material";

const Experience = () => {
  return (
    <>
      <div className="container skills" id="skills">
      <Typography variant="h3" gutterBottom color={"gold"}>SKILLS</Typography>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
