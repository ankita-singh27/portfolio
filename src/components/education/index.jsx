import React from "react";
import EducationCard from "./education-card";

import "./style.scss";
import Section from "../shared/section";

const Education = () => {
  return (
    <div>
      <Section background="dark" colorTitle="Education">
        <div className="education-content-wrapper">
          <EducationCard
            duration="May2023-Dec2023"
            title="Full Stack Web Development (MERN)"
            description="Odin School"
            marks="Certificate"
          />
          <EducationCard
            duration="2018-2020"
            title="Master Of Technology in Computer Science"
            description="Delhi Institute Of Technology Management & Research"
            marks="Grade: First Division"
          />
          <EducationCard
            duration="2013-2017"
            title="Bachelor Of Technology in Computer Science"
            description="Manav Rachna College Of Engineering"
            marks="Grade: First Division"
          />
        </div>
      </Section>
    </div>
  );
};

export default Education;
