import React from "react";
import { AnimationProps, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";
import SectionHeader from "./SectionHeader";
import useScroll from "../hooks/useScroll";

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
    <Element name="About Me" className="pt-32 bg-slate-800">
      <div className="flex justify-center w-full relative" ref={ref}>
        <span className="h-[80%] w-full top-[10%] absolute -skew-y-6">
          <motion.span
            className="h-full w-full absolute bg-gradient-to-b from-gray-900 to-gray-900 via-slate-900"
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={fillVariants}
          />
          <div className="w-full flex justify-center">
            <motion.span
              className="h-1 bg-gray-900"
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={strokeVariants}
            />
          </div>
          <div className="w-full flex justify-center absolute bottom-0">
            <motion.span
              className="h-1 bg-gray-900"
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={strokeVariants}
            />
          </div>
        </span>
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
              className="underline text-orange-400 cursor-pointer"
              onClick={scrollToContacts}
            >
              contact me
            </span>{" "}
            regarding any inquiries or opportunities.
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
              className="p-2 relative flex items-center justify-center w-max group"
            >
              <Image
                src="/icons/github.png"
                alt="github logo"
                width={30}
                height={30}
              />
              <span className="absolute bottom-0 h-1 w-0 group-hover:w-full bg-orange-500 flex transition-[width] duration-500 ease-in-out" />
            </a>

            <a
              href="https://www.linkedin.com/in/hermancai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 relative flex items-center justify-center w-max group"
            >
              <Image
                src="/icons/linkedin.png"
                alt="linkedin logo"
                width={30}
                height={30}
              />{" "}
              <span className="absolute bottom-0 h-1 w-0 group-hover:w-full bg-orange-500 flex transition-[width] duration-500 ease-in-out" />
            </a>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
