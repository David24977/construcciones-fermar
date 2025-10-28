import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SobreNosotros from "../pages/SobreNosotros.jsx";
import Proyectos from "../pages/Proyectos.jsx";
import Contacto from "../pages/Contacto.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx"; 

export default function AppRouter() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}
