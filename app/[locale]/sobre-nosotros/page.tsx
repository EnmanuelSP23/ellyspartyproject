import { getTranslations } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations('About'); // Carga el bloque "About"

  return (
    <main className="bg-white text-slate-900 min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título de la Página */}
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          {t('title')}
        </h1>
        
        {/* Descripción principal */}
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
          {t('description')}
        </p>

        {/* Bloque de Misión */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            {t('missionTitle')}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {t('missionDesc')}
          </p>
        </div>
      </div>
    </main>
  );
}