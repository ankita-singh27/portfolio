import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { RiArrowRightUpFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";
import { Reveal } from "../../shared/Reveal";

const IntroContent = () => {
  return (
    <Reveal>
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
          <Reveal delay={1.0}>
            <span className="small-text">
              <span className="text">Hi</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">, I'm Ankita Singh</span>
            </span>
            <div className="big-text">
            <span> A </span>
             <Typewriter
                options={{
                  strings:[ 'Frontend Developer','Programmer', 'Web Developer'],
                  autoStart: true,
                  delay: 200,
                  pauseFor: 500,
                  loop: true,
                }}
              />
              
            </div>
            </Reveal>
          </h1>
          <Reveal delay={1.3}>
          <p className="title">
            Highly skilled and motivated Frontend developer specializing in
            building beautiful, functional and user-centric websites with HTML,
            CSS, React.js & JavaScript. Let's turn ideas into captivating
            digital experiences.
            {/* Experienced in creating user freindly interface websites. */}
          </p>
          <CallToAction
            text="Hire Me"
            icon={<RiArrowRightUpFill />}
            action={() => {
              scrollToSection("contact");
            }}
          />
          </Reveal>
        </div>
        <div className="right-col">
        <Reveal delay={1.6}>
          <img src={girl} alt="user" />

          <div className="highlights horizontal">
            <div className="icon">
              <FaGithub />
            </div>
            <div className="text">
              <span>10+</span> Projects
            </div>
          </div>

          <div className="highlights verticle">
            <div className="icon">
              <FaLink />
            </div>
            <div className="text">Web Developer Cerificate</div>
          </div>
        </Reveal>
        </div>

      </div>
    </div>
    </Reveal>
  );
};

export default IntroContent;
