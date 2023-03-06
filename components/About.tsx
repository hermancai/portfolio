import React from "react";
import { AnimationProps, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";
import SectionHeader from "./SectionHeader";
import useScroll from "../hooks/useScroll";
import useParallax from "../hooks/useParallax";

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

export default function About() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollToContacts = useScroll("Contact", 1000);

  return (
    <Element name="About Me" id="aboutme" className="pt-40 bg-slate-800">
      <div className="flex justify-center w-full relative" ref={ref}>
        <div className="h-[90%] w-full top-[5%] absolute -skew-y-6">
          <motion.span
            className="h-full w-full absolute bg-slate-900"
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={fillVariants}
          />
          <div className="w-full h-full absolute top-0 flex justify-center">
            <motion.span
              className="h-1 bg-black absolute top-0"
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={strokeVariants}
            />
            <motion.span
              className="h-1 bg-black absolute bottom-0"
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={strokeVariants}
            />
          </div>
          <div className="w-full flex justify-center absolute bottom-0"></div>
        </div>

        <div className="max-w-[30rem] flex flex-col justify-center items-center gap-4 px-8">
          <SectionHeader text="About Me" />
          <motion.p
            className="text-white leading-8"
            animate={
              inView
                ? { opacity: 1, y: "0%", transition: { duration: 1 } }
                : { opacity: 0, y: "50%", transition: { duration: 0 } }
            }
          >
            &emsp;&emsp;My name is{" "}
            <span className="text-orange-400">Herman Cai</span>. I&apos;m a new
            grad with degrees in Computer Science and Earth Science. I&apos;ve
            been building projects with{" "}
            <span className="text-orange-400">React and Node</span> for about 2
            years, and I am looking to begin a career in web development. Please
            feel free to{" "}
            <span
              className="underline text-orange-400 cursor-pointer hover:text-shadow-orange-400 transition-[text-shadow]"
              onClick={scrollToContacts}
            >
              contact me
            </span>{" "}
            regarding any inquiries or opportunities!
          </motion.p>
          <motion.div
            className="flex justify-evenly w-full"
            animate={
              inView
                ? { opacity: 1, transition: { duration: 1, delay: 1 } }
                : { opacity: 0 }
            }
          >
            <a
              href="https://github.com/hermancai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 relative flex items-center justify-center w-max group text-white flex-nowrap gap-2"
            >
              <Image
                src="/icons/github.png"
                alt="github logo"
                width={20}
                height={20}
              />
              GitHub
              <span className="absolute bottom-0 h-[1px] w-0 group-hover:w-full bg-orange-500 flex transition-[width] duration-500 ease-in-out" />
            </a>

            <a
              href="https://www.linkedin.com/in/hermancai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 relative flex items-center justify-center w-max group text-white flex-nowrap gap-2"
            >
              <Image
                src="/icons/linkedin.png"
                alt="linkedin logo"
                width={20}
                height={20}
              />
              LinkedIn
              <span className="absolute bottom-0 h-[1px] w-0 group-hover:w-full bg-orange-500 flex transition-[width] duration-500 ease-in-out" />
            </a>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
