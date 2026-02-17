'use client';
import { UserPlus, Bell, Wallet } from 'lucide-react';

const steps = [
  { icon: UserPlus, step: '1', title: 'Crea tu perfil', description: 'Regístrate, sube tus certificaciones y completa tu perfil profesional.' },
  { icon: Bell, step: '2', title: 'Recibe solicitudes', description: 'Te notificamos cuando hay trabajos disponibles en tu zona y especialidad.' },
  { icon: Wallet, step: '3', title: 'Gana dinero', description: 'Completa trabajos, recibe pagos seguros y construye tu reputación.' },
];

export function HowItWorksWorkerSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">Para Profesionales</h2>
        <p className="text-center text-text-secondary mb-12">Haz crecer tu negocio con La palomita azul</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="relative mx-auto mb-6 w-fit">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <s.icon className="h-8 w-8 text-secondary-dark" />
                </div>
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">{s.step}</span>
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
