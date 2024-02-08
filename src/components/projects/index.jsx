import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";
import { Reveal } from "../shared/Reveal";

const projectsData = [
  {
    id: 1,
    name: "MOVIX",
    tags: ["react"],
    media: {
      thumbnail: require("../../images/projects/movix app.png"),
    },
    techStack: ["React", "Redux", "JavaScript", "HTML", "SASS", "CSS"],
    description:
      "Movix is a movie website which offers an immersive cinematic experience. It introduces innovative features such as infinite scrolling for seamless content exploration, loading skeleton to enhance user anticipation during data retrieval. With a user-friendly interface and  a vast array of content, this website delivers an engaging platform for film enthusiasts. ",
    github: "https://github.com/ankita-singh27/movix",
    webapp: "",
  },
  {
    id: 2,
    name: "SHOPPER",
    tags: ["react"],
    media: {
      thumbnail: require("../../images/projects/shopper app1.png"),
    },
    techStack: ["React", "ContextApi", "HTML", "JavaScript", "CSS"],
    description:
      "Shopper is an e-commerce website meticulously crafted to provide an immersive online shopping experience. It features advanced functionalities, including product search, category-based filtering, and sorting options for user convenience. With a seamless shopping journey, users can effortlessly add products to their cart and make purchases.",
    github: "https://github.com/ankita-singh27/Shopper",
    webapp: "https://shopper-ecommerce29.netlify.app/",
  },
  {
    id: 3,
    name: "QUIZ GRAD",
    tags: ["react"],
    media: {
      thumbnail: require("../../images/projects/quiz grad1.png"),
    },
    techStack: ["React", "JavaScript", "HTML", "Tailwind CSS"],
    description:
      "Quiz Grad is an engaging quiz app, crafted using React for a dynamic and interactive user experience. It challenges users to showcase their knowledge under time constraints. The addition of a sleek loading screen enhances the overall aesthetic. After submission, the app provides instant feedback on marks earned with a pass or fail status.",
    github: "",
    webapp: "",
  },
  {
    id: 4,
    name: "WEATHER APP",
    tags: ["javascript"],
    media: {
      thumbnail: require("../../images/projects/weather app.png"),
    },
    techStack: ["HTML", "CSS", "JavaScript", "Api","Session Storage"],
    description:
      "Designed a feature-rich weather app leveraging geolocation to instantly provide the current temperature of the user's location. Users can also explore detailed weather information for any city worldwide through a robust search feature. The application seamlessly integrates real-time data, ensuring accurate and up-to-date weather forecasts.",
    github: "https://github.com/ankita-singh27/weather-app",
    webapp: "https://weather-app29.netlify.app/",
  },
  {
    id: 5,
    name: "MUSIC PLAYER",
    tags: ["javascript"],
    media: {
      thumbnail: require("../../images/projects/music player.png"),
    },
    techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
    description:
      "Crafted a dynamic music player using HTML, CSS and JavaScript, elevating the listening experience with essential functionalities like play, pause, shuffle, and seamless song navigation. Implemented local storage functionality to remember user preferences, ensuring a seamless playback experience across sessions.",
    github: "https://github.com/ankita-singh27/Music-Player",
    webapp: "https://musuc-player.netlify.app/",
  },
  {
    id: 6,
    name: "PORTFOLIO",
    tags: ["animation"],
    media: {
      thumbnail: require("../../images/projects/my portfolio.png"),
    },
    techStack: ["React", "Framer Motion", "HTML", "SASS", "Email JS"],
    description:
      "Designed and developed a robust portfolio project using React, leveraging SCSS for a clean and responsive UI. Integrated Framer Motion to enhance the user experience with smooth animations. Implemented a dynamic contact form  with JavaScript and employed email functionality for seamless communication.", 
    github: "https://github.com/ankita-singh27/portfolio",
    webapp: "",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");

    setTimeout(() => {
      if (tag !== "all") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id="projects" title="My" colorTitle="Projects" background="light">
      <div className="portfolio-content-wrapper" style={{ width: "100%" }}>
      <Reveal>
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        </Reveal>
        
        <Reveal>
        <Showcase data={projects} transition={transition} />
        </Reveal>
      </div>
    </Section>
  );
};

export default Projects;
