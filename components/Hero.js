import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function Hero({ heroRef, aboutEntry }) {
  // HeadlessUI's Transition does not work in production build for the hero page,
  //  but it works for other sections. This mount state is a workaround.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="h-screen">
      <div className="z-0">
        <Image
          alt="hero background"
          src="/images/heroBackground.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </div>
      <div
        ref={heroRef}
        className="flex flex-col h-screen items-start justify-center space-y-3 z-10 relative px-[10%] sm:px-[12%] md:px-[15%]"
      >
        <Transition
          appear={true}
          show={isMounted}
          enter="transition-opacity duration-[2000ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          className="flex flex-col space-y-3"
        >
          <p className="text-red-500">Hi, my name is</p>
          <p className="text-3xl">Herman Cai.</p>
        </Transition>
        <Transition
          appear={true}
          show={isMounted}
          enter="transition-opacity duration-1000 delay-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <p className="text-xl text-gray-400 max-w-[20rem]">
            I'm looking for my first opportunity in{" "}
            <span className="text-white">web development</span>.
          </p>
        </Transition>

        <Transition
          appear={true}
          show={isMounted}
          enter="transition-all delay-1000 duration-1000"
          enterFrom="opacity-0 translate-y-[-100%]"
          enterTo="opacity-100 translate-y-0"
        >
          <div
            className="flex justify-items-start cursor-pointer border-white rounded border py-1 pl-3 pr-2 mt-12 items-center space-x-2 hover:border-red-500 hover:text-red-500 ease-in-out duration-200"
            onClick={() => {
              aboutEntry.target?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p className="text-sm">More About Me</p>
            <ChevronDoubleDownIcon className="w-7 mt-[8px] animate-bounce text-red-500" />
          </div>
        </Transition>
      </div>
      <span className="block w-full h-[0.5px] bg-gray-900" />
    </div>
  );
}

export default Hero;
