import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css"; // Ajustado para subir un nivel ya que ahora está dentro de [locale]

// Definimos el tipo de la prop params como una Promesa en Next.js moderno
interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // 1. Resolvemos la promesa de params usando await antes de usar "locale"
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 2. Obtenemos los mensajes de traducción correspondientes al idioma actual
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}