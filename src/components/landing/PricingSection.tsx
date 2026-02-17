'use client';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function PricingSection() {
  return (
    <section id="precios" className="py-16 md:py-24 bg-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">Transparente y Simple</h2>
        <p className="text-center text-text-secondary mb-12">Sin costos ocultos. Solo pagas por el servicio que recibes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card padding="lg">
            <h3 className="text-lg font-bold text-text mb-2">Para Usuarios</h3>
            <p className="text-3xl font-bold text-primary mb-1">Gratis</p>
            <p className="text-sm text-text-secondary mb-6">Sin costo para solicitar servicios</p>
            <ul className="space-y-3 mb-6">
              {['Publica solicitudes gratis', 'Recibe múltiples cotizaciones', 'Chat directo con profesionales', 'Pagos seguros', 'Garantía de satisfacción'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text"><Check className="h-4 w-4 text-success shrink-0" />{f}</li>
              ))}
            </ul>
            <Link href="/registro"><Button fullWidth>Comenzar Gratis</Button></Link>
          </Card>
          <Card padding="lg" className="border-primary border-2 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Popular</div>
            <h3 className="text-lg font-bold text-text mb-2">Para Profesionales</h3>
            <p className="text-3xl font-bold text-primary mb-1">15%</p>
            <p className="text-sm text-text-secondary mb-6">Comisión por trabajo completado</p>
            <ul className="space-y-3 mb-6">
              {['Perfil profesional verificado', 'Recibe solicitudes en tu zona', 'Herramientas de gestión', 'Pagos directos a tu cuenta', 'Soporte prioritario'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text"><Check className="h-4 w-4 text-success shrink-0" />{f}</li>
              ))}
            </ul>
            <Link href="/registro"><Button fullWidth>Registrarme como Profesional</Button></Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
