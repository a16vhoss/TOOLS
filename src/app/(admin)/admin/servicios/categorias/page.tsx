'use client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Toggle } from '@/components/ui/toggle';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { mockServiceCategories } from '@/lib/mock-data/services';

export default function CategoriasPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Categorías de Servicio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {SERVICE_CATEGORIES.map((cat) => {
          const full = mockServiceCategories.find((c) => c.id === cat.id);
          return (
            <Card key={cat.id} padding="md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: cat.bgColor }}>
                    <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                  </div>
                  <div><p className="font-semibold text-text">{cat.name}</p><p className="text-xs text-text-secondary">{cat.description}</p></div>
                </div>
                <Toggle checked={true} />
              </div>
              {full && (
                <div className="flex flex-wrap gap-1">
                  {full.subcategories.map((sub) => (
                    <Badge key={sub.id} variant="default" size="sm">{sub.name}</Badge>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
