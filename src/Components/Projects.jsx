import React from "react";
import { Button, Typography } from "@mui/material";
import project from "../data/projects.json"; // Ensure this is the correct path
import './project.css'

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <Typography variant="h3" gutterBottom color="gold" align="center">
          PROJECTS
        </Typography>
        <div className="row">
          {project.map((data) => (
            <div
              key={data.key}  // Using the "key" from the JSON
              className="my-4"
            >
              <div
                className="card bg-dark text-light"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img
                    src={`/assets/${data.imageSrc}`} // Image path from the JSON
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      href={data.demo}
                      target="_blank"
                      className="mx-3"
                    >
                      Demo
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      href={data.source}
                      target="_blank"
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
