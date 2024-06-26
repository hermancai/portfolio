import Image from "next/image";

export interface CardContent {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveLink: string;
    github: string;
    notes?: string;
}

interface CardProps {
    project: CardContent;
}

export default function ProjectCard({ project }: CardProps) {
    return (
        <div className="flex flex-col relative">
            <Image
                src={project.image}
                alt={project.title + " screenshot"}
                width={500}
                height={500}
                sizes="(max-width:450px) 75vw"
                className="h-auto w-full border border-black"
            />

            <div className="bg-zinc-950 rounded-b py-2 px-4 flex flex-col">
                <p className="text-xl underline">{project.title}</p>
                <p className="mb-2">{project.description}</p>
                <div className="flex flex-row gap-1 flex-wrap my-2">
                    {project.tech.map((tech) => {
                        return (
                            <div
                                className="text-sm font-light py-1 px-3 bg-zinc-800 rounded-full whitespace-nowrap"
                                key={tech}
                            >
                                {tech}
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-row gap-2 my-2 whitespace-nowrap">
                    <a
                        className={`px-4 py-1 sm:px-3 rounded text-black w-min ${
                            project.notes
                                ? "border border-zinc-600 text-zinc-600 cursor-default pointer-events-none"
                                : "bg-gradient-orange hover:drop-shadow-orange transition-[drop_shadow] duration-200"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.liveLink}
                    >
                        Visit
                    </a>
                    <a
                        className="px-2 py-1 sm:px-3 rounded border border-white text-white bg-zinc-950 w-min hover:drop-shadow-white-sm transition-[drop_shadow] duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                    >
                        GitHub
                    </a>
                </div>
                {project.notes && (
                    <div className="text-red-500 mb-1">{project.notes}</div>
                )}
            </div>
        </div>
    );
}
