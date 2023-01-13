import React from "react";
import { AnimationProps, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";

const strokeVariants: AnimationProps["variants"] = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: { duration: 1.25, ease: "easeInOut" },
  },
};

const fillVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
    repeatCount: 0,
  },
};

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <Element
      className="min-h-screen w-full flex justify-center items-center text-white flex-col bg-slate-800 relative z-20"
      name="about"
    >
      <div className="w-full h-full absolute top-0 pointer-events-none z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 100,45 L 0,65"
            stroke="#0F172A"
            variants={strokeVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
          />
          <motion.path
            d="M 100,45 L 200,25"
            stroke="#0F172A"
            variants={strokeVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
          />
          <motion.path
            d="M 100,155 L 0,175"
            stroke="#0F172A"
            variants={strokeVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
          />
          <motion.path
            d="M 100,155 L 200,135"
            stroke="#0F172A"
            variants={strokeVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
          />
          <motion.polygon
            points="0,65 0,175 200,135 200,25"
            fill="#0F172A"
            variants={fillVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
          />
        </svg>
      </div>
      <div className="p-8 w-full sm:max-w-[30rem] leading-8 flex flex-col gap-8 z-20">
        <p ref={ref}>
          &emsp;&emsp;My name is{" "}
          <span className="text-orange-400">Herman Cai</span>. I&apos;m a new
          grad with degrees in Computer Science and Earth Science. I&apos;ve
          been building projects with{" "}
          <span className="text-orange-400">React and Node</span> for about 2
          years, and I am looking to begin a career in web development. Please
          feel free to{" "}
          <span className="underline text-orange-400 cursor-pointer">
            contact me
          </span>{" "}
          regarding any inquiries or opportunities.
        </p>
        <div className="flex justify-evenly">
          <a
            href="https://github.com/hermancai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github.png"
              alt="github logo"
              width={30}
              height={30}
              className="hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hermancai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.png"
              alt="linkedin logo"
              width={30}
              height={30}
              className="hover:scale-110"
            />
          </a>
        </div>
      </div>
    </Element>
  );
}
