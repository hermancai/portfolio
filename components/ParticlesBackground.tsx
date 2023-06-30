import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const options: ISourceOptions = {
  pauseOnOutsideViewport: true,
  background: {
    color: "transparent",
  },
  fpsLimit: 60,
  fullScreen: { enable: false },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "connect"],
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
    },
  },
  particles: {
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
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
};

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={options}
      className="h-full"
    />
  );
}
