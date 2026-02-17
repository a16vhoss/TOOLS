'use client';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Shield } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { mockWorkers } from '@/lib/mock-data';
import { mockServiceCategories } from '@/lib/mock-data/services';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

export default function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = use(params);
  const category = SERVICE_CATEGORIES.find((c) => c.id === categoryId);
  const fullCategory = mockServiceCategories.find((c) => c.id === categoryId);
  const workers = mockWorkers.filter((w) => w.categories.includes(categoryId));

  if (!category) return <div className="p-4">Categoría no encontrada</div>;

  return (
    <div className="px-4 py-4 space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/servicios" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: category.bgColor }}>
          <category.icon className="h-5 w-5" style={{ color: category.color }} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-text">{category.name}</h1>
          <p className="text-sm text-text-secondary">{category.description}</p>
        </div>
      </div>

      {fullCategory && (
        <section>
          <h2 className="font-semibold text-text mb-3">Subcategorías</h2>
          <div className="grid grid-cols-2 gap-2">
            {fullCategory.subcategories.map((sub) => (
              <Card key={sub.id} padding="sm" hover>
                <p className="text-sm font-medium text-text">{sub.name}</p>
                <p className="text-xs text-primary mt-1">{formatCurrency(sub.avgPrice)} promedio</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-semibold text-text mb-3">Profesionales Disponibles ({workers.length})</h2>
        <div className="space-y-3">
          {workers.map((w) => (
            <Link key={w.id} href={`/trabajador/${w.id}`} className="no-underline">
              <Card padding="md" hover>
                <div className="flex items-start gap-3">
                  <Avatar name={w.name} size="lg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-text truncate">{w.name}</p>
                      {w.verified && <Shield className="h-4 w-4 text-primary shrink-0" />}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      <span className="text-sm text-text">{w.rating}</span>
                      <span className="text-xs text-text-light">({w.reviewCount} reseñas)</span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">{w.bio}</p>
                    <p className="text-sm font-medium text-primary mt-1">{formatCurrency(w.hourlyRate)}/hr</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Link href="/solicitar" className="block no-underline">
        <Button fullWidth size="lg">Solicitar {category.name}</Button>
      </Link>
    </div>
  );
}
