'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { SearchBar } from '@/components/ui/search-bar';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import { mockWorkers } from '@/lib/mock-data';

export default function TrabajadoresPage() {
  const [search, setSearch] = useState('');
  const filtered = mockWorkers.filter((w) => w.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Trabajadores ({mockWorkers.length})</h1>
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar trabajador..." />
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-bg">
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Nombre</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Categorías</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Rating</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Trabajos</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Verificación</th>
            </tr></thead>
            <tbody>
              {filtered.map((w) => (
                <tr key={w.id} className="border-b border-border hover:bg-bg/50">
                  <td className="px-4 py-3 font-medium text-text">{w.name}</td>
                  <td className="px-4 py-3 text-text-secondary">{w.categories.join(', ')}</td>
                  <td className="px-4 py-3"><StarRating rating={w.rating} size="sm" /></td>
                  <td className="px-4 py-3 text-text-secondary">{w.completedJobs}</td>
                  <td className="px-4 py-3">
                    <Badge variant={w.verificationStatus === 'approved' ? 'success' : w.verificationStatus === 'pending' ? 'warning' : 'error'} size="sm">
                      {w.verificationStatus === 'approved' ? 'Verificado' : w.verificationStatus === 'pending' ? 'Pendiente' : 'Rechazado'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
