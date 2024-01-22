import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import techIcon from "../../images/tech3.jpeg";
import Section from "../shared/section";
//import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const About = () => {
  return (
    <Section background="light" id="about" title="About" colorTitle="Me">
      <div className="about-content-wrapper">
        <div className="left-col">
          <img
            src={techIcon}
            alt="tech-icons"
          />
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
    </Section>
  );
};

export default About;
