"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ProjectArrowSVG {
    pointUp: boolean;
}

export default function ProjectArrowSVG({ pointUp }: ProjectArrowSVG) {
    const pointUpProps: SVGMotionProps<SVGLineElement> = {
        stroke: "#fff",
        strokeLinejoin: "round",
        initial: { pathLength: 1 },
        animate: { pathLength: pointUp ? 1 : 0 },
        transition: {
            duration: 0.5,
            delay: pointUp ? 0.5 : 0,
            ease: "easeOut",
        },
    };

    const pointDownProps: SVGMotionProps<SVGLineElement> = {
        stroke: "#fff",
        strokeLinejoin: "round",
        initial: { pathLength: 0 },
        animate: { pathLength: pointUp ? 0 : 1 },
        transition: {
            duration: 0.5,
            delay: pointUp ? 0 : 0.5,
            ease: "easeOut",
        },
    };

    return (
        <svg viewBox="0 0 25 25">
            <motion.line x1="12" y1="0" x2="0" y2="12" {...pointUpProps} />
            <motion.line x1="12" y1="0" x2="24" y2="12" {...pointUpProps} />
            <motion.line x1="12" y1="12" x2="0" y2="24" {...pointUpProps} />
            <motion.line x1="12" y1="12" x2="24" y2="24" {...pointUpProps} />

            <motion.line x1="12" y1="12" x2="0" y2="0" {...pointDownProps} />
            <motion.line x1="12" y1="12" x2="24" y2="0" {...pointDownProps} />
            <motion.line x1="12" y1="24" x2="0" y2="12" {...pointDownProps} />
            <motion.line x1="12" y1="24" x2="24" y2="12" {...pointDownProps} />
        </svg>
    );
}
