"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import ProjectArrowSVG from "./ProjectArrowSVG";

export interface CardContent {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveLink: string;
    github: string;
}

interface CardProps {
    project: CardContent;
}

export default function ProjectCard({ project }: CardProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const [imageHeight, setImageHeight] = useState(0);
    const windowRef = useRef<HTMLDivElement>(null);
    const [windowHeight, setWindowHeight] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

    useLayoutEffect(() => {
        if (!windowRef.current || !imageRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === windowRef.current) {
                    setWindowHeight(entry.contentRect.height);
                }
                if (entry.target === imageRef.current) {
                    setImageHeight(entry.contentRect.height);
                }
            }
        });

        observer.observe(windowRef.current);
        observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-80 min-w-72 relative border flex flex-col gap-4 items-center p-4 text-center shadow-[4px_4px_rgb(255,255,255,1)]">
            <div className="absolute -top-6 bg-black p-2 text-xl">
                {project.title}
            </div>
            <div className="overflow-hidden">
                <div
                    className="flex flex-col transition-transform duration-1000"
                    style={{
                        height: windowHeight,
                        transform: `translateY(-${
                            showInfo ? imageHeight : "0"
                        }px)`,
                    }}
                >
                    <div ref={windowRef}>
                        <Image
                            ref={imageRef}
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={300}
                        />
                        <div>{project.description}</div>
                    </div>
                    <div
                        className="flex flex-col gap-1 justify-center items-center font-mono shrink-0"
                        style={{
                            height: imageHeight,
                        }}
                    >
                        <p className="font-light text-gray-400">Made with:</p>
                        <div className="flex flex-wrap justify-center gap-1">
                            {project.tech.map((el, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="border border-gray-400 rounded-md px-2 whitespace-nowrap h-min bg-neutral-800"
                                    >
                                        {el}
                                    </div>
                                );
                            })}
                        </div>
                        <a
                            href={project.github}
                            target="_blank"
                            tabIndex={showInfo ? 0 : -1}
                            className="relative flex flex-nowrap gap-1 p-2 border border-green-400 mt-auto mb-px hover:bg-neutral-900 transition-colors"
                        >
                            <Image
                                src="/icons/github.png"
                                alt={project.title + " github"}
                                width={50}
                                height={50}
                                className="w-6 h-6 aspect-square"
                            />
                            Github
                        </a>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setShowInfo((prev) => !prev)}
                aria-label="show info"
                className="w-full h-12 flex justify-center items-center my-2 hover:bg-neutral-900 transition-colors"
            >
                <div className="w-10 h-10">
                    <ProjectArrowSVG pointUp={!showInfo} />
                </div>
            </button>

            <a
                href={project.liveLink}
                target="_blank"
                className="w-full flex flex-nowrap justify-center items-center gap-1 py-2 px-4 mt-auto border border-blue-400 text-blue-400 hover:bg-neutral-900 transition-colors"
            >
                VISIT
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                </svg>
            </a>
        </div>
    );
}
