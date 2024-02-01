import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { RiArrowRightUpFill } from "react-icons/ri";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">, I Am Ankita</span>
            </span>
            <span className="big-text">A Frontend Developer</span>
          </h1>
          <p className="title">
            Highly skilled and motivated Frontend developer specializing in building beautiful,
            functional and user-centric websites with HTML, CSS,
            React.js & JavaScript. Let's turn ideas into captivating digital experiences.
            {/* Experienced in creating user freindly interface websites. */}
            
          </p>
          <CallToAction
            text="Hire Me"
            icon={<RiArrowRightUpFill />}
            action={() => {
              scrollToSection("contact");
            }}
          />
        </div>
        <div className="right-col">
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
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
