'use client';
import Link from 'next/link';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { SearchBar } from '@/components/ui/search-bar';
import { useState } from 'react';

export default function ServiciosPage() {
  const [search, setSearch] = useState('');
  const filtered = SERVICE_CATEGORIES.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-xl font-bold text-text">Servicios</h1>
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar categoría..." />
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((cat) => (
          <Link key={cat.id} href={`/servicios/${cat.id}`} className="no-underline">
            <Card padding="md" hover>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: cat.bgColor }}>
                  <cat.icon className="h-6 w-6" style={{ color: cat.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-text">{cat.name}</h3>
                  <p className="text-sm text-text-secondary">{cat.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
