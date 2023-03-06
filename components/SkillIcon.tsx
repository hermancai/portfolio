import { motion, AnimationProps } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  path: string;
  showText: boolean;
  index: number;
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
  index,
  handleClick,
}: Props) {
  const [delay, setDelay] = React.useState(0);

  // Add stagger effect when all icons should flip
  React.useEffect(() => {
    setDelay(index * 0.05);
  }, [showText, index]);

  // Remove delay when only flipping self
  const flipSelf = () => {
    setDelay(0);
    handleClick();
  };

  return (
    <motion.div
      className="relative h-20 w-20 flex justify-center items-center cursor-pointer rounded-full"
      style={{ perspective: "120px" }}
      onClick={flipSelf}
      variants={variants}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: showText ? "180deg" : "0deg",
          transition: { duration: 0.8, delay: delay },
        }}
      >
        <motion.div
          className="absolute w-full h-full bg-slate-900 p-4 border-[3px] border-black hover:border-orange-500 transition-colors duration-300 rounded-full flex justify-center items-center shadow-sm shadow-slate-900"
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
          className="absolute w-full h-full flex justify-center items-center bg-slate-900 p-4 border-[3px] border-black hover:border-orange-500 transition-colors duration-300 rounded-full shadow-sm shadow-slate-900"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            rotateY: "180deg",
            transform: "rotateX(0deg)",
          }}
        >
          <span className="absolute w-1/2 h-1/2 bg-slate-700 rotate-45 border-2 border-black" />
          <p className="relative font-mono">{name}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
