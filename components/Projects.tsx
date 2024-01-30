import ProjectCard, { CardContent } from "./ProjectCard";

const cardList: CardContent[] = [
    {
        title: "PhotoSafe",
        description: "Back up photos using cloud storage.",
        image: "/projects/photosafe.png",
        tech: ["Next.js", "Amazon Web Services", "Supabase"],
        liveLink: "https://photosafe.vercel.app/",
        github: "https://github.com/hermancai/storage-next",
    },
    {
        title: "Earthquake Map",
        description:
            "Search and visualize earthquake data with a map, table, and charts.",
        image: "/projects/eqmapnext.png",
        tech: ["React", "TypeScript", "Google Cloud Platform"],
        liveLink: "https://earthquakemap.vercel.app/",
        github: "https://github.com/hermancai/eqmap_next",
    },
];

export default function Projects() {
    return (
        <div
            id="projects"
            className="flex flex-col justify-center items-center text-white scroll-mt-12"
        >
            <div className="w-[95%] md:w-[85%] sm:w-3/4 flex flex-row max-w-[50rem] p-8 gap-8">
                <div className="md:min-w-[8rem] md:min-h-[8rem] justify-center hidden md:flex md:mt-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={0.7}
                        stroke="currentColor"
                        className="w-24 h-24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                    </svg>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row items-center gap-3">
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
                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                        </svg>
                        <p>
                            <span className="font-raleway text-3xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-orange">
                                Projects
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        {cardList.map((project, i) => (
                            <ProjectCard key={i} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
