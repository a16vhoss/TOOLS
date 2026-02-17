'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para encontrar al profesional perfecto?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Únete a miles de familias que ya confían en La palomita azul para el mantenimiento de su hogar.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/registro"><Button size="lg" variant="secondary" className="gap-2">Comenzar Ahora <ArrowRight className="h-5 w-5" /></Button></Link>
          <Link href="/registro"><Button size="lg" variant="ghost" className="text-white border-2 border-white/30 hover:bg-white/10">Soy Profesional</Button></Link>
        </div>
      </div>
    </section>
  );
}
