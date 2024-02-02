import React from "react";
import certificate from "../../../download/Web_Development_Cerificate.pdf";
import "./style.scss";
import { Reveal } from "../../shared/Reveal";

const EducationCard = ({ duration, title, description, marks, icon }) => {

  return (
      <div className="education-card">
        <div className="content-section">
          <Reveal delay={1.4}>
            {/* <div className="info-bar">
                    <p>{duration}</p>
                </div> */}

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="info-marks">
              <p>
                {marks}
                {icon && (
                  <span onClick={() => window.open(certificate)}> {icon} </span>
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
  );
};

export default EducationCard;
