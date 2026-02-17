'use client';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const testimonials = [
  { name: 'María García', location: 'CDMX', rating: 5, text: 'Juan arregló la fuga en menos de 2 horas. Excelente servicio y muy profesional.' },
  { name: 'Roberto Sánchez', location: 'Monterrey', rating: 5, text: 'Alejandro llegó en 20 minutos cuando me quedé fuera de casa. Increíble.' },
  { name: 'Ana Martínez', location: 'Guadalajara', rating: 5, text: 'Isabel dejó mi departamento impecable. Muy puntual y profesional.' },
  { name: 'Pedro López', location: 'CDMX', rating: 4, text: 'Ricardo instaló las lámparas LED perfecto. Buen precio y calidad.' },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">Lo que dicen nuestros usuarios</h2>
        <p className="text-center text-text-secondary mb-12">Miles de familias ya confían en La palomita azul</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} padding="lg">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-secondary text-secondary' : 'text-border-dark'}`} />
                ))}
              </div>
              <p className="text-sm text-text-secondary mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar name={t.name} size="sm" />
                <div>
                  <p className="text-sm font-medium text-text">{t.name}</p>
                  <p className="text-xs text-text-light">{t.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
