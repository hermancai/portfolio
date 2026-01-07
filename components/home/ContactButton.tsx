"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "motion/react";

export default function ContactButton() {
    const pRef = useRef<HTMLParagraphElement>(null);
    const svgRef = useRef<HTMLDivElement>(null);
    const [totalWidth, setTotalWidth] = useState(0);

    useLayoutEffect(() => {
        if (!pRef.current) return;

        const measure = () => {
            const pW = pRef.current!.getBoundingClientRect().width;
            // svg width = 24px; padding = 4px;
            setTotalWidth(Math.ceil(pW + 28));
        };

        measure();
        document.fonts.ready.then(measure);
    }, []);

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
            onClick={() =>
                document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 bg-white text-black group z-10 h-min"
        >
            <div className="overflow-hidden" style={{ width: totalWidth }}>
                <div className="flex flex-nowrap gap-1 group-hover:-translate-x-7 transition-transform duration-500">
                    <div
                        ref={svgRef}
                        className="opacity-1 group-hover:opacity-0 transition-[opacity]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </div>

                    <p ref={pRef}>Contact</p>

                    <div className="transition-transform -translate-y-full delay-0 duration-500 group-hover:translate-y-0 group-hover:delay-150">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-6 ml-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.button>
    );
}
