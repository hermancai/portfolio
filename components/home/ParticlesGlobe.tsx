"use client";

import { useCallback, useState, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Image from "next/image";

const mapPoints: [number, number][] = [
    [4, 46],
    [4, 49],
    [13, 42],
    [17, 44],
    [16, 50],
    [5, 37],
    [11, 34],
    [17, 60],
    [11, 55],
    [23, 64],
    [19, 73],
    [19, 82],
    [24, 72],
    [81, 71],
    [87, 64],
    [92, 71],
    [29, 32],
    [21, 37],
    [49, 73],
    [47, 62],
    [38, 57],
    [43, 46],
    [49, 54],
    [56, 59],
    [60, 48],
    [40, 43],
    [43, 39],
    [47, 43],
    [44, 32],
    [52, 39],
    [67, 54],
    [74, 53],
    [78, 47],
    [81, 38],
    [90, 36],
    [73, 43],
    [60, 41],
    [56, 29],
    [87, 28],
    [70, 26],
    [66, 32],
    [74, 29],
    [70, 34],
    [34, 21],
    [26, 22],
];

export default function ParticlesGlobe() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options: ISourceOptions = useMemo(() => {
        const manualParticles = mapPoints.map((points) => {
            return {
                position: {
                    x: points[0],
                    y: points[1],
                },
                options: {
                    move: {
                        enable: false,
                    },
                },
            };
        });
        return {
            pauseOnOutsideViewport: true,
            background: {
                color: "transparent",
            },
            fpsLimit: 60,
            fullScreen: { enable: false },
            particles: {
                links: {
                    color: "#ffffff",
                    distance: 50,
                    enable: true,
                    opacity: 0.75,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 0.1,
                    straight: false,
                },
                collisions: { enable: false },
                number: {
                    value: 75,
                    density: {
                        enable: true,
                        area: 75,
                    },
                },
                opacity: {
                    value: { min: 0.1, max: 1 },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            manualParticles,
        };
    }, []);

    return (
        <div className="h-full w-full rounded-full relative">
            <Particles
                id="tsparticles-globe"
                init={particlesInit}
                options={options}
                className={`${
                    imageLoaded ? "visible" : "invisible"
                } h-full rounded-full overflow-hidden bg-zinc-900 isolate`}
            />
            <Image
                src="/globe.png"
                alt="globe"
                fill
                sizes="(max-width:640px) 50vw"
                priority
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
}
