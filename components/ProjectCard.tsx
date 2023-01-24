import React from "react";
import Image from "next/image";
import { motion, AnimationProps, useInView } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";

// SVG viewbox: 0 0 340 219
// Image dimensions: 320 x 180 (16 : 9)
const widthFR = "94%";
const topOffset = "4.5%";

// Firefox has lots of sub-pixel rendering/shifting issues on elements with transitions.
//     Depends on client screen resolution.

// Small rotation applied to cards -> smoother transitions on firefox.

const cardVariants: AnimationProps["variants"] = {
  selected: {
    opacity: 1,
    rotateY: 0,
    zIndex: 40,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  notSelected: (i) => ({
    scale: 1 - Math.abs(i * 0.15),
    rotateY: 0.0001,
    opacity: 1 - Math.abs(i * 0.45),
    zIndex: 40 - Math.abs(i),
    x: i ? i * 85 : 0,
    filter: `blur(${Math.abs(i)}px)`,
    transition: { duration: 0.35, ease: "easeInOut" },
  }),
};

export interface CardContent {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  github: string;
}

interface CardProps {
  index: number;
  selectedCard: number;
  card: CardContent;
}

export default function ProjectCard({ index, selectedCard, card }: CardProps) {
  const ref = React.useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      className="bg-slate-900 w-[85vw] sm:w-[400px] h-full rounded border-2 border-slate-600 relative"
      ref={ref}
      variants={cardVariants}
      animate={selectedCard === index ? "selected" : "notSelected"}
      custom={selectedCard === index ? 0 : selectedCard - index}
    >
      <motion.div
        className="p-8 flex flex-col gap-4"
        animate={
          inView
            ? { opacity: 1, transition: { duration: 1, delay: 0.25 } }
            : { opacity: 0 }
        }
      >
        <div className="relative w-full h-full">
          <motion.div
            animate={
              selectedCard === index
                ? { opacity: 1, transition: { duration: 0.5, delay: 0.25 } }
                : { opacity: 0, transition: { duration: 0.5, delay: 0.25 } }
            }
            className={`absolute w-[${widthFR}] top-[${topOffset}] bg-white aspect-video mx-auto left-0 right-0`}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={0}
              height={0}
              fill
              sizes="(max-width: 768px) 50vw,33vw"
            />
          </motion.div>
          <Image
            src="/projects/monitor.svg"
            width={0}
            height={0}
            alt="screen svg"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl underline">{card.title}</p>
          <p className="text-gray-100">{card.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {card.tech.map((word, i) => (
            <p
              key={i}
              className="whitespace-nowrap bg-slate-700 text-sm py-1 px-2 rounded"
            >
              {word}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-1">
          {card.liveLink === "" ? null : (
            <a
              className={`px-3 py-2 bg-black text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-black transition-colors duration-300 rounded flex-1 max-w-[50%] flex flex-nowrap items-center justify-center gap-2 ${
                selectedCard === index
                  ? "cursor-pointer"
                  : "pointer-events-none"
              }`}
              target="_blank"
              rel="noopener noreferrer"
              href={card.liveLink}
            >
              <ArrowTopRightOnSquareIcon className="h-4" />
              Visit
            </a>
          )}
          <a
            className={`px-3 py-2 bg-black border border-white hover:border-orange-400 hover:text-orange-400 transition-colors duration-300 rounded flex-1 max-w-[50%] flex flex-nowrap items-center justify-center gap-2 ${
              selectedCard === index ? "cursor-pointer" : "pointer-events-none"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            href={card.github}
          >
            <CodeBracketIcon className="h-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
