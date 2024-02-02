import React from "react";

import { FaGithub, FaLinkedinIn, FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import Section from "../shared/section";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";
import { Reveal } from "../shared/Reveal";

const Footer = () => {
  return (
    <Section background="light" className="footer">
      <div className="footer-content-wrapper">
      <Reveal>
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
        </Reveal>

        {/* social icons */}
        <Reveal>
        <div className="social-icons">
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/ankita-singh27"
            tooltip="Github"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/ankita-singh-804079132/"
            tooltip="LinkedIn"
          />
          <SocialIcon
            color="#FF0000"
            icon={<CgMail />}
            link="mailto:rajputanki5@gmail.com"
            tooltip="Gmail"
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaPhoneSquareAlt />}
            link="tel:+91 8586080489"
            tooltip="Contact"
          />
          <SocialIcon
           color="#25D366"
           icon={<FaWhatsapp />}
           link="https://wa.me/8586080489"
           tooltip="WhatsApp"
           />
        </div>

        <div className="bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} All Rights Reserved. Ankita Singh
          </div>
        </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Footer;
