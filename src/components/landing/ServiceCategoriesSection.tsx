'use client';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { Card } from '@/components/ui/card';

export function ServiceCategoriesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">Nuestros Servicios</h2>
        <p className="text-center text-text-secondary mb-12">Encuentra el profesional perfecto para cualquier necesidad</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <Card key={cat.id} padding="lg" hover className="text-center">
              <div className="h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: cat.bgColor }}>
                <cat.icon className="h-7 w-7" style={{ color: cat.color }} />
              </div>
              <h3 className="font-semibold text-text text-sm md:text-base">{cat.name}</h3>
              <p className="text-xs text-text-secondary mt-1 hidden md:block">{cat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
