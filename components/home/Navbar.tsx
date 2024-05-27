import NavbarSmallMenu from "./NavbarSmallMenu";
import ScrollIntoViewButton from "./ScrollIntoViewButton";

export default function Navbar() {
    return (
        <div className="w-full py-4 px-8 gap-8 fixed flex justify-between items-center text-white z-50 font-raleway bg-[linear-gradient(to_bottom,rgba(24,24,27,1)_80%,transparent_100%)]">
            <ScrollIntoViewButton
                id="hero"
                className="mr-auto text-xl cursor-pointer"
            >
                Herman Cai
            </ScrollIntoViewButton>
            <noscript className="text-black grow text-center bg-white">
                Please enable JavaScript.
            </noscript>
            <div className="hidden sm:flex flex-row justify-center items-center gap-8">
                <ScrollIntoViewButton id="about" className="relative group">
                    About
                    <span className="absolute bottom-0 left-0 h-[2px] w-full transition-[opacity] group-hover:opacity-100 opacity-0 duration-500 ease-in-out bg-gradient-orange" />
                </ScrollIntoViewButton>
                <ScrollIntoViewButton id="projects" className="relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 h-[2px] w-full transition-[opacity] group-hover:opacity-100 opacity-0 duration-500 ease-in-out bg-gradient-orange" />
                </ScrollIntoViewButton>
                <ScrollIntoViewButton
                    id="contact"
                    className="rounded cursor-pointer border border-white bg-border-gradient w-min px-2 py-1 whitespace-nowrap hover:border-transparent transition-[border] duration-500"
                >
                    Contact Me
                </ScrollIntoViewButton>
            </div>
            <NavbarSmallMenu />
        </div>
    );
}
