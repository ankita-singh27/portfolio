import React from "react";

import IntroContent from "./intro-content";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";

import "./style.scss";

const Intro = () => {
    return (
        <div className="Intro-section">
            <div
                className="vector-bg"
                id="parallax"
            ></div>
            <img
                src={cloud} alt="cloud"
                className="cloud"
            />
            <img
                src={cloudSoft} alt="cloud"
                className="cloud-soft"
            />
                <IntroContent />
           
        </div>
    );
};

export default Intro;
