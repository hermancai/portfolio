import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { Element } from "react-scroll";
import useScroll from "../hooks/useScroll";
import useParallax from "../hooks/useParallax";
import React from "react";

export default function Hero() {
  const scrollToSection = useScroll("About Me", 2000);
  const [y1] = useParallax([-400]);
  const buttonRef = React.useRef(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const rotateElement = React.useCallback(
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

  React.useEffect(() => {
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
        <p className="">
          <span className="sm:text-lg">Hello, my name is</span>
          <br />
          <span className="text-orange-400 text-4xl sm:text-5xl">
            Herman Cai
          </span>
        </p>
        <p className="leading-10">
          <span className="sm:text-lg">
            I&apos;m looking to start my career as a
          </span>
          <br />
          <span className="text-3xl sm:text-4xl">web developer</span>
        </p>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
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
