'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaEye } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              ¿Quiénes Somos?
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300"
          >
            Somos un equipo de profesionales altamente capacitados, comprometidos con la excelencia y la mejora continua.
            Nuestro equipo de expertos en comercio exterior se enfoca en garantizar procesos aduanales ágiles, seguros y con
            certeza jurídica, respaldados por un compromiso constante con la mejora y la satisfacción de nuestros clientes.
          </motion.p>
        </motion.div>

        {/* Mission and Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <FaBullseye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              En IP Broker tenemos como misión consolidarnos como el aliado comercial de confianza para importadores y
              exportadores. Nos enfocamos en brindar un servicio ágil y preciso que optimiza procesos y reduce costos innecesarios
              por multas, demoras y almacenajes.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <FaEye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Consolidarnos como una firma líder en servicios aduanales a nivel nacional, reconocida por su excelencia operativa,
              innovación y compromiso con la legalidad, contribuyendo al crecimiento competitivo y sostenible de nuestros
              clientes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
