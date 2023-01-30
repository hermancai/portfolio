import React from "react";
import SkillIcon from "./SkillIcon";
import { Element } from "react-scroll";
import { AnimationProps, motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillList = [
  { name: "HTML", path: "/icons/html.png" },
  { name: "CSS", path: "/icons/css.png" },
  { name: "JavaScript", path: "/icons/javascript.png" },
  { name: "TypeScript", path: "/icons/typescript.png" },
  { name: "React", path: "/icons/react.png" },
  { name: "Redux", path: "/icons/redux.png" },
  { name: "Tailwind", path: "/icons/tailwindcss.png" },
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
  const inView = useInView(ref, { once: true });

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
    <Element name="Skills" id="skills" className="pt-40 bg-slate-800">
      <div className="w-full flex justify-center relative">
        <span className="h-[70%] w-full top-[15%] absolute skew-y-6">
          <div className="w-full flex justify-center absolute top-0">
            <motion.span
              className="h-1 bg-gray-700 absolute"
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={strokeVariants}
            />
          </div>
          <div className="w-full flex justify-center absolute bottom-0">
            <motion.span
              className="h-1 bg-gray-700 absolute"
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={strokeVariants}
            />
          </div>
          <motion.span
            className="h-full w-full block absolute bg-gradient-to-b from-gray-700 to-gray-700 via-slate-700"
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={fillVariants}
          />
        </span>
        <div className="w-full relative flex flex-col justify-center items-center gap-8 text-white ">
          <SectionHeader text="Skills" />
          <motion.div
            className="flex flex-row flex-nowrap relative rounded bg-slate-900 cursor-pointer shadow-[0_0_2px_black] hover:shadow-[0_0_1px_white] transition-[box-shadow] duration-300"
            onClick={toggleShowText}
            animate={
              inView
                ? { opacity: 1, transition: { duration: 1, delay: 0.5 } }
                : { opacity: 0 }
            }
          >
            <motion.span
              className="absolute top-0 h-full w-1/2 border-[3px] border-orange-500 rounded"
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
          </motion.div>
          <motion.div
            className="w-full max-w-[32rem] gap-6 flex flex-wrap justify-center px-4"
            initial="hidden"
            animate={inView ? "show" : ""}
            variants={container}
            ref={ref}
          >
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
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
