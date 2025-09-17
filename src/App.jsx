import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/" end>
          <img src="/img/logo.png" alt="LOGO HERE" />
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
