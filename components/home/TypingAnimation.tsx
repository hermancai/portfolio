"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "motion/react";
import useDelayRender from "../../hooks/useDelayRender";

interface TypingAnimationProps {
    words: string[];
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const PAUSE_DURATION = 1000;

export default function TypingAnimation({
    words,
    index,
    setIndex,
}: TypingAnimationProps) {
    const shouldRender = useDelayRender(1400);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currWordLength = words[index].length;

    // handle typing animation
    useEffect(() => {
        if (!shouldRender) return;

        let timeout: number;

        if (!isDeleting && subIndex === currWordLength) {
            // done typing current word
            timeout = window.setTimeout(() => {
                setIsDeleting(true);
            }, PAUSE_DURATION);
        } else if (isDeleting && subIndex === 0) {
            // done deleting current word
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDeleting(false);
            setIndex((i) => (i + 1) % words.length);
        } else {
            // type or delete current word
            timeout = window.setTimeout(
                () => {
                    setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
                },
                isDeleting ? DELETE_SPEED : TYPE_SPEED
            );
        }

        return () => window.clearTimeout(timeout);
    }, [index, subIndex, isDeleting, shouldRender, currWordLength]);

    if (!shouldRender) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
        >
            <p className="text-gray-400">Building with</p>
            <p className="whitespace-pre flex flex-nowrap justify-center items-center h-5">
                {words[index].slice(0, subIndex)}
                <noscript>JavaScript disabled :&#40;</noscript>
                <span
                    className={`inline-block h-5 border-r ${
                        !isDeleting && subIndex === currWordLength
                            ? "animate-blink"
                            : ""
                    }`}
                />
            </p>
        </motion.div>
    );
}
