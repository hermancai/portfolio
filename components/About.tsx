import Skills from "./Skills";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center text-white scroll-mt-12"
    >
      <div className="w-[95%] md:w-[85%] sm:w-3/4 flex flex-row max-w-[50rem] p-8 gap-8">
        <div className="justify-center items-center hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-32 h-32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="w-12 h-12 block md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>
              <span className="font-raleway text-3xl whitespace-nowrap text-transparent bg-clip-text bg-[linear-gradient(45deg,#ef4444,#f97316,#eab308)]">
                About Me
              </span>
            </p>
          </div>

          <p>
            Hello! My name is Herman Cai and I am a full stack developer. I
            strive for efficiency and pixel-perfection in my web development
            process. My coding philosophy is that I can learn anything necessary
            to get the job done. If you can think of it, I can build it. Please
            feel free to reach out regarding any inquiries or opportunities.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <a
              href="https://github.com/hermancai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 sm:px-3 rounded border border-white text-white bg-[#09090b] w-min hover:drop-shadow-white-sm transition-[drop_shadow] duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hermancai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 sm:px-3 rounded border border-white text-white bg-[#09090b] w-min hover:drop-shadow-white-sm transition-[drop_shadow] duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
