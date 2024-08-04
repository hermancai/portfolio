import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
    return (
        <main className="bg-zinc-900">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <ToastContainer
                position="bottom-left"
                draggable={false}
                hideProgressBar={true}
                transition={Slide}
            />
        </main>
    );
}
