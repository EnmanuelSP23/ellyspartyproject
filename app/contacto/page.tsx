// src/app/contacto/page.tsx
export default function ContactoPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2">¡Contáctanos hoy!</h1>
        <p className="text-center text-gray-500 mb-8">Estamos listos para ayudarte a planificar tu próximo evento.</p>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-2xl flex items-center space-x-4">
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Teléfono Directo</p>
              <a href="tel:7816925367" className="text-lg font-bold text-blue-600 hover:underline">781-692-5367</a>
            </div>
          </div>

          <div className="p-4 bg-pink-50 rounded-2xl flex items-center space-x-4">
            <span className="text-2xl">📧</span>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Correo Electrónico</p>
              <a href="mailto:ellyspartyrental@gmail.com" className="text-lg font-bold text-pink-600 hover:underline">ellyspartyrental@gmail.com</a>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-2xl flex items-center space-x-4">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Zona de Cobertura</p>
              <p className="text-lg font-bold text-gray-800">Todo el estado de Massachusetts</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          *Nota de seguridad interna: Credenciales del sistema resguardadas con éxito.
        </div>
      </div>
    </main>
  );
}