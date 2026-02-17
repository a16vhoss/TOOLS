'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Shield, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  { icon: Shield, title: 'Profesionales Verificados', description: 'Todos nuestros profesionales pasan por un riguroso proceso de verificación para tu tranquilidad.', color: 'bg-primary' },
  { icon: Star, title: 'Calidad Garantizada', description: 'Reseñas reales de usuarios como tú. Elige al mejor profesional para tu hogar.', color: 'bg-secondary' },
  { icon: Zap, title: 'Rápido y Fácil', description: 'Solicita un servicio en minutos y recibe cotizaciones de profesionales cercanos.', color: 'bg-success' },
];

export default function BienvenidaPage() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const slide = slides[current];

  const handleNext = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else router.push('/seleccionar-rol');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className={cn('h-24 w-24 rounded-3xl flex items-center justify-center mb-8', slide.color)}>
          <slide.icon className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-text text-center mb-4">{slide.title}</h2>
        <p className="text-text-secondary text-center max-w-sm">{slide.description}</p>
      </div>
      <div className="px-8 pb-12">
        <div className="flex items-center justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <div key={i} className={cn('h-2 rounded-full transition-all', i === current ? 'w-8 bg-primary' : 'w-2 bg-border-dark')} />
          ))}
        </div>
        <Button fullWidth size="lg" onClick={handleNext}>
          {current < slides.length - 1 ? 'Siguiente' : 'Comenzar'}
        </Button>
        {current < slides.length - 1 && (
          <button onClick={() => router.push('/seleccionar-rol')} className="w-full text-center text-sm text-text-secondary mt-4 py-2">Saltar</button>
        )}
      </div>
    </div>
  );
}
