import React from "react";
import Ticker from "framer-motion-ticker";
import styled from "styled-components";
import { FaGlobe,FaDatabase,FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton,FaCrop,FaWandMagicSparkles  } from "react-icons/fa6";
import Section from "../../shared/section";

export function JobsTicker() {
  return (
    // <Section>
      <JOBSTICKER>
      <div className="ticker">
          {/* <Ticker duration={60} className="container"> */}
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
          {/* </Ticker> */}
          </div>
      </JOBSTICKER>
      
    
  );
}

const JOBSTICKER = styled.div`
${'' /* background-color:#131313; */}
background-color:red;
${'' /* padding: 30px 0; */}
    ${'' /* position: relative; */}
    display: flex;
    justify-content: center;
.ticker{
        ${'' /* width: 1200px; */}
        ${'' /* background-color:blue; */}
        ${'' /* padding: 0 20px; */}
        ${'' /* position: relative; */}
        ${'' /* display: flex;
        align-items: center; */}
        ${'' /* flex-direction: column; */}

}
`
const JOBCARD = styled.div`
  margin: 10px;
  color:white;
  ${'' /* background-color:#131313; */}
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
  ${'' /* @media screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.25rem 0.67rem;
  } */}
`;
