import EmblaCarousel from "../components/EmblaCarousel";
import { DesktopComputerIcon, CodeIcon } from "@heroicons/react/solid";
import { eqmapperImagesCount, eqmapperImagesByIndex } from "../public/images/eqmapper";
import { chatappImagesCount, chatappImagesByIndex } from "../public/images/chatapp";

function Projects({ id }) {
  const eqmapperSlides = Array.from(Array(eqmapperImagesCount).keys());
  const chatappSlides = Array.from(Array(chatappImagesCount).keys());

  return (
    <div id={id}>
      <div className="flex flex-col w-full items-center pt-[100px]">
        <div className="flex flex-col w-4/5 space-y-10">
          <p className="sectionLabel">Projects</p>

          <div className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-5 max-w-max">
              <p className="font-bold text-2xl">Chat App</p>
              <p className="italic text-gray-400">
                This is an instant messaging app. Logging in requires Google Authentication via Gmail.
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="projectLabel">React</p>
                <p className="projectLabel">Redux</p>
                <p className="projectLabel">tailwindcss</p>
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
              <EmblaCarousel slides={chatappSlides} imageFunc={chatappImagesByIndex} projectName="chat app" />
            </div>
          </div>

          <div className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-5 max-w-max">
              <p className="font-bold text-2xl">Earthquake Mapper</p>
              <p className="italic text-gray-400">
                This app marks past earthquake events on a map, based on customizable search terms.
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
