import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  AnimationProps,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

const containerVariants: AnimationProps["variants"] = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const layerVariants: AnimationProps["variants"] = {
  hidden: { y: "5%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

export default function HeroBackground() {
  const { scrollYProgress } = useScroll();
  const y2 = useParallax(scrollYProgress, 200);
  const y3 = useParallax(scrollYProgress, 400);
  const y4 = useParallax(scrollYProgress, 500);

  return (
    <motion.div
      className="w-full h-full absolute overflow-hidden"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="bg-[url(/svglayers/1a.png)] absolute w-full h-full bg-repeat-x z-[5] bg-[bottom_left_-10rem] -bottom-[200px]" />
      <motion.div
        className="bg-[url(/svglayers/2a.png)] absolute w-full h-full bg-repeat-x z-[4] bg-[bottom_right_-20rem] sm:bg-[bottom_right_1rem] -bottom-[150px]"
        style={{ y: y2 }}
        variants={layerVariants}
      />
      <motion.div
        className="bg-[url(/svglayers/3a.png)] absolute w-full h-full bg-repeat-x z-[3] bg-[bottom_left_-80rem] sm:bg-[bottom_left_-70rem] -bottom-[200px]"
        style={{ y: y3 }}
        variants={layerVariants}
      />
      <motion.div
        className="bg-[url(/svglayers/4a.png)] absolute w-full h-full bg-repeat-x z-[2] bg-[bottom_right_-70rem] sm:bottom-[35px]"
        style={{ y: y4 }}
        variants={layerVariants}
      />
    </motion.div>
  );
}
