import React from "react";

import { FaGithub, FaLinkedinIn, FaPhoneSquareAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";

import Section from "../shared/section";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>

        {/* social icons */}
        <div className="social-icons">
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/ankita-singh27"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/ankita-singh-804079132/"
          />
          <SocialIcon
            color="#FF0000"
            icon={<CgMail />}
            link="mailto:rajputanki5@gmail.com"
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaPhoneSquareAlt />}
            link="tel:+91 8586080489"
          />
          <SocialIcon color="#f2740d" icon={<FiDownload />} />
        </div>

        <div className="bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} All Rights Reserved. Ankita Singh
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
