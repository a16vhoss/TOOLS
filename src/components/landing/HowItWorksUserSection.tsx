'use client';
import { Search, MessageSquare, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Search, step: '1', title: 'Describe tu necesidad', description: 'Cuéntanos qué servicio necesitas, agrega fotos y selecciona la urgencia.' },
  { icon: MessageSquare, step: '2', title: 'Recibe cotizaciones', description: 'Profesionales verificados te envían cotizaciones. Compara precios y reseñas.' },
  { icon: CheckCircle, step: '3', title: 'Trabajo completado', description: 'El profesional realiza el trabajo. Paga de forma segura y deja tu reseña.' },
];

export function HowItWorksUserSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">¿Cómo funciona?</h2>
        <p className="text-center text-text-secondary mb-12">Para usuarios que buscan servicios</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="relative mx-auto mb-6 w-fit">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">{s.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
