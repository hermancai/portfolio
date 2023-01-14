import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticleCanvas() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="h-screen w-full absolute top-0 left-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          autoPlay: true,
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "connect"],
              },
              onClick: {
                enable: true,
                mode: ["repulse"],
              },
            },
            modes: {
              grab: {
                distance: 200,
              },
              connect: {
                radius: 200,
                links: {
                  duration: 1000,
                },
              },
              repulse: {
                duration: 2,
              },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          particles: {
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.1,
              straight: false,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
              value: { min: 0, max: 1 },
            },
            size: {
              value: { min: 1, max: 2 },
            },
            number: {
              density: {
                enable: true,
                area: 1500,
                factor: 1500,
              },
            },
          },
          fullScreen: { enable: false },
        }}
      />
    </div>
  );
}
