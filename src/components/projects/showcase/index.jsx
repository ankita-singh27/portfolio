import React from "react";
import CallToAction from "../../shared/CallToAction";
import { FaLink, FaGithub } from "react-icons/fa";

import "./style.scss";
import { Reveal } from "../../shared/Reveal";

const Showcase = ({ data, transition }) => {
  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
          key={project.id}
        >
         <Reveal>
          <div className="image-section">
            <img src={project.media.thumbnail} alt={project.name} />
          </div>
          </Reveal>

          <div className="tech-stack">
          {project.techStack?.map((tech, index) => (
                    <div key={index} className='project-tech-stack'>{tech}</div>
                ))}
          </div>

          <div className='project-title'>{project.name}</div>
          <div className='project-description'>{project.description}</div>

            <div className="project-link">
            <CallToAction 
                text="View Code"
               icon={< FaGithub />}
                action={() => {
                    window.open(project.github)
            }}
            />
            <CallToAction 
                text="Live Link"
               icon={<FaLink />}
                action={() => {
                    window.open(project.webapp)
            }}
            />
            </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;

