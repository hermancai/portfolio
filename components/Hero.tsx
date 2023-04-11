import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { Element } from "react-scroll";
import useScroll from "../hooks/useScroll";
import useParallax from "../hooks/useParallax";
import { useState, useRef, useCallback, useEffect } from "react";

export default function Hero() {
  const scrollToSection = useScroll("About Me header", -100, 2000);
  const [y1] = useParallax([-400]);
  const buttonRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const rotateElement = useCallback(
    (e: MouseEvent, element: HTMLButtonElement | null) => {
      if (!element) return;

      // Get cursor position
      const x = e.clientX;
      const y = e.clientY;

      // Get center of element relative to viewport
      const offset = element.getBoundingClientRect();
      const midX = offset.left + element.clientWidth / 2;
      const midY = Math.max(0, offset.top) + element.clientHeight / 2;

      // Get distance from center as capped/scaled-down degrees to rotate
      const offsetX = Math.min(30, ((x - midX) / midX) * 30);
      const offsetY = Math.min(30, ((y - midY) / midY) * 30);

      // X and Y are flipped to match rotation around x/y axis
      setRotateX(-1 * offsetY);
      setRotateY(offsetX);
    },
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && buttonRef.current) {
      window.document.addEventListener("mousemove", (e) =>
        rotateElement(e, buttonRef.current)
      );
    }
  }, [buttonRef, rotateElement]);

  return (
    <Element
      name="Home"
      id="home"
      className="w-full h-screen min-h-[650px] flex justify-center items-center text-white bg-gradient-to-b from-zinc-900 to-slate-900 relative overflow-hidden"
    >
      <Element name="Home header" className="absolute top-0" />
      <HeroBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col items-center text-center p-6 mb-12 gap-2"
        style={{ y: y1 }}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.75 }}
          >
            <p className="text-orange-400 text-4xl sm:text-5xl">Herman Cai</p>
            <p className="text-xl sm:text-2xl font-extralight">
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          <motion.svg
            className="absolute h-full right-1/2 top-0 drop-shadow-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            initial={{ right: "50%" }}
            animate={{ right: "100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            ></path>
          </motion.svg>

          <motion.svg
            viewBox="0 0 100 100"
            className="h-full absolute top-0 left-0 right-0 ml-auto mr-auto drop-shadow-white"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <path d="M 35 85 L 65 15"></path>
          </motion.svg>

          <motion.svg
            className="absolute h-full left-1/2 top-0 drop-shadow-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            initial={{ left: "50%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </motion.svg>
        </div>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.75,
            ease: "easeInOut",
          }}
          onClick={scrollToSection}
          style={{}}
          className="relative rounded mt-6 cursor-pointer flex justify-center"
        >
          <span
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(5000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
            }}
            id="hero-button"
            className="absolute top-0 bg-black text-orange-400 whitespace-nowrap px-4 py-2 rounded text-shadow-orange-400 after:bg-white after:-inset-[.1rem] after:-z-20 after:absolute after:rounded after:transition-colors after:duration-300"
          >
            About Me
          </span>
        </motion.div>
      </motion.div>
    </Element>
  );
}
