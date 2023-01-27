import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import useScroll from "../hooks/useScroll";
import {
  HomeIcon,
  UserCircleIcon,
  WrenchIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

function CustomIcon({ icon, name }: { icon: JSX.Element; name: string }) {
  const scrollTo = useScroll(name, 1000);

  return (
    <div className="relative flex flex-nowrap">
      <Link
        to={name}
        spy
        activeClass="text-orange-500"
        className="peer h-6 aspect-square cursor-pointer hover:text-orange-500 transition-colors duration-300"
        onClick={scrollTo}
      >
        {icon}
      </Link>
      <p className="opacity-0 sm:peer-hover:opacity-100 transition-opacity duration-300 absolute left-[200%] whitespace-nowrap text-white pointer-events-none">
        {name}
      </p>
    </div>
  );
}

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5, delay: 1 } }}
      className="flex flex-nowrap flex-row sm:flex-col fixed bottom-2 sm:bottom-0 sm:left-2 text-white z-50 border-2 border-zinc-400 rounded bg-zinc-900 px-2 py-2 gap-4 h-min left-1/2 -translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0"
    >
      <CustomIcon icon={<HomeIcon />} name="Home" />
      <CustomIcon icon={<UserCircleIcon />} name="About Me" />
      <CustomIcon icon={<WrenchIcon />} name="Skills" />
      <CustomIcon icon={<ComputerDesktopIcon />} name="Projects" />
      <CustomIcon icon={<EnvelopeIcon />} name="Contact" />
    </motion.div>
  );
}
