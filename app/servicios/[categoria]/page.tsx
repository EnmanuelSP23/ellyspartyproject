// src/app/servicios/[categoria]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Base de datos simulada de los productos por categoría
const BD_PRODUCTOS: Record<string, { categoriaTitulo: string; items: any[] }> = {
  'bouncy-houses': {
    categoriaTitulo: 'Bouncy Houses & Slides',
    items: [
      { id: 1, name: 'Castle Fun Bouncy House', size: '15ft x 15ft', price: '$150', desc: 'Perfecto para cumpleaños infantiles en jardines estándar. Espacioso y seguro.', img: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?w=500' },
      { id: 2, name: 'Mega Adventure Slide Combo', size: '25ft x 15ft x 16ft', price: '$220', desc: 'Incluye zona de salto y un tobogán seco ideal para activar la adrenalina.', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500' }
    ]
  },
  'pool-water': {
    categoriaTitulo: 'Pool & Water Slides',
    items: [
      { id: 3, name: 'Tropical Blue Water Slide', size: '22ft x 12ft x 18ft', price: '$260', desc: 'Tobogán acuático con piscina de aterrizaje inflable para los días calurosos.', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500' }
    ]
  },
  'sillas-mesas': {
    categoriaTitulo: 'Sillas y Mesas',
    items: [
      { id: 4, name: 'Paquete Familiar (1 Mesa + 8 Sillas)', size: 'Mesa rectangular 6ft', price: '$40', desc: 'Mobiliario básico resistente, lavado e higienizado antes de cada entrega.', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500' }
    ]
  },
  'party-add-ons': {
    categoriaTitulo: 'Party Add-ons',
    items: [
      { id: 5, name: 'Máquina Profesional de Algodón de Azúcar', size: 'Mesa / Portátil', price: '$60', desc: 'Incluye insumos para 30 porciones iniciales. Súper fácil de operar.', img: 'https://images.unsplash.com/photo-1569871175133-c8651f8a70c8?w=500' }
    ]
  }
};

export default async function CategoriaDetallePage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const datosCategoria = BD_PRODUCTOS[categoria];

  // Si el usuario escribe una categoría que no existe en la URL, muestra error 404
  if (!datosCategoria) {
    notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Botón para volver atrás */}
        <div className="mb-6">
          <Link href="/servicios" className="text-blue-600 font-medium hover:text-pink-600 transition flex items-center space-x-2">
            <span>←</span> <span>Volver a Categorías</span>
          </Link>
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-2">{datosCategoria.categoriaTitulo}</h1>
        <p className="text-gray-500 mb-10">Explora nuestro inventario disponible para Massachusetts con precios transparentes[cite: 1].</p>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datosCategoria.items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="h-56 bg-gray-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-green-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">Medidas: {item.size}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <Link href="/contacto" className="block text-center bg-gray-900 text-white text-sm font-medium py-3 rounded-xl hover:bg-pink-600 transition-colors">
                  Cotizar este Producto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}