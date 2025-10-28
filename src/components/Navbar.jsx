import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Fermar.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/" || location.pathname === "/sobre-nosotros";

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
    isHome
      ? isScrolled
        ? "bg-slate-900/90 backdrop-blur-md shadow-md"
        : "bg-transparent"
      : isScrolled
      ? "bg-slate-900/90 backdrop-blur-md shadow-md"
      : "bg-sky-900"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 text-red-200 font-semibold text-lg hover:text-yellow-300 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Logo Fermar"
            className="w-10 h-10 rounded-lg bg-white/80 p-1 shadow-md"
          />
          <span>Construcciones FerMar</span>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-slate-900/95 shadow-lg"
              : "hidden"
          } md:flex md:flex-row md:static md:w-auto gap-8 text-yellow-400 text-sm font-medium`}
        >
          <li className=" hover:text-red-500  transition-all"><Link to="/">Inicio</Link></li>
          <li className=" hover:text-red-500  transition-all"><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
          <li className=" hover:text-red-500  transition-all"><Link to="/proyectos">Proyectos</Link></li>
          <li className=" hover:text-red-500  transition-all"><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}
