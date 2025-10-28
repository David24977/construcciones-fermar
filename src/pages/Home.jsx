//eslint-disable-next-line
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative -mt-20 min-h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Construcciones FerMar
        </h1>
        <p className="mt-4 text-xl text-sky-100 font-medium leading-relaxed">
          Más de 20 años construyendo con confianza, experiencia y calidad.
        </p>
         <p className="mt-6 text-sky-100 font-medium">
          Reformas integrales, obra nueva, mantenimiento y rehabilitación.  
          <br />
          Confía en profesionales con experiencia.
        </p>
        <Link
          to="/contacto"
          className="mt-8 inline-block px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition-all"
        >
          Solicita tu presupuesto
        </Link>
      </div>
    </motion.section>
  );
}
