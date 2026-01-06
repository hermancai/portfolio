import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

export default function Home() {
    return (
        <main>
            <noscript>
                <div
                    style={{
                        backgroundColor: "white",
                        color: "black",
                        textAlign: "center",
                        padding: "20px",
                    }}
                >
                    Please enable JavaScript to use this site.
                </div>
            </noscript>
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
