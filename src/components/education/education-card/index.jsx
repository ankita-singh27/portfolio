import React from "react";
import certificate from "../../../download/Web_Development_Cerificate.pdf";
import "./style.scss";

const EducationCard = ({duration, title, description ,marks,icon}) => {
    return (
        <div className="education-card">
            
            <div className="content-section">
                {/* <div className="info-bar">
                    <p>{duration}</p>
                </div> */}

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="info-marks">
                <p>{marks}
                {icon && <span onClick={() => window.open(certificate)}> {icon} </span>}
                </p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
