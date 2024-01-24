import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GrAchievement } from "react-icons/gr";
import { FaAward } from "react-icons/fa";

import CallToAction from "../shared/CallToAction";
import Section from "../shared/section";
import { JobsTicker } from "./job-ticker";
//import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const About = () => {
  return (
    <Section background="light" id="about" title="About" colorTitle="Me">
      <div className="about-content-wrapper">
        <div className="left-col">
          <div className="highlights">
          <h3>Achievements</h3>
          <div className="horizontal">
            <div className="icon">{<GrAchievement/>}</div>
            <div className="text">
            Created 3 Construct Week winning projects in college.</div>
          </div>
          </div>

          <div className="highlights">
          <h3>Certification</h3>
          <div className="horizontal">
            <div className="icon">{<FaAward/>}</div>
            <div className="text">
            Completed Full Stack Web Developer Course.</div>
          </div>
          </div>

        </div>

        <div className="right-col">
          <p>
            A dedicated frontend developer, I bring passion, lifelong learning,
            and expertise in website architecture, design, and web development.
            My focus is on crafting robust, functional, and user-centric
            websites having attention to detail and a problem solving mindset.
            Quality and solution driven, skilled in and having hands-on
            experience of working with HTML, CSS, JavaScript, React and
            Firebase. Highly resilient and focused on learning new techniques to
            build real world websites while facilitating the growth of self and
            that of the organization.
          </p>
          <CallToAction
            text="Download Resume"
            icon={<AiOutlineCloudDownload />}
            //action={() => window.open(Resume)}
          />
        </div>
      </div>

      <div className="job-ticker-section"> <JobsTicker/> </div>
      
    </Section>

    
  );
};

export default About;
