import { motion, AnimationProps } from "framer-motion";
import useParallax from "../hooks/useParallax";

const strokeVariants: AnimationProps["variants"] = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: { duration: 1.25 },
  },
};

const delayStrokeVariants: AnimationProps["variants"] = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: { delay: 0.75, duration: 1.25 },
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

const delayFillVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.75 },
  },
};

export default function HeroBackground() {
  const [y1, y2] = useParallax([0, -200]);

  return (
    <div className="w-full h-full absolute bottom-0 bg-slate-800">
      <motion.div style={{ y: y1 }} className="absolute bottom-0 w-full h-full">
        <span className="w-full h-1/2 top-1/4 absolute -skew-y-6">
          <motion.span
            className="absolute w-full h-full top-0 bg-slate-700"
            initial="hidden"
            animate="visible"
            variants={fillVariants}
            id="grid-bg"
          />
          <motion.span
            className="absolute h-1 bg-slate-900 top-0 left-0"
            initial="hidden"
            animate="visible"
            variants={strokeVariants}
          />
          <motion.span
            className="absolute h-1 bg-slate-900 bottom-0 left-0"
            initial="hidden"
            animate="visible"
            variants={strokeVariants}
          />
        </span>
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 w-full h-full">
        <span className="w-full h-1/2 top-1/4 absolute skew-y-6">
          <motion.span
            className="absolute w-full h-full top-0 bg-slate-900"
            initial="hidden"
            animate="visible"
            variants={delayFillVariants}
          />
          <motion.span
            className="absolute h-1 bg-black top-0 right-0"
            initial="hidden"
            animate="visible"
            variants={delayStrokeVariants}
          />
          <motion.span
            className="absolute h-1 bg-black bottom-0 right-0"
            initial="hidden"
            animate="visible"
            variants={delayStrokeVariants}
          />
        </span>
      </motion.div>
    </div>
  );
}
