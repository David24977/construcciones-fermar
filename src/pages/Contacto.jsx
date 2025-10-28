//eslint-disable-next-line
import { motion } from "framer-motion";
import logo from "../assets/Fermar.png";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-800 px-6 py-16"
    >
      {/* Logo arriba izquierda */}
      <img
        src={logo}
        alt="Logo Construcciones Galán"
        className="absolute top-6 left-6 w-24 sm:w-28 md:w-32 rounded-lg shadow bg-white/80 p-1"
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-2xl mt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">
          Contacta con nosotros
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          Estamos aquí para ayudarte. Solicita tu presupuesto o cuéntanos tu proyecto:
        </p>

        {/* Bloques de contacto */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center">
          {/* Teléfono */}
          <a
            href="tel:+34600111222"
            className="flex items-center gap-3 text-xl text-slate-800 hover:text-yellow-500 transition-all"
          >
            <Phone className="w-6 h-6 text-yellow-500" />
            <span>+34 600 123 456</span>
          </a>

          {/* Correo */}
          <a
            href="mailto:construccionesgalan@gmail.com?subject=Solicitud de presupuesto"
            className="flex items-center gap-3 text-xl text-slate-800 hover:text-yellow-500 transition-all"
          >
            <Mail className="w-6 h-6 text-yellow-500" />
            <span>Construcciones FerMar@Fermar.es</span>
          </a>

          {/* Dirección */}
          <div className="flex items-center gap-3 text-xl text-slate-800">
            <MapPin className="w-6 h-6 text-yellow-500" />
            <span>Calle David Ferrer, 22, Cullera(46400), Valencia</span>
          </div>
          <div>⚠️ Esta web es un proyecto ficticio creado con fines demostrativos. No corresponde a una empresa real ni ofrece servicios de construcción.</div>
        </div>
      </div>
    </motion.section>
  );
}
