'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Star, Clock, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-bg to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight">
            Profesionales de confianza para{' '}
            <span className="text-primary">ti</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            La plataforma más confiable para contratar profesionales en México.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/registro"><Button size="lg" className="gap-2">Solicitar Servicio <ArrowRight className="h-5 w-5" /></Button></Link>
            <Link href="/registro"><Button variant="outline" size="lg">Quiero ser Profesional</Button></Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-text-secondary">
            <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /><span>Verificados</span></div>
            <div className="flex items-center gap-2"><Star className="h-5 w-5 text-secondary" /><span>4.8 promedio</span></div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-success" /><span>Respuesta rápida</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
