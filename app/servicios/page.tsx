// src/app/servicios/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function ServiciosPage() {
  const categorias = [
    {
      id: 'bouncy-houses',
      title: 'Bouncy Houses & Slides',
      desc: 'Castillos inflables y combinados llenos de adrenalina y saltos.',
      img: '/inventario/casainflable.jpg'
    },
    {
      id: 'pool-water',
      title: 'Pool & Water',
      desc: 'Toboganes de agua espectaculares para refrescar cualquier fiesta veraniega.',
      img: '/inventario/tobogan.jpg'
    },
    {
      id: 'sillas-mesas',
      title: 'Sillas y Mesas',
      desc: 'Mobiliario cómodo, limpio y resistente para todos tus invitados.',
      img: '/inventario/chairs&tables.jpg'
    },
    {
      id: 'party-add-ons',
      title: 'Party Add-ons',
      desc: 'Máquinas de snacks y complementos ideales para cerrar con broche de oro.',
      img: '/inventario/maquinas.jpg'
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Nuestro Catálogo de Inventario</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Selecciona una categoría para explorar los tamaños disponibles, precios y detalles de nuestros equipos sanitizados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 flex flex-col sm:flex-row hover:shadow-xl transition-all group">
              <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image 
                  src={cat.img} 
                  alt={cat.title} 
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{cat.desc}</p>
                </div>
                <Link 
                  href={`/servicios/${cat.id}`}
                  className="block text-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-sm hover:bg-pink-600 transition-colors"
                >
                  Explora nuestra variedad
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}