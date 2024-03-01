import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
    return (
        <div className="w-full py-4 px-8 gap-8 fixed flex justify-between items-center text-white z-50 font-raleway bg-[linear-gradient(to_bottom,rgba(24,24,27,1)_80%,transparent_100%)]">
            <button
                className="mr-auto text-xl cursor-pointer"
                onClick={() =>
                    document
                        .getElementById("hero")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            >
                Herman Cai
            </button>
            <div className="hidden sm:flex flex-row justify-center items-center gap-8">
                <button
                    className="relative group"
                    onClick={() =>
                        document
                            .getElementById("about")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    About
                    <span className="absolute bottom-0 left-0 h-[2px] w-full transition-[opacity] group-hover:opacity-100 opacity-0 duration-500 ease-in-out bg-gradient-orange" />
                </button>
                <button
                    className="relative group"
                    onClick={() =>
                        document
                            .getElementById("projects")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Projects
                    <span className="absolute bottom-0 left-0 h-[2px] w-full transition-[opacity] group-hover:opacity-100 opacity-0 duration-500 ease-in-out bg-gradient-orange" />
                </button>
                <button
                    className="rounded cursor-pointer border border-white bg-border-gradient w-min px-2 py-1 whitespace-nowrap hover:border-transparent transition-[border] duration-500"
                    onClick={() =>
                        document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Contact Me
                </button>
            </div>
            <Menu as="div" className="sm:hidden relative">
                <Menu.Button aria-label="menu" className="outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 border border-zinc-500 rounded bg-zinc-950 divide-y divide-zinc-500 flex flex-col w-32 menu-triangle outline-none">
                        <Menu.Item as="div" className="p-1">
                            <button
                                className="px-2 py-1 hover:bg-zinc-700 rounded text-start w-full"
                                onClick={() =>
                                    document
                                        .getElementById("about")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                About
                            </button>
                        </Menu.Item>
                        <Menu.Item as="div" className="p-1">
                            <button
                                className="px-2 py-1 hover:bg-zinc-700 rounded text-start w-full"
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Projects
                            </button>
                        </Menu.Item>
                        <Menu.Item as="div" className="p-1">
                            <button
                                className="px-2 py-1 hover:bg-zinc-700 rounded text-start w-full"
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Contact
                            </button>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
