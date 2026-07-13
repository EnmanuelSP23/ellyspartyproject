// src/app/sobre-nosotros/page.tsx
export default function SobreNosotrosPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Nuestra Historia</h1>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-12 border border-gray-100">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
           Elly's Party Rental nació gracias a la generosidad y visión de su fundadora, Elly. Todo comenzó cuando un 
           familiar le pidió prestadas las casas inflables que tenía para que sus hijos disfrutaran de una celebración, 
           ofreciéndose incluso a pagar por utilizarlas. En ese momento, Elly se dio cuenta de que existía una necesidad en
            la comunidad y decidió convertir esa oportunidad en un negocio.

          Desde entonces, Elly's Party Rental tiene la misión de crear momentos inolvidables, llevando diversión, sonrisas y 
          experiencias memorables a familias de toda la comunidad.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nuestra misión es asegurar que cada padre, organizador y anfitrión pueda disfrutar del evento con total tranquilidad, sabiendo que la infraestructura de diversión está en manos de profesionales sumamente responsables.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Nuestros Valores Fundamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '🔒 Seguridad Primero', desc: 'Anclajes profesionales y monitoreo estricto de las normativas de seguridad en cada instalación.' },
            { title: '🧼 Buena Sanidad', desc: 'Limpieza profunda e higienización completa de cada inflable antes y después de cada uso.' },
            { title: '⏱️ Puntualidad', desc: 'Respetamos profundamente tu tiempo; llegamos mucho antes de que empiece la fiesta.' }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}