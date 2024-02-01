import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GrAchievement } from "react-icons/gr";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import certificate from "../../download/Web_Development_Cerificate.pdf";

import CallToAction from "../shared/CallToAction";
import Section from "../shared/section";

import "./style.scss";
import { JobsTicker } from "./job-ticker";

const About = () => {
  return (
    <Section background="dark" id="about" title="About" colorTitle="Me">
      <div className="about-content-wrapper">
        <div className="left-col">
          <div className="highlights">
            <h3>Achievements</h3>
            <div className="horizontal">
              <div className="icon">{<GrAchievement />}</div>
              <div className="text">
                Completed <span>150+</span> Hours Coding And <span>10+</span>{" "}
                Projects.
              </div>
            </div>
          </div>

          <div className="highlights">
            <h3>Certification</h3>
            <div className="horizontal">
              <div className="icon">{<FaAward />}</div>
              <div className="text">
                Completed Full Stack Web Development Course.
                <span>
                  <FaExternalLinkAlt onClick={() => window.open(certificate)} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-col">
          <p>
            A dedicated frontend developer, I bring passion, lifelong learning,
            and expertise in website architecture, design, and web development.
            My focus is on crafting robust, functional, and user-centric
            websites having attention to detail and a problem solving mindset.
            Possesses strong technical expertise in front-end development,
            coupled with excellent problem-solving and communication skills.
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
      <JobsTicker />
    </Section>
  );
};

export default About;
