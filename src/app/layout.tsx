import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'La palomita azul - Servicios del Hogar en México',
  description: 'Conectamos familias con profesionales verificados para servicios del hogar. Plomería, electricidad, pintura, limpieza y más.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'La palomita azul - Servicios del Hogar en México',
    description: 'Conectamos familias con profesionales verificados para servicios del hogar.',
    type: 'website',
    locale: 'es_MX',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4AB3E2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
