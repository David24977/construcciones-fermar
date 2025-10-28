//eslint-disable-next-line
import { motion } from "framer-motion";
import fotoAlmacen from "../assets/fotoAlmacen.png";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
     className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${fotoAlmacen})`, // Este formato por estar en asser
          marginTop: "-4rem",
      }}
    >
      {/* Capa semitransparente para oscurecer el fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl text-center px-6 py-16 space-y-6">
        <h2 className="text-4xl font-bold text-sky-700 drop-shadow-md">
          Sobre Nosotros
        </h2>

        <p className="text-lg leading-relaxed drop-shadow-md">
          En <span className="font-semibold text-sky-600">Construcciones FerMar</span> contamos con más de{" "}
          <span className="font-semibold text-sky-600">20 años de experiencia</span> en el
          sector de la construcción. Desde nuestros comienzos en el año 2000,
          hemos crecido gracias a la confianza de nuestros clientes y al trabajo
          constante de un equipo comprometido y profesional.
        </p>

        <p className="text-lg leading-relaxed drop-shadow-md">
          Nos especializamos en todo tipo de obras y reformas, utilizando{" "}
          <span className="font-semibold text-sky-600">materiales de alta calidad</span> y
          las últimas técnicas del sector. Cuidamos cada detalle para ofrecer un{" "}
          <span className="font-semibold text-sky-600">acabado impecable</span>, siempre con
          la máxima seguridad y garantía.
        </p>

        <p className="text-lg leading-relaxed drop-shadow-md">
          En cada proyecto, grande o pequeño, mantenemos nuestro compromiso con
          la <span className="font-semibold text-sky-600">excelencia</span>, la{" "}
          <span className="font-semibold text-sky-600">honestidad</span> y la{" "}
          <span className="font-semibold text-sky-600">satisfacción del cliente</span>.
        </p>

        <p className="text-lg italic text-slate-200 drop-shadow-md">
          “Nuestra mayor recompensa es ver cómo nuestros clientes recomiendan nuestro trabajo.”
        </p>
      </div>
    </motion.section>
  );
}
