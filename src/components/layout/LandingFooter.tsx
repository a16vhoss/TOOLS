'use client';
import Link from 'next/link';


export function LandingFooter() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.jpeg" alt="La palomita azul" className="h-8 w-8 rounded-lg object-cover" />
              <span className="text-xl font-bold">La palomita azul</span>
            </div>
            <p className="text-sm text-gray-400">Conectamos familias con profesionales verificados para servicios del hogar en México.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Plomería</a></li>
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Electricidad</a></li>
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Pintura</a></li>
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Limpieza</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-white no-underline text-gray-400">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacidad" className="hover:text-white no-underline text-gray-400">Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white no-underline text-gray-400">Términos</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2024 La palomita azul. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
