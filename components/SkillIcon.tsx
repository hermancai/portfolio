import { motion, AnimationProps } from "framer-motion";
import Image from "next/image";

interface Props {
  name: string;
  path: string;
  showText: boolean;
  handleClick: () => void;
}

const variants: AnimationProps["variants"] = {
  hidden: { y: "10%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

export default function SkillIcon({
  name,
  path,
  showText,
  handleClick,
}: Props) {
  return (
    <motion.div
      className="relative h-24 w-24 p-2 flex justify-center items-center cursor-pointer bg-slate-900 rounded-full hover:shadow-[0_0_0_3px_rgb(249,115,22)] transition-shadow duration-300"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
      variants={variants}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: showText ? "180deg" : "0deg",
          transition: { duration: 0.8 },
        }}
      >
        <motion.div
          className="absolute w-full h-full bg-transparent flex justify-center items-center"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            transform: "rotateX(0deg)",
          }}
        >
          <Image
            src={path}
            alt={name}
            width={0}
            height={0}
            className="object-fill w-3/4 h-3/4"
            sizes="(max-width: 768px) 25vw,33vw"
          />
        </motion.div>
        <motion.div
          className="absolute w-full h-full flex justify-center items-center"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            rotateY: "180deg",
            transform: "rotateX(0deg)",
          }}
        >
          <span className="absolute w-3/4 h-3/4 bg-slate-700 border-2 border-slate-900 rotate-45" />
          <p className="relative font-mono">{name}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
