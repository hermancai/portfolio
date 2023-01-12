import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function SVGLayers() {
  const { scrollYProgress } = useScroll();
  const y2 = useParallax(scrollYProgress, 50);
  const y3 = useParallax(scrollYProgress, 100);
  const y4 = useParallax(scrollYProgress, 150);
  const y5 = useParallax(scrollYProgress, 200);

  return (
    <div className="w-full h-full absolute bottom-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: "60%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ y: { duration: 1.75 }, delay: 0.2, ease: "easeIn" }}
        className="bg-[url(/svglayers/vlayer5.svg)] sm:bg-[url(/svglayers/hlayer5.svg)] absolute w-full h-full bg-bottom bg-contain bg-no-repeat"
        style={{ y: y5 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: "60%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ y: { duration: 1.75 }, ease: "easeIn" }}
        className="bg-[url(/svglayers/vlayer4.svg)] sm:bg-[url(/svglayers/hlayer4.svg)] absolute w-full h-full bg-bottom bg-contain bg-no-repeat"
        style={{ y: y4 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ y: { duration: 1.5 }, ease: "easeIn" }}
        className="bg-[url(/svglayers/vlayer3.svg)] sm:bg-[url(/svglayers/hlayer3.svg)] absolute w-full h-full bg-bottom bg-contain bg-no-repeat pointer-events-none z-20"
        style={{ y: y3 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: "25%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ y: { duration: 1 }, delay: 0.25, ease: "easeIn" }}
        className="bg-[url(/svglayers/vlayer2.svg)] sm:bg-[url(/svglayers/hlayer2.svg)] absolute w-full h-full bg-bottom bg-contain bg-no-repeat pointer-events-none z-20"
        style={{ y: y2 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: "25%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ y: { duration: 1 }, ease: "easeIn" }}
        className="bg-[url(/svglayers/vlayer1.svg)] sm:bg-[url(/svglayers/hlayer1.svg)] absolute w-full h-full bg-bottom bg-contain bg-no-repeat pointer-events-none z-20"
      ></motion.div>
    </div>
  );
}
