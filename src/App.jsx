import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { NavLink } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/Projects">Projekter</NavLink>
        <NavLink to="/Om-mig">Om mig</NavLink>
        <NavLink to="/Kontakt">Kontakt</NavLink>
        <NavLink to="/" end>
          <img src="/img/logo.png" alt="Home" className="nav-image" />
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
