import SectionLayout from "./SectionLayout";
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
    {
        title: "WebDevStudy",
        description:
            "View common web development technical interview questions.",
        image: "/projects/webdevstudy.png",
        tech: ["Next.js"],
        liveLink: "https://webdevstudy.vercel.app/",
        github: "https://github.com/hermancai/webdevstudy",
    },
];

export default function Projects() {
    return (
        <SectionLayout
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
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                </svg>
            }
            largeIcon={
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
            }
            title="Projects"
            id="projects"
            content={
                <div className="flex flex-col gap-6">
                    {cardList.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            }
        />
    );
}
