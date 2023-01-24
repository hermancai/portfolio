import React from "react";
import { motion, useInView } from "framer-motion";

export default function SectionHeader({ text }: { text: string }) {
  const ref = React.useRef(null);
  const inView = useInView(ref);

  return (
    <p className="text-3xl text-slate-500 whitespace-pre" ref={ref}>
      <motion.span
        className="inline-block"
        animate={
          inView
            ? { opacity: 1, x: "0%", transition: { duration: 1 } }
            : { opacity: 0, x: "-200%" }
        }
      >{`< `}</motion.span>
      <motion.span
        animate={
          inView
            ? { opacity: 1, y: "0%", transition: { duration: 1 } }
            : { opacity: 0, y: "50%" }
        }
        className="text-white inline-block"
      >
        {text}
      </motion.span>
      <motion.span
        className="inline-block"
        animate={
          inView
            ? { opacity: 1, x: "0%", transition: { duration: 1 } }
            : { opacity: 0, x: "200%" }
        }
      >{` />`}</motion.span>
    </p>
  );
}
