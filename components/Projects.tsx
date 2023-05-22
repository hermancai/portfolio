import React from "react";
import ProjectCard, { CardContent } from "./ProjectCard";
import { Element } from "react-scroll";
import { motion, AnimationProps, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const cardList: CardContent[] = [
  {
    title: "Earthquake Map",
    description:
      "Search and visualize earthquake data on a map, table, and charts.",
    image: "/projects/eqmapnext.png",
    tech: ["Google Cloud Platform", "TypeScript", "React", "TailwindCSS"],
    liveLink: "https://earthquakemap.vercel.app/",
    github: "https://github.com/hermancai/eqmap_next",
  },
  {
    title: "Image Cloud Storage",
    description: "Upload and access remotely stored text and image files.",
    image: "/projects/notes.png",
    tech: [
      "Amazon Web Services",
      "TypeScript",
      "React",
      "Redux",
      "Material UI",
      "Node",
      "Express",
      "PostgreSQL",
    ],
    liveLink: "https://note-storage.up.railway.app/",
    github: "https://github.com/hermancai/notes",
  },
  {
    title: "Project Tracker",
    description: "Keep track of personal projects and tasks.",
    image: "/projects/ppm.png",
    tech: ["React", "Redux", "TailwindCSS", "Node", "Express", "MongoDB"],
    liveLink: "",
    github: "https://github.com/hermancai/project_manager",
  },
  {
    title: "Chat App",
    description: "Send messages in real time, like with Slack or Discord.",
    image: "/projects/chatapp.png",
    tech: ["React", "Redux", "TailwindCSS", "Firebase"],
    liveLink: "",
    github: "https://github.com/hermancai/chat_app",
  },
  {
    title: "My Portfolio",
    description: "",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    liveLink: "",
    github: "https://github.com/hermancai/portfolio",
  },
];

const strokeVariants: AnimationProps["variants"] = {
  hidden: {
    width: 0,
  },
  show: {
    width: "100%",
    transition: { duration: 1.25, ease: "easeInOut" },
  },
};

const fillVariants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
};

export default function Projects() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>(new Array());
  const [selectedCard, setSelectedCard] = React.useState(0);
  const inView = useInView(containerRef, { once: true });

  // Move first project card into center of viewport
  React.useEffect(() => {
    if (!containerRef.current || !cardRefs.current[0]) return;
    scrollToCard(0);
  }, [containerRef, cardRefs]);

  // Update container scroll position instead of scrollIntoView
  const scrollToCard = (card: number) => {
    if (!containerRef.current || !cardRefs.current[card]) return;

    // Scrollbar width interferes with viewport center
    const scrollOffset = Math.floor(
      (window.innerWidth - document.documentElement.clientWidth) / 2
    );

    // Center of selected card
    containerRef.current.scrollLeft =
      (card + 0.5) * cardRefs.current[card]?.clientWidth! + scrollOffset;
    setSelectedCard(card);
  };

  return (
    <Element name="Projects" id="projects" className="pt-40 bg-slate-800">
      <div className="w-full flex flex-col gap-6 justify-center items-center text-white relative">
        <SectionHeader text="Projects" />
        <div className="flex flex-row flex-nowrap gap-8">
          {cardList.map((_, i) => (
            <div
              className={`w-6 h-6 rounded-full cursor-pointer border-2 border-gray-900 transition-colors duration-300 hover:border-orange-400 ${
                i === selectedCard ? "bg-orange-400" : "bg-slate-600"
              }`}
              key={i}
              onClick={() => scrollToCard(i)}
            />
          ))}
        </div>
        <div className="max-w-full w-full relative overflow-hidden">
          <div className="absolute bottom-[5%] w-full h-[90%]">
            <motion.span
              className="absolute w-full h-full top-0  bg-slate-900"
              animate={inView ? "show" : "hidden"}
              variants={fillVariants}
            />
            <motion.span
              className="absolute h-1 bg-black top-0 left-0"
              animate={inView ? "show" : "hidden"}
              variants={strokeVariants}
            />
            <motion.span
              className="absolute h-1 bg-black bottom-0 right-0"
              animate={inView ? "show" : "hidden"}
              variants={strokeVariants}
            />
          </div>
          <div
            ref={containerRef}
            className="grid grid-flow-col overflow-y-hidden overflow-x-scroll no-scrollbar scroll-smooth px-[50vw]"
          >
            {cardList.map((card, i) => (
              <div
                key={i}
                ref={(el) => cardRefs.current.push(el)}
                onClick={() => scrollToCard(i)}
                className="relative"
              >
                <ProjectCard
                  index={i}
                  selectedCard={selectedCard}
                  card={card}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
