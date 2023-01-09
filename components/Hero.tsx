import SVGBack from "./SVGBack";
import SVGFront from "./SVGFront";
import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = () => {
    if (typeof window !== "undefined") {
      const section = document.getElementById("about");
      if (!section) return;

      window.scrollTo({ top: section.offsetTop - 60, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center text-white bg-gradient-to-b from-zinc-900 to-slate-900 relative overflow-hidden">
      <ParticleCanvas />
      <SVGBack />
      <div className="flex flex-col gap-8 fixed items-center text-center z-40 p-6 pt-[10vh]">
        <motion.p
          className="text-4xl"
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 1 },
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
            I'm looking for my first opportunity as a
          </span>
          <br />
          <span className="text-4xl sm:text-5xl">web developer</span>
        </motion.p>
        <br />
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="15%"
          height="15%"
          viewBox="0 0 100 100"
          className="cursor-pointer overflow-visible fill-transparent hover:fill-orange-500 stroke-orange-500 transition-colors duration-500"
          animate={{
            y: [0, 100, 0],
            transform: [
              "translateY(-40%)",
              "translateY(0)",
              "translateY(-40%)",
            ],
            transition: {
              duration: 0.75,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [
                [0.8, 0, 1, 1],
                [0, 0, 0.2, 1],
              ],
              delay: 5.75,
            },
          }}
          onClick={scrollToSection}
        >
          <motion.path
            d="M 51,0 L 0,0 L 50,50 L 100,0"
            strokeWidth={9}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                delay: 4.75,
                duration: 2.5,
                opacity: { duration: 0.1 },
                ease: "easeOut",
              },
            }}
          />
          <motion.path
            d="M 49,0 L 100,0 L 50,50 L 0,0"
            strokeWidth={9}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                delay: 4.75,
                duration: 2.5,
                opacity: { duration: 0.1 },
                ease: "easeOut",
              },
            }}
          />
        </motion.svg>
      </div>
      <SVGFront />
    </div>
  );
}
