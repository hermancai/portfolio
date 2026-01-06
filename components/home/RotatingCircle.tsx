"use client";

import {
    useState,
    useRef,
    useEffect,
    useLayoutEffect,
    useMemo,
    Fragment,
    CSSProperties,
} from "react";
import Image from "next/image";
import { motion, stagger, Variants } from "motion/react";

const PAD = 200;

interface RotatingCircleProps {
    iconList: { name: string; path: string }[];
    currIndex: number;
}

interface SVGCircle {
    cx: number;
    cy: number;
    r: number;
}

export default function RotatingCircle({
    iconList,
    currIndex,
}: RotatingCircleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [containerSize, setContainerSize] = useState<SVGCircle>();
    const [iconCircles, setIconCircles] = useState<SVGCircle[]>([]);

    // Rotation degree must always increase to keep clockwise
    const step = Math.floor(360 / iconList.length);
    const [turns, setTurns] = useState(0);
    const prevIndex = useRef(currIndex);
    useEffect(() => {
        if (currIndex < prevIndex.current) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTurns((prev) => prev + 1);
        }
        prevIndex.current = currIndex;
    }, [currIndex, iconList.length]);

    // Calculate circle dimensions in svg
    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver(([entry]) => {
            const containerRect = containerRef.current!.getBoundingClientRect();

            const iconMasks = iconRefs.current
                .map((el) => {
                    if (!el) return null;

                    const iconRect = el.getBoundingClientRect();
                    return {
                        cx:
                            iconRect.left -
                            containerRect.left +
                            iconRect.width / 2,
                        cy:
                            iconRect.top -
                            containerRect.top +
                            iconRect.height / 2,
                        r: iconRect.width * 0.75,
                    };
                })
                .filter((item) => item !== null);

            setContainerSize({
                cx: containerRect.width / 2,
                cy: containerRect.height / 2,
                r: containerRect.width / 2,
            });
            setIconCircles(iconMasks);
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const circleSegment = useMemo(() => {
        const arc = Math.floor(45 / iconList.length);
        return `white 0% ${arc}%, black ${arc}% ${100 - arc}%, white ${
            100 - arc
        }% 100%`;
    }, [iconList.length]);

    const iconVariants: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <div
            ref={containerRef}
            className="relative"
            style={
                {
                    "--circle-size": "clamp(250px, 85vw, 350px)",
                    "--icon-size": "clamp(32px, 10vw, 45px)",
                    "--radius": "calc(var(--circle-size) / 2)",
                } as CSSProperties
            }
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.8, duration: 1 },
                }}
                className="absolute inset-0 w-full h-full"
            >
                <div
                    className="absolute inset-0 rounded-full duration-[2000ms]"
                    style={{
                        backgroundImage: `conic-gradient(${circleSegment})`,
                        transform: `scale(1.25) rotate(${
                            turns * 360 + currIndex * step
                        }deg)`,
                        filter: "blur(15px)",
                    }}
                />
                <svg
                    className="absolute"
                    style={{
                        height: `calc(100% + ${PAD}px)`,
                        width: `calc(100% + ${PAD}px)`,
                        inset: PAD / -2,
                    }}
                >
                    <defs>
                        <mask
                            id="border-mask"
                            maskUnits="userSpaceOnUse"
                            width="1000"
                            height="1000"
                        >
                            <rect fill="white" width="100%" height="100%" />
                            <g transform={`translate(${PAD / 2} ${PAD / 2})`}>
                                <circle
                                    cx={containerSize?.cx}
                                    cy={containerSize?.cy}
                                    r={containerSize && containerSize.r + 1}
                                    fill="black"
                                />
                                <circle
                                    cx={containerSize?.cx}
                                    cy={containerSize?.cy}
                                    r={containerSize?.r}
                                    fill="white"
                                />

                                {iconCircles.map((icon, i) => (
                                    <Fragment key={i}>
                                        <circle
                                            cx={icon.cx}
                                            cy={icon.cy}
                                            r={icon.r + 1}
                                            fill="black"
                                        />
                                        <circle
                                            cx={icon.cx}
                                            cy={icon.cy}
                                            r={icon.r}
                                            fill="white"
                                        />
                                    </Fragment>
                                ))}
                            </g>
                        </mask>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="black"
                        mask="url(#border-mask)"
                    />
                </svg>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="show"
                transition={{
                    delayChildren: stagger(0.15, { startDelay: 0.5 }),
                }}
                className="relative rounded-full [width:var(--circle-size)] [height:var(--circle-size)]"
            >
                {iconList.map((skill, i) => (
                    <motion.div
                        key={i}
                        ref={(el) => {
                            iconRefs.current[i] = el;
                        }}
                        style={
                            {
                                "--i": i,
                                "--n": iconList.length,
                            } as CSSProperties
                        }
                        className={` absolute inset-1/2 rounded-full flex justify-center items-center
                                            [width:var(--icon-size)] [height:var(--icon-size)] 
                                            [margin:calc(-1*var(--icon-size)/2)]
                                            [transform:rotate(calc(var(--i)*360deg/var(--n)))translateY(calc(-1*var(--radius)))rotate(calc(-1*var(--i)*360deg/var(--n)))]
                                        `}
                        variants={iconVariants}
                    >
                        <Image
                            src={skill.path}
                            alt={skill.name}
                            width={50}
                            height={50}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
