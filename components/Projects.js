import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function Projects({ id }) {
  return (
    <div id={id} className="flex flex-col justify-center items-center w-full">
      <p className="text-3xl mb-5">PROJECTS</p>
      <div className="flex flex-col justify-start w-[90%] p-5 bg-gray-900 rounded space-y-4">
        <div className="flex flex-col">
          <p className="underline text-xl">Earthquake Mapper</p>
          <p className="text-sm text-gray-300">
            Visualize where past earthquakes occurred based on customizable
            search terms.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2 mt-3">
          <a
            className="projectButton align-baseline"
            href="https://geo-util.herokuapp.com/earthquake_mapper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
            <ExternalLinkIcon className="h-4" />
          </a>
          <a
            className="projectButton"
            href="https://github.com/hermancai/earthquake_tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ExternalLinkIcon className="h-4" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/screenshots/eq_mapper.png"
              width="950"
              height="533"
              layout="responsive"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="/screenshots/eq_mapper2.png"
              width="950"
              height="533"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
