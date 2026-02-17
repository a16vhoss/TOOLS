'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LandingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '#como-funciona', label: 'Cómo Funciona' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#precios', label: 'Precios' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-text">La palomita azul</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-text-secondary hover:text-primary no-underline transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login"><Button variant="ghost" size="sm">Iniciar Sesión</Button></Link>
            <Link href="/registro"><Button size="sm">Registrarse</Button></Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="block text-sm font-medium text-text-secondary hover:text-primary no-underline py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Link href="/login" className="block no-underline"><Button variant="outline" fullWidth size="sm">Iniciar Sesión</Button></Link>
              <Link href="/registro" className="block no-underline"><Button fullWidth size="sm">Registrarse</Button></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
