import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-800 text-white">
      <Head>
        <title>Herman Cai's Portfolio</title>
        <meta name="description" content="Herman Cai's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      
    </div>
  );
}
