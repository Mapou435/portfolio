import Projects from "../components/Projects";
import About from "../components/About";
import Forside from "../components/Forside";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="snap-container">
      <section className="snap-section">
        <Forside />
      </section>
      <section className="snap-section" id="projects">
        <Projects />
      </section>
      <section className="snap-section" id="About">
        <About />
      </section>
      <section className="snap-section" id="Kontakt">
        <Footer />
      </section>
    </div>
  );
}
