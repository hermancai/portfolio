import React from "react";
import SkillIcon from "./SkillIcon";

const skillList = [
  { name: "HTML", path: "/icons/html.png" },
  { name: "CSS", path: "/icons/css.png" },
  { name: "JavaScript", path: "/icons/javascript.png" },
  { name: "TypeScript", path: "/icons/typescript.png" },
  { name: "React", path: "/icons/react.png" },
  { name: "Next.js", path: "/icons/next.png" },
  { name: "Redux", path: "/icons/redux.png" },
  { name: "Tailwind", path: "/icons/tailwindcss.png" },
  { name: "Python", path: "/icons/python.png" },
  { name: "Node.js", path: "/icons/node.png" },
  { name: "Express", path: "/icons/express.png" },
  { name: "AWS", path: "/icons/aws.png" },
  { name: "PostgreSQL", path: "/icons/postgres.png" },
  { name: "MongoDB", path: "/icons/mongodb.png" },
];

export default function Skills() {
  const [iconState, setIconState] = React.useState(skillList.map(() => false));
  const [showText, setShowText] = React.useState(false);

  // Toggle state per individual icon
  const handleClick = (i: number) => {
    const newState = [...iconState];
    newState[i] = !iconState[i];
    setIconState(newState);
  };

  // Toggle state of all icons
  const toggleShowText = () => {
    setIconState(skillList.map(() => !showText));
    setShowText(!showText);
  };

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="flex flex-col md:flex-row w-[95%] md:w-[85%] sm:w-3/4 max-w-[50rem] p-8 gap-4 md:gap-8">
        <div className="md:min-w-[8rem] md:min-h-[8rem] flex flex-row md:flex-col md:justify-center items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-11 h-11 md:w-24 md:h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
          <p className="font-raleway text-3xl mr-3 md:hidden">Skills</p>
          <button
            className="relative h-5 w-8 bg-zinc-600 rounded-full cursor-pointer border border-black hover:border-white transition-colors duration-300"
            onClick={toggleShowText}
            aria-label="toggleSkillText"
          >
            <div
              className={`absolute h-6 w-6 left-0 top-1/2 -translate-y-1/2 bg-[linear-gradient(45deg,#ef4444,#f97316,#eab308)] rounded-full ${
                showText ? "translate-x-4" : "-translate-x-2"
              } transition-[transform] duration-500 ease-in-out`}
            />
          </button>
        </div>

        <div className="grid justify-between grid-cols-[repeat(auto-fill,4rem)] md:grid-cols-[repeat(auto-fill,5rem)] gap-4 grow">
          {skillList.map((skill, i) => {
            return (
              <SkillIcon
                index={i}
                name={skill.name}
                path={skill.path}
                showText={iconState[i]}
                handleClick={() => handleClick(i)}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
