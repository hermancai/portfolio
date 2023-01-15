import React from "react";
import SkillIcon from "./SkillIcon";
import { AnimationProps, motion, useInView } from "framer-motion";

const skillList = [
  { name: "HTML", path: "/icons/html.png" },
  { name: "CSS", path: "/icons/css.png" },
  { name: "JavaScript", path: "/icons/javascript.png" },
  { name: "TypeScript", path: "/icons/typescript.png" },
  { name: "React", path: "/icons/react.png" },
  { name: "Redux", path: "/icons/redux.png" },
  { name: "tailwindcss", path: "/icons/tailwindcss.png" },
  { name: "Python", path: "/icons/python.png" },
  { name: "Node.js", path: "/icons/node.png" },
  { name: "Express", path: "/icons/express.png" },
  { name: "PostgreSQL", path: "/icons/postgres.png" },
  { name: "MongoDB", path: "/icons/mongodb.png" },
];

const container: AnimationProps["variants"] = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

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
    <div className="w-full flex flex-col gap-8 bg-slate-800 justify-center items-center text-white relative z-20 pb-8">
      <h1 className="text-3xl">- Skills -</h1>
      <div
        className="flex flex-row flex-nowrap relative rounded bg-slate-900 cursor-pointer"
        onClick={toggleShowText}
      >
        <motion.span
          className="absolute top-0 h-full w-1/2 border-2 border-orange-400 rounded"
          animate={{
            left: showText ? "50%" : "0",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        />
        <p
          className={`px-4 py-1 rounded bg-slate-900 font-mono transition-colors duration-500 ${
            showText ? "text-gray-500" : ""
          }`}
        >
          Icon
        </p>
        <p
          className={`px-4 py-1 rounded bg-slate-900 font-mono transition-colors duration-500 ${
            showText ? "" : "text-gray-500"
          }`}
        >
          Text
        </p>
      </div>
      <motion.div
        className="w-full max-w-[32rem] grid gap-4 px-4 grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] justify-items-center"
        initial="hidden"
        animate={isInView ? "show" : ""}
        variants={container}
        ref={ref}
      >
        {skillList.map((skill, i) => {
          return (
            <SkillIcon
              name={skill.name}
              path={skill.path}
              showText={iconState[i]}
              handleClick={() => handleClick(i)}
              key={i}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
