import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function Hero({ id }) {
  return (
    <div id={id} className="flex flex-col h-screen items-center justify-center space-y-16 bg-hero-bg bg-cover">
      <div className="flex flex-col space-y-3 w-4/5 sm:w-3/4 md:w-[70%] justify-items-start font-serif">
        <p className="text-red-500">Hi, my name is</p>
        <p className="text-3xl">Herman Cai</p>
        <p className="text-3xl text-gray-400">I am a web developer.</p>
      </div>

      <div className="flex w-4/5 sm:w-3/4 md:w-[70%]">
        <div
          className="flex justify-items-start cursor-pointer border-white rounded border py-1 pl-3 pr-2 items-center space-x-2 hover:border-red-500 hover:text-red-500 ease-in-out duration-200"
          onClick={() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="text-sm">More About Me</p>
          <ChevronDoubleDownIcon className="w-7 mt-[8px] animate-bounce text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
