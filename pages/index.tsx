import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Herman Cai&apos;s Portfolio</title>
        <meta
          name="description"
          content="Herman Cai Web Development Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#18181b" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f172a" />
      </Head>
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
      <main className="bg-zinc-900">
        <Navbar />
        <Hero />
        <About />
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
    </>
  );
}
