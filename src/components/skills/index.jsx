import React from 'react'
import Section from "../shared/section";
import RoundLogo from './round-logo';
import "./style.scss";

const Skills = () => {
    const techStack = [
        {
            source: require("../../images/skills/html.png"),
            name: "HTML 5"
        },
        {
            source: require("../../images/skills/css.png"),
            name: "CSS 3"
        },
        {
            source:  require("../../images/skills/javascript.png"),
            name: "Java Script"
        },
        {
            source:  require("../../images/skills/react.png"),
            name: "React"
        },
        {
            source: require("../../images/skills/redux.png"),
            name: "Redux"
        },
        {
            source: require("../../images/skills/firebase.png"),
            name: "Firebase"
        },
    ]
    
    const styling = [
        {
            source:  require("../../images/skills/sass.png"),
            name: "Sass"
        },
        {
            source:  require("../../images/skills/tailwind.png"),
            name: "Tailwind"
        },
        {
            source: require("../../images/skills/bootstrap.png"),
            name: "Bootstrap"
        },
        {
            source:  require("../../images/skills/styled components.png"),
            name: "Styled Components"
        },
    ]
    
    const tools = [
        {
            source: require("../../images/skills/postman.png"),
            name:"Postman"
        },
        {
            source:  require("../../images/skills/vs code.png"),
            name:"Vs Code"
        },
        {
            source:  require("../../images/skills/netlify.png"),
            name:"Netlify"
        },
        {
            source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png",
            name:"Git"
        },
        {
            source: require("../../images/skills/github.png"),
            name:"Git Hub"
        },
        {
            source: require("../../images/skills/npm.png"),
            name:"NPM"
        },
    ]
    
  return (
    <Section background="dark" id="skills" title="My" colorTitle="Skills">
    
    <div className='skills-main'>

        <div className="skills-main__grid-single">
            <div className="skills-main__grid-single__col">
                {techStack.map((el, index) => <RoundLogo key={index} {...el}/>)}
            </div>
            <p>Tech Stacks</p>
        </div>

        <div className="skills-main__grid-single">
            <div className="skills-main__grid-single__col">
                {styling.map((el, index) => <RoundLogo key={index} {...el}/>)}
            </div>
            <p>UI Frameworks</p>
        </div>

        <div className="skills-main__grid-single">
            <div className="skills-main__grid-single__col">
                {tools.map((el, index) => <RoundLogo key={index} {...el}/>)}
            </div>
            <p>Tech Tools</p>
        </div>

        
        

    </div>
        
                
            
       

        

    
    </Section>
    
  )
}

export default Skills;