import React, { useState, useEffect } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

import CallToAction from "../shared/CallToAction";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("top");

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  const controlNavbar = () => {
    if (window.scrollY > 500) {
      setShow("show");
    } else {
      setShow("top");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <nav className={`top-navigation-bar ${show} `}>
      <div className="content-wrapper">
        <div className="app-logo">
          <h4>Ankita <span>Singh</span></h4>
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
            onClick={() => menuItemClickHandler("home")}
          >
            Home
          </span>
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
            title="Resume"
            icon={<IoMdDownload />}
            download ="true"
            action={() => {
              window.open("/Ankita-Singh-Resume.pdf")
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
