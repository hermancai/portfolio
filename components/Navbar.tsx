import { motion } from "framer-motion";
import { Link } from "react-scroll";
import useScroll from "../hooks/useScroll";

// function CustomIcon({
//   icon,
//   name,
//   href,
//   offset,
// }: {
//   icon: JSX.Element;
//   name: string;
//   href: string;
//   offset: number;
// }) {
//   const scrollTo = useScroll(name + " header", offset);

//   return (
//     <div className="relative flex flex-nowrap">
//       <Link
//         to={name}
//         spy
//         activeClass="text-orange-500"
//         className="peer h-6 aspect-square cursor-pointer hover:text-orange-500 transition-colors duration-300"
//         onClick={scrollTo}
//         href={`#${href}`}
//       >
//         {icon}
//       </Link>
//       <p className="opacity-0 sm:peer-hover:opacity-100 transition-opacity duration-300 absolute left-[200%] whitespace-nowrap text-white pointer-events-none">
//         {name}
//       </p>
//     </div>
//   );
// }

export default function Navbar() {
  return (
    <div className="w-full p-4 gap-4 fixed flex justify-end items-center text-white z-50 font-raleway bg-[linear-gradient(to_bottom,rgba(24,24,27,1)_80%,transparent_100%)]">
      <p className="mr-auto bg-zinc-900 px-2 py-1 rounded">Herman Cai</p>
      <p className="rounded px-2 py-1  bg-zinc-900">About</p>
      <p className="rounded px-2 py-1  bg-zinc-900">Projects</p>
      <button className="border rounded border-white w-min whitespace-nowrap px-2 py-1 bg-zinc-900">
        Contact Me
      </button>
    </div>
  );

  // return (
  //   <div className="z-50 sticky w-full h-0 flex justify-center items-center bottom-8 sm:w-0 sm:bottom-0 sm:left-8 sm:-translate-y-[50vh]">
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1, transition: { duration: 1.5, delay: 1.75 } }}
  //       className="flex flex-nowrap flex-row sm:flex-col text-white border-2 border-zinc-400 rounded bg-black px-2 py-2 gap-4"
  //     >
  //       <CustomIcon icon={<HomeIcon />} name="Home" offset={0} href="home" />
  //       <CustomIcon
  //         icon={<UserCircleIcon />}
  //         name="About Me"
  //         offset={-100}
  //         href="aboutme"
  //       />
  //       <CustomIcon
  //         icon={<WrenchIcon />}
  //         name="Skills"
  //         offset={-100}
  //         href="skills"
  //       />
  //       <CustomIcon
  //         icon={<ComputerDesktopIcon />}
  //         name="Projects"
  //         offset={-35}
  //         href="projects"
  //       />
  //       <CustomIcon
  //         icon={<EnvelopeIcon />}
  //         name="Contact"
  //         offset={-50}
  //         href="contact"
  //       />
  //     </motion.div>
  //   </div>
  // );
}
