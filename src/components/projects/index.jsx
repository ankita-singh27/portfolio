import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

const projectsData = [
  {
    id: 1,
    name: "MOVIX",
    tags: ["react"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.jpg"),
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
      thumbnail: require("../../images/portfolio/thumb-7.jpg"),
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
      thumbnail: require("../../images/portfolio/thumb-8.jpg"),
    },
    techStack: ["React", "JavaScript", "HTML", "Tailwind CSS"],
    description:
      "Quiz Grad is an engaging quiz app, crafted using React for a dynamic and interactive user experience. It challenges users to showcase their knowledge under time constraints. The addition of a sleek loading screen enhances the overall aesthetic. After submission, the app provides instant feedback on marks earned with a pass or fail status.",
    github: "",
    webapp: "",
  },
  {
    id: 4,
    name: "MUSIC PLAYER",
    tags: ["javascript"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    },
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    description:
      "Crafted a dynamic music player using HTML, CSS and JavaScript, elevating the listening experience with essential functionalities like play, pause, shuffle, and seamless song navigation. Implemented local storage functionality to remember user preferences, ensuring a seamless playback experience across sessions.",
    github: "https://github.com/ankita-singh27/Music-Player",
    webapp: "https://musuc-player.netlify.app/",
  },
  {
    id: 5,
    name: "WEATHER APP",
    tags: ["javascript"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    },
    techStack: ["HTML", "CSS", "JavaScript", "Api"],
    description:
      "Designed a feature-rich weather app leveraging geolocation to instantly provide the current temperature of the user's location. Users can also explore detailed weather information for any city worldwide through a robust search feature. The application seamlessly integrates real-time data, ensuring accurate and up-to-date weather forecasts.",
    github: "https://github.com/ankita-singh27/weather-app",
    webapp: "https://weather-app29.netlify.app/",
  },
  {
    id: 6,
    name: "PORTFOLIO",
    tags: ["animation"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-4.jpg"),
    },
    techStack: ["React", "Framer Motion", "HTML", "SASS", "CSS"],
    description:
      "Portfolio is designed to showcase all the skill-set that I have gained so far. I implemented a robust and user-friendly contact form using the React Hook Form library for form validation and Email.js for seamless email integration. The primary objectives were to enhance user experience and streamline the communication process on the website.",
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
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Projects;
