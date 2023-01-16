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

// Container for skill icons
const container: AnimationProps["variants"] = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// For background
const strokeVariants: AnimationProps["variants"] = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: { duration: 1.25, ease: "easeInOut" },
  },
};

// For background
const fillVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
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
    <div className="h-screen min-h-[40rem] w-full flex flex-col gap-8 bg-slate-800 justify-center items-center text-white relative z-20">
      <span className="h-[50%] w-full top-[25%] block absolute skew-y-6 z-20">
        <motion.span
          className="h-full w-full bg-slate-700 block absolute"
          initial="hidden"
          animate={isInView ? "visible" : ""}
          variants={fillVariants}
        />
        <div className="w-full flex justify-center">
          <motion.span
            className="h-1 bg-slate-700 absolute"
            initial="hidden"
            animate={isInView ? "visible" : ""}
            variants={strokeVariants}
          />
        </div>
        <div className="w-full flex justify-center absolute bottom-0">
          <motion.span
            className="h-1 bg-slate-700 absolute"
            initial="hidden"
            animate={isInView ? "visible" : ""}
            variants={strokeVariants}
          />
        </div>
      </span>
      <div className="w-full h-full relative flex flex-col justify-center items-center gap-8 z-20">
        <h1 className="text-3xl">- Skills -</h1>
        <div
          className="flex flex-row flex-nowrap relative rounded bg-slate-900 cursor-pointer shadow-[0_0_1px_white] hover:shadow-[0_0_2px_white]"
          onClick={toggleShowText}
        >
          <motion.span
            className="absolute top-0 h-full w-1/2 border-[3px] border-orange-400 rounded"
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
    </div>
  );
}
