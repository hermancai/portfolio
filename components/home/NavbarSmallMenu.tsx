"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ScrollIntoViewButton from "./ScrollIntoViewButton";

export default function NavbarSmallMenu() {
    return (
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
                        <ScrollIntoViewButton
                            id="about"
                            className="px-2 py-1 hover:bg-zinc-700 rounded text-start w-full"
                        >
                            About
                        </ScrollIntoViewButton>
                    </Menu.Item>
                    <Menu.Item as="div" className="p-1">
                        <ScrollIntoViewButton
                            id="projects"
                            className="px-2 py-1 hover:bg-zinc-700 rounded text-start w-full"
                        >
                            Projects
                        </ScrollIntoViewButton>
                    </Menu.Item>
                    <Menu.Item as="div" className="p-1">
                        <ScrollIntoViewButton
                            id="contact"
                            className="px-2 py-1 hover:bg-zinc-700 rounded text-start w-full"
                        >
                            Contact
                        </ScrollIntoViewButton>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
