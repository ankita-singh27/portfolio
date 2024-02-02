import React from "react";
import EducationCard from "./education-card";
import { FaLink } from "react-icons/fa6";

import "./style.scss";
import Section from "../shared/section";
import { Reveal } from "../shared/Reveal";

const Education = () => {
  return (
    
      <Section background="light" title="Education">
      <Reveal>
        <div className="education-content-wrapper">
    
          <EducationCard
            duration="May2023-Dec2023"
            title="Full Stack Web Development (MERN)"
            description="Odin School"
            marks="Certificate"
            icon={<FaLink />}
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
        </Reveal>
      </Section>
  );
};

export default Education;
