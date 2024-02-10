import React from "react";
import "./style.scss";

const CallToAction = ({ text, action, icon,download,title }) => {
    return (
        <div
            className="call-to-action"
            onClick={action}
        >
        {download &&
        <span className="text">
        <a href="/Ankita-Singh-Resume.pdf" download >{title}</a>
        </span>
        }
            <span className="text">{text}</span>
            {icon && <div className="icon">{icon}</div>}
        </div>
    );
};

export default CallToAction;
