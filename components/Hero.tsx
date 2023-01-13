import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";
import SVGLayers from "./SVGLayers";
import { scroller } from "react-scroll";

export default function Hero() {
  const scrollToSection = () => {
    scroller.scrollTo("about", { duration: 1500, smooth: true });
  };

  return (
    <div className="w-full h-screen min-h-[650px] flex justify-center text-white bg-gradient-to-b from-zinc-900 to-slate-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: "-5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col fixed gap-3 sm:gap-6 items-center text-center p-6 pt-[25vh] z-20 "
      >
        <p className="leading-8">
          <span className="sm:text-lg">Hello, my name is</span>
          <br />
          <span className="text-orange-400 text-4xl sm:text-5xl">
            Herman Cai
          </span>
        </p>
        <p className="leading-8">
          <span className="sm:text-lg">
            I&apos;m looking to start my career as a
          </span>
          <br />
          <span className="text-3xl sm:text-4xl">web developer</span>
        </p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
          onClick={scrollToSection}
          className="border border-orange-400 hover:text-black hover:bg-orange-400 active:translate-y-[1px] transition-colors duration-300 px-4 py-2 rounded text-orange-400 mt-3 cursor-pointer"
        >
          About Me
        </motion.button>
      </motion.div>
      <ParticleCanvas />
      <SVGLayers />
    </div>
  );
}
