import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function Hero({ id }) {
  return (
    <div
      id={id}
      className="flex flex-col w-full items-center justify-center h-screen text-3xl px-10 text-center"
    >
      <p>
        Hello, I'm <span className="text-red-500">Herman</span>.
      </p>
      <p>I am a full-stack developer.</p>
      <ChevronDoubleDownIcon
        className="w-8 mt-10 animate-bounce cursor-pointer text-red-500"
        onClick={() => {
          document
            .getElementById("aboutWrapper")
            .scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}

export default Hero;
