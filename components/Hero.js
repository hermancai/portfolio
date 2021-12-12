import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function Hero({ id }) {
  return (
    <div id={id} className="flex flex-col h-screen items-center justify-center space-y-16">
      <div className="flex flex-col space-y-3 w-[80%] sm:w-3/4 md:w-[70%] justify-items-start">
        <p className="text-red-500">Hi, my name is</p>
        <p className="text-3xl">Herman Cai</p>
        <p className="text-3xl text-gray-400">I am a web developer.</p>
      </div>

      <div className="flex w-[80%] sm:w-3/4 md:w-[70%]">
        <div
          className="flex justify-items-start cursor-pointer border-white rounded border py-1 pl-3 pr-2 items-center space-x-2"
          onClick={() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="text-sm">More About Me</p>
          <ChevronDoubleDownIcon className="w-7 animate-bounce text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
