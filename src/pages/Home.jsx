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
      <section className="snap-section">
        <Projects />
      </section>
      <section className="snap-section">
        <About />
      </section>
      <section className="snap-section">
        <Footer />
      </section>
    </div>
  );
}
