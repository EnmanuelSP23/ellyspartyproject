import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string; categoria: string }>;
}

export default async function CategoriaDetallePage({ params }: PageProps) {
  const { locale, categoria } = await params;
  
  // Pasa el locale explícitamente como segundo argumento:
  const t = await getTranslations({ locale, namespace: 'CategoryDetail' });

  // Mapeo estático de imágenes, videos y precios base que no requieren traducción
  // Hacemos que 'img' y 'video' sean opcionales (?) para soportar ambos formatos
  const BD_IMAGENES_PRECIOS: Record<
    string,
    {
      items: Array<{
        id: string;
        price: string;
        img?: string;
        video?: string;
      }>;
    }
  > = {
    'bouncy-houses': {
      items: [
        { id: 'bounce1', price: '$150+', img: '/inventario/bouncy4.png' },
        { id: 'bounce2', price: '$220+', img: '/inventario/bouncy2.jpg' },
        { id: 'bounce3', price: '$220+', img: '/inventario/bouncy3.jpg' },
        { id: 'bounce4', price: '$220+', img: '/inventario/bouncy1.png' }
      ]
    },
    'pool-water': {
      items: [
        { id: 'slides', price: '$260+', img: '/inventario/tobogan-agua2.jpg' },
        { id: 'foam', price: '$180+', img: '/inventario/tobogan-agua1.jpg' },
        { id: 'video1', price: '$180+', video: '/inventario/video1.MOV' }
      ]
    },
    'sillas-mesas': {
      items: [
        { id: 'tents', price: '$100+', img: '/inventario/tent.jpg' },
        { id: 'tables', price: '$10+', img: '/inventario/mesas.jpg' },
        { id: 'chairs', price: '$2+', img: '/folding.jpg' },
        { id: 'linens', price: '$8+', img: '/inventario/sillas.jpg' }
      ]
    },
    'party-add-ons': {
      items: [
        { id: 'popcorn', price: '$60+', img: 'https://images.unsplash.com/photo-1569871175133-c8651f8a70c8?w=600' },
        { id: 'cotton', price: '$60+', img: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600' },
        { id: 'snow', price: '$60+', img: 'https://images.unsplash.com/photo-1495147412217-90c41be36562?w=600' },
        { id: 'packages', price: 'Promo', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600' }
      ]
    }
  };

  const datosCategoria = BD_IMAGENES_PRECIOS[categoria];

  // Si el usuario ingresa a una ruta que no existe (ej. /servicios/categoria-falsa), mostramos un 404
  if (!datosCategoria) {
    notFound();
  }

  // Combinamos la estructura estática con los textos correspondientes del JSON de traducciones
  const itemsTraducidos = datosCategoria.items.map((item) => {
    return {
      id: item.id,
      price: item.price,
      img: item.img || null,     // Mantiene la imagen si existe
      video: item.video || null, // Agrega soporte para el video si existe
      name: t(`categories.${categoria}.items.${item.id}.name`),
      size: t(`categories.${categoria}.items.${item.id}.size`),
      desc: t(`categories.${categoria}.items.${item.id}.desc`)
    };
  });

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Botón superior de retroceso preservando el idioma actual */}
        <div className="mb-6">
          <Link 
            href={`/${locale}/servicios`} 
            className="text-blue-600 font-semibold hover:text-pink-600 transition inline-flex items-center space-x-2"
          >
            <span>←</span> <span>{t('backBtn')}</span>
          </Link>
        </div>

        {/* Encabezado dinámico de la categoría */}
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          {t(`categories.${categoria}.title`)}
        </h1>
        <p className="text-gray-500 mb-10 text-sm sm:text-base">
          {t('subtitle')}
        </p>

        {/* Grid de Productos / Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsTraducidos.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                {/* Contenedor multimedia adaptado para detectar Video o Imagen */}
                <div className="h-56 bg-gray-100 relative overflow-hidden">
                  {item.video ? (
                    <video 
                      src={item.video} 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.img || '/placeholder.jpg'} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  )}
                  
                  {/* El badge de precio se mantiene visible encima de cualquier formato */}
                  <div className="absolute top-3 right-3 bg-pink-500 text-white font-extrabold px-3 py-1 rounded-full text-sm shadow-sm z-10">
                    {item.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">
                    {t('sizeLabel')}: {item.size}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              
              {/* Botón de cotización dirigido a la página de contacto con el idioma correspondiente */}
              <div className="p-6 pt-0">
                <Link 
                  href={`/${locale}/contacto`} 
                  className="block text-center bg-blue-600 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-pink-600 transition-colors shadow-sm"
                >
                  {t('quoteBtn')}
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}