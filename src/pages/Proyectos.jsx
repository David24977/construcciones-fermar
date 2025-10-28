// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import obra1 from "../assets/obra1.jpeg";
import antes from "../assets/antes.jpg";
import cocina from "../assets/cocina.jpg";
import salon from "../assets/salon.jpg";
import casaBonica from "../assets/casaBonica.jpg";

export default function Proyectos() {
  // 📸 Array de objetos: cada foto con su texto
  const proyectos = [
    { img: obra1, texto: "Construcción de vivienda — Cullera" },
    { img: antes, texto: "Rehabilitación integral de primer piso de una vivienda - Xátiva" },
    { img: cocina, texto: "Rehabilitación de cocina — Sueca" },
    { img: salon, texto: "Rehabilitación de salón — Valencia" },
    { img: casaBonica, texto: "Construcción completa de vivienda — Valencia" },
  ];

  const [indiceActivo, setIndiceActivo] = useState(null);

  const abrirModal = (index) => setIndiceActivo(index);
  const cerrarModal = () => setIndiceActivo(null);

  const siguiente = (e) => {
    e.stopPropagation();
    setIndiceActivo((prev) => (prev + 1) % proyectos.length);
  };

  const anterior = (e) => {
    e.stopPropagation();
    setIndiceActivo((prev) =>
      prev === 0 ? proyectos.length - 1 : prev - 1
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-slate-900 text-sky-100 py-24 px-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-2">
          Nuestros proyectos
        </h2>
        <p className="text-sky-300 max-w-2xl mx-auto">
          Una muestra de algunas de nuestras obras y reformas. Cada proyecto
          refleja nuestro compromiso con la calidad, el detalle y la confianza.
        </p>
      </div>

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {proyectos.map((p, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => abrirModal(i)}
          >
            <img
              src={p.img}
              alt={`Proyecto ${i + 1}`}
              className="w-full h-72 object-cover"
            />
            <p className="text-center text-sky-300 text-sm mt-2 px-2">
              {p.texto}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal con descripción */}
      <AnimatePresence>
        {indiceActivo !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrarModal}
          >
            <motion.img
              key={indiceActivo}
              src={proyectos[indiceActivo].img}
              alt={`Proyecto ampliado ${indiceActivo + 1}`}
              style={{ width: "80vw", height: "70vh", objectFit: "cover" }}
              className="rounded-xl shadow-2xl border-2 border-yellow-400"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Descripción */}
            <p className="mt-4 text-sky-200 text-sm max-w-2xl text-center">
              {proyectos[indiceActivo].texto}
            </p>

            {/* Botón cerrar */}
            <button
              className="absolute top-8 right-8 text-yellow-400 text-3xl font-bold hover:text-yellow-300"
              onClick={cerrarModal}
            >
              ×
            </button>

            {/* Botones anterior / siguiente */}
            <div className="absolute inset-0 flex items-center justify-between px-6 text-yellow-400 text-4xl font-bold">
              <button
                onClick={anterior}
                className="hover:text-yellow-300 transition-colors select-none"
              >
                ‹
              </button>
              <button
                onClick={siguiente}
                className="hover:text-yellow-300 transition-colors select-none"
              >
                ›
              </button>
            </div>

            {/* Indicador */}
            <p className="absolute bottom-8 text-sky-200 text-sm">
              {indiceActivo + 1} / {proyectos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
