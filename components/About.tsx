import SectionLayout from "./SectionLayout";

export default function About() {
    return (
        <SectionLayout
            largeIcon={
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
            }
            smallIcon={
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
            }
            title="About Me"
            id="about"
            content={
                <>
                    <p className="leading-relaxed">
                        Hello! My name is Herman Cai. I am a full stack
                        developer ready to make impactful contributions for your
                        company. I aim to create visually appealing and
                        user-friendly websites supported by robust back-end
                        services. I am confident in my ability to adapt and
                        learn new technologies, so I can always have the proper
                        tools to get the job done right. Please feel free to
                        reach out regarding any inquiries or opportunities!
                    </p>
                    <div className="flex flex-row gap-4 mt-2">
                        <a
                            href="https://github.com/hermancai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-1 sm:px-3 rounded border border-white text-white bg-zinc-950 w-min hover:drop-shadow-white-sm transition-[drop_shadow] duration-200"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hermancai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-1 sm:px-3 rounded border border-white text-white bg-zinc-950 w-min hover:drop-shadow-white-sm transition-[drop_shadow] duration-200"
                        >
                            LinkedIn
                        </a>
                    </div>
                </>
            }
        />
    );
}
