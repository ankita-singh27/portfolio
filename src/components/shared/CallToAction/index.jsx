import React from "react";
import "./style.scss";
//import Resume from "../../../download/Ankita-Singh-Resume.pdf";

const CallToAction = ({ text, action, icon }) => {
    return (
        <div
            className="call-to-action"
            onClick={action}
        >
            <span className="text">{text}</span>
            {icon && <div className="icon">{icon}</div>}
        </div>
    );
};

export default CallToAction;
