'use client';

import { motion } from 'framer-motion';
import { FaShip, FaPlane, FaTruck, FaWarehouse, FaFileInvoiceDollar, FaGlobeAmericas } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const services = [
  {
    icon: FaShip,
    title: 'Importación Marítima',
    description: 'Gestionamos el despacho aduanal de mercancías que llegan por vía marítima con la máxima eficiencia y seguridad.'
  },
  {
    icon: FaPlane,
    title: 'Importación Aérea',
    description: 'Servicio express para tus envíos urgentes. Despacho aduanal ágil para mercancía que llega por avión.'
  },
  {
    icon: FaTruck,
    title: 'Transporte Terrestre',
    description: 'Coordinamos el despacho y transporte de mercancías por carretera, facilitando el comercio fronterizo.'
  },
  {
    icon: FaWarehouse,
    title: 'Almacenamiento',
    description: 'Bodegas fiscalizadas y servicios de almacenaje temporal mientras completamos los trámites aduanales.'
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Consultoría Aduanal',
    description: 'Asesoría especializada en clasificación arancelaria, regulaciones y optimización de costos de importación.'
  },
  {
    icon: FaGlobeAmericas,
    title: 'Comercio Exterior',
    description: 'Soluciones integrales para tus operaciones de comercio internacional, exportaciones e importaciones.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ServicesSection() {
  const handleWhatsAppClick = (serviceName) => {
    const message = encodeURIComponent(`Hola, me interesa el servicio de ${serviceName}`);
    const phoneNumber = '5215512345678'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300"
          >
            Soluciones completas para todas tus necesidades de logística y despacho aduanal
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-500/50"
                >
                  <IoLogoWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">Contactar por WhatsApp</span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
