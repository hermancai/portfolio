import { useInView } from "react-intersection-observer";
import TransitionSlideIn from "./TransitionSlideIn";
import ProjectCard from "./ProjectCard";

import {
  eqmapperImagesCount,
  eqmapperImagesByIndex,
} from "../public/images/eqmapper";
import {
  chatappImagesCount,
  chatappImagesByIndex,
} from "../public/images/chatapp";
import { ppmImagesCount, ppmImagesByIndex } from "../public/images/ppm";
import {
  weatherImagesCount,
  weatherImagesByIndex,
} from "../public/images/weather";

const ppmProject = {
  name: "Personal Project Manager",
  description:
    "Keep track of your personal projects by sorting task priority and completion status.",
  tech: [
    "React",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node",
    "Express",
    "MongoDB",
  ],
  liveLink: "https://mern-ppm.herokuapp.com",
  githubLink: "https://github.com/hermancai/project_manager",
  embla: {
    slides: Array.from(Array(ppmImagesCount).keys()),
    imageFunc: ppmImagesByIndex,
    projectName: "project manager",
  },
};

const eqmapperProject = {
  name: "Earthquake Mapper",
  description:
    "Visualize past earthquake events on a map, based on customizable search terms.",
  tech: ["HTML", "CSS", "Javascript"],
  liveLink: "https://hermancai.github.io/earthquake_mapper/",
  githubLink: "https://github.com/hermancai/earthquake_mapper",
  embla: {
    slides: Array.from(Array(eqmapperImagesCount).keys()),
    imageFunc: eqmapperImagesByIndex,
    projectName: "earthquake mapper",
  },
};

const chatappProject = {
  name: "Chat App",
  description:
    "Send and receive messages in real time, similar to Slack. A Gmail account is required.",
  tech: ["React", "Redux", "Tailwind CSS", "Firebase"],
  liveLink: "https://chatapp-e7cdc.web.app/",
  githubLink: "https://github.com/hermancai/chat_app",
  embla: {
    slides: Array.from(Array(chatappImagesCount).keys()),
    imageFunc: chatappImagesByIndex,
    projectName: "chat app",
  },
};

const weatherProject = {
  name: "Weather App",
  description:
    "Get a city's current weather and weekly forecast, as well as info about the current moon cycle.",
  tech: ["Next.js"],
  liveLink: "https://weather-react-tawny.vercel.app/",
  githubLink: "https://github.com/hermancai/weather-react",
  embla: {
    slides: Array.from(Array(weatherImagesCount).keys()),
    imageFunc: weatherImagesByIndex,
    projectName: "weather app",
  },
};

const Projects = ({ projectsRef }) => {
  const [projectsHeaderRef, projectsHeaderInView] = useInView({
    fallbackInView: true,
    triggerOnce: true,
  });

  return (
    <div
      ref={projectsRef}
      className="flex flex-col items-center w-full pt-[100px]"
    >
      <div className="flex flex-col w-4/5 space-y-5">
        <TransitionSlideIn inView={projectsHeaderInView}>
          <p className="sectionLabel">Projects</p>
        </TransitionSlideIn>
        <div ref={projectsHeaderRef} />
        <ProjectCard data={ppmProject} />
        <ProjectCard data={eqmapperProject} />
        <ProjectCard data={chatappProject} />
        <ProjectCard data={weatherProject} />
      </div>
    </div>
  );
};

export default Projects;
