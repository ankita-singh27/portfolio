import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>
        <div className="span">Get In Touch </div>
        Feel free to reach out to me for any questions. Got a project ? Reach
        out and let's work together on something exciting.
      </h4>
      <div className="contact-option">
        <IoLocationSharp />
        <span className="text">Faridabad, Haryana</span>
      </div>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className="text">+91 8586080489 </span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className="text">rajputanki5@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
