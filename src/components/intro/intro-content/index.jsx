import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Typewriter from "typewriter-effect";

import hand from "../../../images/hand.png";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";
import { Reveal } from "../../shared/Reveal";
import Section from "../../shared/section";


const IntroContent = () => {
  return (
    <Reveal>
    <Section id="home">
      <div className="home-content-wrapper">
        <div className="home">
          <h3> Hi
              <img src={hand} alt="" />
              ,<span> I'm </span>
            </h3>

            <h1> Ankita Singh </h1>
          
          <h2>
              <Typewriter
                options={{
                  strings: [
                    "A Web Developer",
                    "A Frontend Developer",
                    "A Programmer",
                    "A React JS Developer"
                  ],
                  autoStart: true,
                  delay: 300,
                  pauseFor: 500,
                  loop: true,
                }}
              />
          </h2>
          <Reveal delay={1}>
          <div className="intro">
          <p>
            Highly skilled and motivated Frontend developer specializing in
            building beautiful, functional and user-centric websites with HTML,
            CSS, React.js & JavaScript. Let's turn ideas into captivating digital
            experiences.
            {/* Experienced in creating user friendly interface websites.  */}
          </p>
          </div>
          </Reveal>

         <Reveal delay={1.4}>
          <div
            className="highlights"
            onClick={() => scrollToSection("contact")}
          >
            <div className="icon">
              <MdArrowOutward />
            </div>
            <div className="text">Hire Me</div>
          </div>
          </Reveal>

        </div>
      </div>
    </Section>
    </Reveal>
  );
};

export default IntroContent;
