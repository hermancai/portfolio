import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-800 text-white">
      <Head>
        <title>Herman Cai's Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Herman Cai" />
        <meta name="description" content="Herman Cai full stack web developer portfolio" />
        <meta name="theme-color" content="#111827" />
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
      <Hero id="hero" />
      <span className="w-full h-[1px] bg-gray-900 bottom-0"></span>
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <span className="w-full h-[1px] bg-red-900 bottom-0"></span>
      <Footer />
    </div>
  );
}
