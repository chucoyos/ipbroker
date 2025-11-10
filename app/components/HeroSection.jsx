export default function HeroSection() {
  return (
    <section className="relative h-[65vh] md:h-[80vh] bg-gray-900 overflow-hidden">
      {/* Fondo con efecto de degradado para profundidad */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{ 
             backgroundImage: "url('https://placehold.co/1920x1080/0F172A/ffffff?text=IPBroker+Logistica')",
             opacity: 0.35 // Baja opacidad para que el texto resalte
           }}
           aria-hidden="true"
      ></div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 flex items-center justify-center h-full p-6 md:p-12 text-center">
        <div className="max-w-4xl space-y-6">
          
          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            <span className="block">Simplificamos tus</span>
            <span className="text-indigo-400 block">Operaciones Aduanales</span>
          </h1>

          {/* Subtítulo Descriptivo */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            IPBroker es su socio estratégico para el despacho aduanal rápido y seguro. Conectando su negocio con el mundo.
          </p>

          {/* Botón de Llamada a la Acción (CTA) */}
          <div className="pt-4">
            <a 
              href="#servicios" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-xl transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Explora Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}