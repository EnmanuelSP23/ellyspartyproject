// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Asegúrate de tener tus estilos globales de Tailwind
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elly's Party Rental | Casas Inflables en Massachusetts",
  description: "Llevando la máxima diversión y seguridad a tus eventos en todo Massachusetts. Rentas de bouncy houses, slides, mesas y sillas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        {/* La barra de navegación aparecerá arriba en TODO el sitio */}
        <Navbar />
        
        {/* 'children' representa la página actual que el usuario está viendo (page.tsx) */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* El pie de página aparecerá abajo en TODO el sitio */}
        <Footer />
      </body>
    </html>
  );
}