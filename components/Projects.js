import EmblaCarousel from "../components/EmblaCarousel";
import { useInView } from "react-intersection-observer";
import TransitionSlideIn from "./TransitionSlideIn";
import { DesktopComputerIcon, CodeIcon } from "@heroicons/react/solid";
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

function Projects({ projectsRef }) {
  const [projectsHeaderRef, projectsHeaderInView] = useInView({
    fallbackInView: true,
    triggerOnce: true,
  });
  const eqmapperSlides = Array.from(Array(eqmapperImagesCount).keys());
  const chatappSlides = Array.from(Array(chatappImagesCount).keys());
  const ppmSlides = Array.from(Array(ppmImagesCount).keys());
  const weatherSlides = Array.from(Array(weatherImagesCount).keys());

  return (
    <div ref={projectsRef}>
      <div className="flex flex-col w-full items-center pt-[100px]">
        <div className="flex flex-col w-4/5 space-y-10">
          <TransitionSlideIn inView={projectsHeaderInView}>
            <p className="sectionLabel">Projects</p>
          </TransitionSlideIn>

          <div
            ref={projectsHeaderRef}
            className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2"
          >
            <div className="flex flex-col gap-5 max-w-max">
              <p className="font-bold text-2xl">Personal Project Manager</p>
              <p className="italic text-gray-400">
                Keep track of your personal projects by sorting task priority
                and completion status.
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="projectLabel">React</p>
                <p className="projectLabel">Redux Toolkit</p>
                <p className="projectLabel">Tailwind CSS</p>
                <p className="projectLabel">Node</p>
                <p className="projectLabel">Express</p>
                <p className="projectLabel">MongoDB</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="linkButton fillButton"
                  href="https://mern-ppm.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DesktopComputerIcon className="h-4 mr-2" />
                  Live Project
                </a>
                <a
                  className="linkButton outlineButton"
                  href="https://github.com/hermancai/project_manager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeIcon className="h-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <EmblaCarousel
                slides={ppmSlides}
                imageFunc={ppmImagesByIndex}
                projectName="project manager"
              />
            </div>
          </div>

          <div className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-5 max-w-max">
              <p className="font-bold text-2xl">Earthquake Mapper</p>
              <p className="italic text-gray-400">
                Visualize past earthquake events on a map, based on customizable
                search terms.
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="projectLabel">HTML</p>
                <p className="projectLabel">CSS</p>
                <p className="projectLabel">Javascript</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="linkButton fillButton"
                  href="https://hermancai.github.io/earthquake_mapper/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DesktopComputerIcon className="h-4 mr-2" />
                  Live Project
                </a>
                <a
                  className="linkButton outlineButton"
                  href="https://github.com/hermancai/earthquake_mapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeIcon className="h-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <EmblaCarousel
                slides={eqmapperSlides}
                imageFunc={eqmapperImagesByIndex}
                projectName="earthquake mapper"
              />
            </div>
          </div>

          <div className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-5 max-w-max">
              <p className="font-bold text-2xl">Chat App</p>
              <p className="italic text-gray-400">
                Send and receive messages in real time, similar to Slack. A
                Gmail account is required.
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="projectLabel">React</p>
                <p className="projectLabel">Redux</p>
                <p className="projectLabel">Tailwind CSS</p>
                <p className="projectLabel">Firebase</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="linkButton fillButton"
                  href="https://chatapp-e7cdc.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DesktopComputerIcon className="h-4 mr-2" />
                  Live Project
                </a>
                <a
                  className="linkButton outlineButton"
                  href="https://github.com/hermancai/chat_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeIcon className="h-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <EmblaCarousel
                slides={chatappSlides}
                imageFunc={chatappImagesByIndex}
                projectName="chat app"
              />
            </div>
          </div>

          <div className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-5 max-w-max">
              <p className="font-bold text-2xl">Weather App</p>
              <p className="italic text-gray-400">
                {`Get a city's current weather and weekly forecast,
                as well as info about the current moon cycle.`}
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="projectLabel">Next.js</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="linkButton fillButton"
                  href="https://weather-react-tawny.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DesktopComputerIcon className="h-4 mr-2" />
                  Live Project
                </a>
                <a
                  className="linkButton outlineButton"
                  href="https://github.com/hermancai/weather-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeIcon className="h-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <EmblaCarousel
                slides={weatherSlides}
                imageFunc={weatherImagesByIndex}
                projectName="weather app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
