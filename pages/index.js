import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [homeInView, setHomeLink] = useState(true);
  const [aboutInView, setAboutLink] = useState(false);
  const [projectsInView, setProjectsLink] = useState(false);
  const [contactInView, setContactLink] = useState(false);
  const refList = [homeRef, aboutRef, projectsRef, contactRef];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHomeLink(false);
            setAboutLink(false);
            setProjectsLink(false);
            setContactLink(false);
            switch (entry.target.id) {
              case "home":
                setHomeLink(true);
                break;
              case "about":
                setAboutLink(true);
                break;
              case "projects":
                setProjectsLink(true);
                break;
              case "contact":
                setContactLink(true);
                break;
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    refList.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, []);

  return (
    <div className="flex flex-col bg-gray-800 text-white">
      <Head>
        <title>Herman Cai's Portfolio</title>
        <meta name="description" content="Herman Cai's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="home" ref={homeRef}>
        <Hero />
      </div>

      <Navbar
        homeInView={homeInView}
        aboutInView={aboutInView}
        contactInView={contactInView}
        projectsInView={projectsInView}
      />

      <div id="about" className="wrapper" ref={aboutRef}>
        <About />
      </div>

      <div id="projects" className="wrapper" ref={projectsRef}>
        <Projects />
      </div>

      <div id="contact" className="wrapper" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
