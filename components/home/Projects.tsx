"use client";

import { motion } from "motion/react";
import ProjectCard, { CardContent } from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const cardList: CardContent[] = [
    {
        title: "Earthquake Map",
        description: "Search and display USGS earthquake data on a map.",
        image: "/projects/eqmapnext.png",
        tech: ["React", "TypeScript", "Google Cloud Platform"],
        liveLink: "https://earthquakemap.vercel.app/",
        github: "https://github.com/hermancai/eqmap_next",
    },
    {
        title: "Cloud Storage",
        description: "Store images remotely with a personal account.",
        image: "/projects/photosafe.png",
        tech: ["Next.js", "Supabase", "Amazon Web Services"],
        liveLink: "https://photosafe.vercel.app/",
        github: "https://github.com/hermancai/storage-next",
    },

    {
        title: "WebDev Notes",
        description: "Study common webdev technical questions and Leetcode.",
        image: "/projects/webdevstudy.png",
        tech: ["Next.js"],
        liveLink: "https://webdevstudy.vercel.app/",
        github: "https://github.com/hermancai/webdevstudy",
    },
];

export default function Projects() {
    return (
        <div className="w-full flex flex-col items-center justify-center p-2 gap-16 my-12">
            <SectionTitle name="Projects" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.5 }}
                className="max-w-6xl gap-12 flex flex-wrap justify-center"
            >
                {cardList.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </motion.div>
        </div>
    );
}
