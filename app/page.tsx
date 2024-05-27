import Script from "next/script";
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
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-3HRV9HKLT0"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3HRV9HKLT0');
        `}
            </Script>
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
