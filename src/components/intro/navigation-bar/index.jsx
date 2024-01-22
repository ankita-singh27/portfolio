import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
      <h4>Ankita Singh</h4>
        {/* <img src={logo} alt="JS Dev" /> */}
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("about")}
        >
          About
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("projects")}
        >
          Projects
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("contact")}
        >
          Contact
        </span>
        <CallToAction
          text="Resume"
          icon={<IoMdDownload />}
          // id="resume"
          // action={() => {
          //   menuItemClickHandler("contact");
          // }}
        />
      </div>
    </div>
  );
};

export default Navigation;
