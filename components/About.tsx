import React from "react";
import { AnimationProps, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";

const strokeVariants: AnimationProps["variants"] = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
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
  },
};

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <Element
      className="h-screen min-h-[40rem] w-full relative z-20 bg-slate-800 flex flex-col justify-center items-center"
      name="about"
    >
      <span className="h-[50%] w-full top-[25%] block absolute -skew-y-6 z-20">
        <motion.span
          className="h-full w-full bg-slate-900 block absolute"
          initial="hidden"
          animate={isInView ? "visible" : ""}
          variants={fillVariants}
        />
        <div className="w-full flex justify-center">
          <motion.span
            className="h-1 bg-slate-900 absolute"
            initial="hidden"
            animate={isInView ? "visible" : ""}
            variants={strokeVariants}
          />
        </div>
        <div className="w-full flex justify-center absolute bottom-0">
          <motion.span
            className="h-1 bg-slate-900 absolute"
            initial="hidden"
            animate={isInView ? "visible" : ""}
            variants={strokeVariants}
          />
        </div>
      </span>
      <div
        className="p-8 sm:max-w-[30rem] leading-8 text-white flex flex-col gap-4 z-30"
        ref={ref}
      >
        <p>
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
            className="rounded-full p-2 hover:shadow-[0_0_0_3px_rgb(249,115,22,0.7)] transition-shadow duration-300"
          >
            <Image
              src="/icons/github.png"
              alt="github logo"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/hermancai/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:shadow-[0_0_0_3px_rgb(249,115,22,0.7)] transition-shadow duration-300"
          >
            <Image
              src="/icons/linkedin.png"
              alt="linkedin logo"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </Element>
  );
}
