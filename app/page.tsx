// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO SECTION CON IMAGEN DE FONDO REAL */}
<section className="relative w-full bg-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
  
  {/* 1. La Imagen de Fondo */}
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <Image 
    src="/inventario/hero-bg.jpg" // <-- Imagen
    alt="Niños divirtiéndose en inflables de Elly's Party Rental" 
    fill
    priority
    className="absolute inset-0 w-full h-full object-cover opacity-40 object-center pointer-events-none" 
  />

  {/* 2. Capa de degradado sutil para asegurar el contraste del texto */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-gray-900/40 pointer-events-none" />

  {/* 3. Contenido Principal (Delante de la imagen) */}
  <div className="relative max-w-4xl mx-auto z-10">
    <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
      ¡Llevando lo más divertido a tu fiesta!
    </h1>
    <p className="text-xl sm:text-2xl font-bold mb-8 bg-pink-600/90 inline-block px-6 py-2 rounded-full shadow-md transform -rotate-1">
      📍 Casas inflables y Toboganes en todo <span className="underline decoration-yellow-400 font-extrabold">Massachusetts</span>
    </p>
    <div className="mt-4">
      <Link href="/servicios" className="inline-block bg-yellow-400 text-gray-900 font-black px-10 py-5 rounded-full text-xl shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-200">
        Explora nuestros servicios
      </Link>
    </div>
  </div>
</section>

      {/* INTRODUCCIÓN */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Bienvenidos a Elly's Party Rental!</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Nos apasiona hacer de tu celebración un día inolvidable. Estamos completamente comprometidos con la 
          <span className="font-semibold text-blue-600"> seguridad</span>, entregando siempre equipos impecablemente 
          <span className="font-semibold text-pink-500"> limpios y desinfectados</span>, y garantizando una estricta 
          <span className="font-semibold text-yellow-500"> puntualidad</span> para que no tengas que preocuparte por nada.
        </p>
      </section>

      {/* CATEGORÍAS */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestras Categorías</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Bouncy Houses & Slides', desc: 'Diversión saltarina garantizada.' },
            { title: 'Pool & Water', desc: 'Toboganes acuáticos para refrescar tu fiesta.' },
            { title: 'Sillas y Mesas', desc: 'Todo el confort para tus invitados.' },
            { title: 'Party Add-ons', desc: 'Máquinas de palomitas, algodón de azúcar y más.' }
          ].map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{cat.title}</h4>
              <p className="text-gray-500 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ¿CÓMO TRABAJA? */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">¿Cómo reservar tu servicio?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { step: '1', title: 'Explora el Catálogo', desc: 'Revisa nuestra variedad de inflables y mobiliario con sus respectivas medidas.' },
              { step: '2', title: 'Contáctanos', desc: 'Llámanos o envíanos un correo para verificar disponibilidad en tu zona de Massachusetts.' },
              { step: '3', title: '¡A Disfrutar!', desc: 'Nosotros nos encargamos del transporte, instalación segura y recogida puntual.' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-5xl font-extrabold text-pink-500/20 mb-2">0{step.step}</span>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}