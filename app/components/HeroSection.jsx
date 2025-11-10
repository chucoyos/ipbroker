export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Fondo con efecto de degradado para profundidad */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-35 transition-opacity duration-300" 
        style={{ 
          backgroundImage: "url('https://placehold.co/1920x1080/0F172A/ffffff?text=IPBroker+Logistica')"
        }}
        aria-hidden="true"
      ></div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100/50 dark:to-gray-900/50"></div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 py-12 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-4xl w-full space-y-4 sm:space-y-5 md:space-y-6">
          
          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-300">
            <span className="block">Simplificamos tus</span>
            <span className="text-indigo-600 dark:text-indigo-400 block">Operaciones Aduanales</span>
          </h1>

          {/* Subtítulo Descriptivo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-2 transition-colors duration-300">
            IPBroker es tu socio estratégico para el despacho aduanal rápido y seguro. Conectando tu negocio con el mundo.
          </p>

          {/* Botón de Llamada a la Acción (CTA) */}
          <div className="pt-2 sm:pt-3 md:pt-4">
            <a 
              href="#servicios" 
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 border border-transparent text-sm sm:text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Explora Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}