import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="#projects">Projekter</a>
        <a href="#About">Om mig</a>
        <a href="#Kontakt">Kontakt</a>
        <a href="">
          <img src="/img/logo.png" alt="Home" className="nav-image" />
        </a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Projects" element={<Home />} />
        <Route path="/kontakt" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
