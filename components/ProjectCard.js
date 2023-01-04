import EmblaCarousel from "./EmblaCarousel";
import { DesktopComputerIcon, CodeIcon } from "@heroicons/react/solid";

const ProjectCard = ({ data }) => {
  return (
    <div className="bg-gray-900 rounded w-full p-8 gap-5 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-5 max-w-max">
        <p className="font-bold text-2xl">{data.name}</p>
        <p className="italic text-gray-400 whitespace-pre-line">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.tech.map((entry, i) => {
            return (
              <p
                key={i}
                className="rounded-lg bg-gray-700 px-2 py-1 w-min font-light text-sm whitespace-nowrap"
              >
                {entry}
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            className="linkButton fillButton"
            href={data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DesktopComputerIcon className="h-4 mr-2" />
            Live Project
          </a>
          <a
            className="linkButton outlineButton"
            href={data.githubLink}
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
          slides={data.embla.slides}
          imageFunc={data.embla.imageFunc}
          projectName={data.embla.projectName}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
