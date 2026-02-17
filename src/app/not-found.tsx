import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-xl font-semibold text-text mb-2">Página no encontrada</h2>
      <p className="text-text-secondary mb-6">Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold no-underline hover:bg-primary-dark transition-colors">
        Volver al Inicio
      </Link>
    </div>
  );
}
