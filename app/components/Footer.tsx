// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-pink-500">Elly's Party Rental</h3>
          <p className="text-gray-400">Llevando la máxima diversión y seguridad a tus eventos en todo Massachusetts.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Horario de Trabajo</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Lunes a Viernes: 0:00 AM - 0:00 PM</li>
            <li>Sábados y Domingos: 0:00 AM - 0:00 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contacto y Redes</h4>
          <p className="text-gray-400 mb-2">📍 Massachusetts, USA</p>
          <p className="text-gray-400 mb-4">📞 781-692-5367</p>
          <p className="text-gray-400 mb-6">📧 ellyspartyrental@gmail.com</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Elly's Party Rental. Todos los derechos reservados.
      </div>

      &copy; {new Date().getFullYear()} Elly's Party Rental. Todos los derechos reservados.
    </footer>
  );
}