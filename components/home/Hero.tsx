"use client";

import { useState } from "react";
import { motion, stagger, Variants } from "motion/react";
import TypingAnimation from "./TypingAnimation";
import RotatingCircle from "./RotatingCircle";
import ContactButton from "./ContactButton";

const SKILL_LIST = [
    { name: "TypeScript", path: "/icons/typescript.png" },
    { name: "React.js", path: "/icons/react.png" },
    { name: "Next.js", path: "/icons/next.png" },
    { name: "Tailwind CSS", path: "/icons/tailwindcss.png" },
    { name: "PostgreSQL", path: "/icons/postgres.png" },
];
const WORDS = SKILL_LIST.map((skill) => skill.name);

export default function Hero() {
    const [index, setIndex] = useState(0);

    const titleVariants: Variants = {
        hidden: { opacity: 0, translateY: 10 },
        show: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="relative max-h-[768px] flex flex-col items-center gap-12 py-12">
                <motion.div
                    initial="hidden"
                    animate="show"
                    transition={{ delayChildren: stagger(0.05) }}
                    className="flex flex-col items-center justify-center px-4 text-center gap-1 z-10"
                >
                    <motion.p
                        variants={titleVariants}
                        className="text-sky-400 text-lg tracking-widest"
                    >
                        HERMAN CAI
                    </motion.p>
                    <motion.span
                        variants={titleVariants}
                        className="h-px w-24 bg-sky-400/75"
                    />
                    <motion.p
                        variants={titleVariants}
                        className="text-4xl font-extralight tracking-tight"
                    >
                        Full Stack Developer
                    </motion.p>
                </motion.div>
                <div className="relative">
                    <RotatingCircle currIndex={index} iconList={SKILL_LIST} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
                        <TypingAnimation
                            words={WORDS}
                            index={index}
                            setIndex={setIndex}
                        />
                    </div>
                </div>
                <div className="flex h-full grow z-10 items-center mt-8">
                    <ContactButton />
                </div>
            </div>
        </div>
    );
}
