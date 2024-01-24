import React from "react";
import Ticker from "framer-motion-ticker";
import styled from "styled-components";
import { FaGlobe,FaDatabase,FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton,FaCrop,FaWandMagicSparkles  } from "react-icons/fa6";

export function JobsTicker() {
  return (
    <>
      <JOBSTICKER>
          <Ticker duration={60}>
            <JOBCARD>
            <FaGlobe/>
              WEB DEVELOPMENT
            </JOBCARD>

            <JOBCARD>
              <FaCrop/>
              WEB DESIGN
            </JOBCARD>

            <JOBCARD>
              <FaLaptopCode/>
              FRONEND
            </JOBCARD>

            <JOBCARD>
              <FaDatabase />
              DATABASE
            </JOBCARD>

            <JOBCARD>
              <FaMobileScreenButton />
              RESPONSIVE DESIGN
            </JOBCARD>

            <JOBCARD>
              <FaWandMagicSparkles/>
              USER EXPERIENCE
            </JOBCARD>
          </Ticker>
      </JOBSTICKER>
    </>
  );
}

const JOBSTICKER = styled.div`
  padding: 70px 0;
  color:white; 
`;

const JOBCARD = styled.div`
  margin: 10px;
  letter-spacing: 1px;
  opacity: 0.7;
  font-weight: light;
  padding: 16px 20px;
  border-radius: 12px;
  transition: all 0.2s ease-in;
  &:hover {
    opacity: 1;
    color: #ffdb44;
    border: 1px solid #ffdb44;
    box-shadow: 0 1px 6px #ffdb44, 0 2px 12px #ffdb44;
  }
  svg{
    margin-right: 10px;
    margin-bottom: -1px;
  }
  @media screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.25rem 0.67rem;
  }
`;
