'use client';
import { Shield, CreditCard, Star, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';

const props = [
  { icon: Shield, title: 'Profesionales Verificados', description: 'Todos nuestros profesionales pasan por un proceso de verificación de identidad, antecedentes y habilidades.' },
  { icon: CreditCard, title: 'Pagos Seguros', description: 'Tu dinero está protegido. Solo se libera el pago cuando confirmas que el trabajo está completo.' },
  { icon: Star, title: 'Calidad Garantizada', description: 'Sistema de reseñas transparente. Si no estás satisfecho, te ayudamos a resolver cualquier situación.' },
  { icon: Headphones, title: 'Soporte 24/7', description: 'Nuestro equipo de soporte está disponible las 24 horas para ayudarte con cualquier duda o problema.' },
];

export function ValuePropsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">¿Por qué elegir La palomita azul?</h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">La plataforma más confiable para servicios en México</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop) => (
            <Card key={prop.title} padding="lg" className="text-center">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text mb-2">{prop.title}</h3>
              <p className="text-sm text-text-secondary">{prop.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
