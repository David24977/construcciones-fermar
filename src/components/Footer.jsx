import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-sky-100 py-5 mt-0 border-t border-slate-800 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Izquierda */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-yellow-400">
            Construcciones FerMar
          </h3>
          <p className="text-sky-400 text-xs">
            Calidad y compromiso desde 2001
          </p>
        </div>

        {/* Centro: contacto rápido */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="mailto:construccionesFerMar@fermar.es"
            className="flex items-center gap-1 hover:text-yellow-400 transition-all"
          >
            <Mail className="w-4 h-4 text-yellow-400" />
            <span>ConstruccionesFerMar@Fermar.es</span>
          </a>

          <a
            href="tel:+34600111222"
            className="flex items-center gap-1 hover:text-yellow-400 transition-all"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>+34 600 123 456</span>
          </a>
        </div>

        {/* Derecha: redes sociales */}
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-all"
            title="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-all"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-sky-500 text-xs mt-3 border-t border-slate-800 pt-2">
        © {new Date().getFullYear()} Construcciones FerMar. Todos los derechos reservados.
      </div>
    </footer>
  );
}
