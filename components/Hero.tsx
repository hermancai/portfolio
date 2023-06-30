import ParticlesBackground from "./ParticlesBackground";
import ParticlesGlobe from "./ParticlesGlobe";

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen flex justify-center items-center relative"
    >
      <span className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-zinc-900 z-30" />
      <div className="w-[80%] sm:w-3/4 px-4 py-32 flex flex-col justify-center max-w-[50rem]">
        <div className="flex flex-col font-raleway text-white z-20 gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row whitespace-pre text-lg sm:text-2xl">
            <p>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(45deg,#ef4444,#f97316,#eab308)]">
                Herman Cai{" "}
              </span>
            </p>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl sm:text-4xl">
              Transforming your ideas
              <br />
              into web experiences
            </p>
          </div>

          <div className="mt-2 whitespace-nowrap text-base sm:text-lg gap-4 flex">
            <button
              className="cursor-pointer px-2 py-1 sm:px-3 rounded bg-[linear-gradient(45deg,#ef4444,#f97316,#eab308)] text-black w-min hover:drop-shadow-orange transition-[drop_shadow] duration-200"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </button>
            <button
              className="cursor-pointer px-2 py-1 sm:px-3 rounded border border-white text-white bg-zinc-900 w-min hover:drop-shadow-white transition-[drop_shadow] duration-200"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-3/4 max-w-[12rem] sm:max-w-[18rem] md:max-w-[22rem] z-10 aspect-square self-end -mt-[1rem] sm:-mt-[5rem] md:-mt-[8rem]">
          <ParticlesGlobe />
        </div>
      </div>
      <div className="w-full h-full absolute left-0 top-0">
        <ParticlesBackground />
      </div>
    </div>
  );
}
