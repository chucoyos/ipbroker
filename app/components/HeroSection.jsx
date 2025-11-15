'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Fondo con efecto de degradado para profundidad */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-35 transition-opacity duration-300" 
        style={{ 
          backgroundImage: "url('/images/hero-image.png')"
        }}
        aria-hidden="true"
      ></motion.div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100/50 dark:to-gray-900/50"></div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 py-12 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-4xl w-full space-y-4 sm:space-y-5 md:space-y-6">
          
          {/* Glassmorphism Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="backdrop-blur-md bg-white/10 dark:bg-gray-800/20 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 dark:border-gray-700/30 shadow-2xl"
          >
            {/* Título Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-300"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-gray-200"
              >
                Simplificamos tus
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-indigo-600 block"
              >
                Operaciones Aduanales
              </motion.span>
            </motion.h1>

            {/* Subtítulo Descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto px-2 transition-colors duration-300 mt-4 sm:mt-5 md:mt-6"
            >
              IPBroker es tu socio estratégico para el despacho aduanal rápido y seguro. Conectando tu negocio con el mundo.
            </motion.p>
          </motion.div>

          {/* Botón de Llamada a la Acción (CTA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-2 sm:pt-3 md:pt-4"
          >
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 border border-transparent text-sm sm:text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Explora Nuestros Servicios
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}