import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface ServiciosPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServiciosPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });
  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
    alternates: {
      canonical: `https://ellyspartyrental.com/${locale}/servicios`,
      languages: {
        en: 'https://ellyspartyrental.com/en/servicios',
        es: 'https://ellyspartyrental.com/es/servicios',
      },
    },
  };
}

export default async function ServiciosPage({ params }: ServiciosPageProps) {
  const { locale } = await params;
  const t = await getTranslations('Services');

  const categorias = [
    {
      id: 'bouncy-houses',
      title: t('categories.bouncy.title'),
      desc: t('categories.bouncy.desc'),
      img: '/inventario/colorful.jpg'
    },
    {
      id: 'pool-water',
      title: t('categories.water.title'),
      desc: t('categories.water.desc'),
      img: '/inventario/doublelane.jpg'
    },
    {
      id: 'sillas-mesas',
      title: t('categories.chairs.title'),
      desc: t('categories.chairs.desc'),
      img: '/inventario/Sillas.jpg'
    },
    {
      id: 'party-add-ons',
      title: t('categories.addons.title'),
      desc: t('categories.addons.desc'),
      img: '/inventario/maquinas.jpg'
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título principal traducido */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          {t('title')}
        </h1>
        {/* Descripción traducida */}
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 flex flex-col sm:flex-row hover:shadow-xl transition-all group">
              <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden">
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
                {/* Enlace corregido para mantener el idioma activo en la URL */}
                <Link 
                  href={`/${locale}/servicios/${cat.id}`}
                  className="block text-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-sm hover:bg-pink-600 transition-colors"
                >
                  {t('exploreBtn')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}