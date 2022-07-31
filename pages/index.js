import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const inViewOptions = {
    threshold: 0.2,
    fallbackInView: true,
  };
  const [heroRef, heroInView, heroEntry] = useInView(inViewOptions);
  const [aboutRef, aboutInView, aboutEntry] = useInView(inViewOptions);
  const [projectsRef, projectsInView, projectsEntry] = useInView(inViewOptions);
  const [contactRef, contactInView, contactEntry] = useInView(inViewOptions);

  const [viewState, setViewState] = useState([
    heroInView,
    aboutInView,
    projectsInView,
    contactInView,
  ]);

  useEffect(() => {
    setViewState([heroInView, aboutInView, projectsInView, contactInView]);
  }, [heroInView, aboutInView, projectsInView, contactInView]);

  return (
    <div className="flex flex-col bg-gray-800 text-white">
      <Head>
        <title>Herman Cai&apos;s Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Herman Cai" />
        <meta
          name="description"
          content="Herman Cai full stack web developer portfolio"
        />
        <meta name="theme-color" content="#111827" />
        <meta name="robots" content="index,follow" />
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="/images/favicon-180x180.png" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <Navbar
        inViewList={viewState}
        entryList={[heroEntry, aboutEntry, projectsEntry, contactEntry]}
      />
      <Hero heroRef={heroRef} aboutEntry={aboutEntry} />
      <About aboutRef={aboutRef} contactEntry={contactEntry} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}
