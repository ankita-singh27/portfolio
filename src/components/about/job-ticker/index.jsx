import React from "react";
import styled from "styled-components";
import { FaGlobe,FaDatabase,FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton,FaCrop,FaWandMagicSparkles  } from "react-icons/fa6";

export function JobsTicker() {
  return (
      <JOBSTICKER>
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
      
      </JOBSTICKER>
      
    
  );
}

const JOBSTICKER = styled.div`
display:flex;
flex-wrap:wrap;
margin:5px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top:30px;
  }
`
const JOBCARD = styled.div` 
  color:white;
  letter-spacing: 1px;
  opacity: 0.7;
  font-weight: light;
  padding: 10px;
  margin:10px;
  border-radius: 12px;
  transition: all 0.2s ease-in;
  border: 1px solid #ffdb44;
    box-shadow: 0 1px 6px #ffdb44, 0 2px 12px #ffdb44;
  &:hover {
    opacity: 1;
    color: #ffdb44;
  }
  svg{
    margin-right: 10px;
    margin-bottom: -1px;
  }
  
`;
