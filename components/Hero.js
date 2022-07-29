import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function Hero({ id }) {
  // HeadlessUI's Transition does not work in production build for the hero page,
  //  but it works for other sections. This mount state is a workaround.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  return (
    <div
      id={id}
      className="flex flex-col h-screen items-center justify-center space-y-16 bg-hero-bg bg-cover"
    >
      <div className="flex flex-col space-y-3 w-4/5 sm:w-3/4 md:w-[70%] justify-items-start">
        <Transition
          appear={true}
          show={isMounted}
          enter="transition-opacity duration-[2000ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          className="flex flex-col space-y-3"
        >
          <p className="text-red-500">Hi, my name is</p>
          <p className="text-3xl">Herman Cai</p>
        </Transition>
        <Transition
          appear={true}
          show={isMounted}
          enter="transition-opacity duration-1000 delay-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <p className="text-3xl text-gray-400">I am a web developer.</p>
        </Transition>
      </div>
      <div className="flex w-4/5 sm:w-3/4 md:w-[70%]">
        <Transition
          appear={true}
          show={isMounted}
          enter="transition-all delay-1000 duration-1000"
          enterFrom="opacity-0 translate-y-[-200%]"
          enterTo="opacity-100 translate-y-0"
        >
          <div
            className="flex justify-items-start cursor-pointer border-white rounded border py-1 pl-3 pr-2 items-center space-x-2 hover:border-red-500 hover:text-red-500 ease-in-out duration-200"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p className="text-sm">More About Me</p>
            <ChevronDoubleDownIcon className="w-7 mt-[8px] animate-bounce text-red-500" />
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Hero;
