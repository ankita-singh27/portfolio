import React from "react";
import "./style.scss";

const EducationCard = ({duration, title, description ,marks}) => {
    return (
        <div className="education-card">
            
            <div className="content-section">
                {/* <div className="info-bar">
                    <p>{duration}</p>
                </div> */}

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="info-marks">
                <p>{marks}</p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
