import React from "react";

import "./style.scss";
import { Reveal } from "../Reveal";

const Section = ({ children, id, className, title,colorTitle, background }) => {
    return (
        <div
            id={id || ""}
            className={`section ${className ? className : ""} ${
                background === "dark" ? "dark" : "light"
            }`}
        >
            <div className="content">
                    <Reveal>
                    <div className="section-title">
                        <h2 className="section-title">{title} 
                        <span className="sub-title"> {colorTitle}</span>
                        </h2>
                    </div>
                    </Reveal>
            
                {children}
            </div>
        </div>
    );
};

export default Section;
