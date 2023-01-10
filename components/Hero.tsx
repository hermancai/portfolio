import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";
import { Layer1, Layer2, Layer3, Layer4, Layer5 } from "./SVGLayers";
import { animateScroll as scrollTo, scroller } from "react-scroll";

export default function Hero() {
  const scrollToSection = () => {
    scroller.scrollTo("about", { duration: 1500, smooth: true });
  };

  return (
    <div className="w-full h-screen min-h-[700px] flex justify-center text-white bg-gradient-to-b from-zinc-900 to-slate-900 relative overflow-hidden">
      <ParticleCanvas />

      <Layer1 />
      <Layer2 />

      <div className="flex flex-col gap-4 fixed items-center text-center z-30 p-6 pt-[10vh]">
        <motion.p
          className="text-4xl"
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            duration: 0.75,
            delay: 1.5,
          }}
        >
          Hello
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 1 },
            delay: 2.5,
          }}
          className="leading-6"
        >
          <span className="sm:text-xl">My name is</span>
          <br />
          <span className="text-5xl sm:text-6xl text-orange-400">Herman</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 1 },
            delay: 3.75,
          }}
          className="leading-10"
        >
          <span className="sm:text-xl">
            I'm looking to start my career as a
          </span>
          <br />
          <span className="text-4xl sm:text-5xl">web developer</span>
        </motion.p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="25%"
          height="25%"
          viewBox="0 0 100 100"
          className="mt-4 cursor-pointer overflow-visible fill-transparent hover:fill-orange-500 hover:stroke-orange-100 stroke-orange-500 transition-colors duration-500 p-3"
          animate={{
            y: [0, 100, 0],
            transform: [
              "translateY(-25%)",
              "translateY(0)",
              "translateY(-25%)",
            ],
            transition: {
              duration: 0.75,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [
                [0.8, 0, 1, 1],
                [0, 0, 0.2, 1],
              ],
              delay: 5.25,
            },
          }}
          onClick={scrollToSection}
        >
          <motion.path
            d="M 51,30 L 0,30 L 50,80 L 100,30 Z"
            strokeWidth={9}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                delay: 4.5,
                duration: 3,
                opacity: { duration: 0.1 },
                ease: "easeOut",
              },
            }}
          />
          <motion.path
            d="M 49,30 L 100,30 L 50,80 L 0,30 Z"
            strokeWidth={9}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                delay: 4.5,
                duration: 3,
                opacity: { duration: 0.1 },
                ease: "easeOut",
              },
            }}
          />
        </motion.svg>
      </div>

      <Layer3 />
      <Layer4 />
      <Layer5 />
    </div>
  );
}
