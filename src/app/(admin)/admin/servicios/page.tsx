'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { StatusBadge } from '@/components/ui/status-badge';
import { Badge } from '@/components/ui/badge';
import { mockRequests } from '@/lib/mock-data';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export default function AdminServiciosPage() {
  const [tab, setTab] = useState('all');
  const tabs = [
    { value: 'all', label: 'Todos', count: mockRequests.length },
    { value: 'active', label: 'Activos', count: mockRequests.filter((r) => ['pending', 'quoted', 'accepted', 'in_progress'].includes(r.status)).length },
    { value: 'completed', label: 'Completados', count: mockRequests.filter((r) => r.status === 'completed').length },
  ];
  const filtered = tab === 'all' ? mockRequests : tab === 'active' ? mockRequests.filter((r) => ['pending', 'quoted', 'accepted', 'in_progress'].includes(r.status)) : mockRequests.filter((r) => r.status === 'completed');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text">Servicios</h1>
        <Link href="/admin/servicios/categorias"><Badge variant="info" size="md">Gestionar Categorías</Badge></Link>
      </div>
      <Tabs tabs={tabs} value={tab} onChange={setTab} />
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-bg">
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Título</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Categoría</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Ciudad</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Fecha</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Estado</th>
            </tr></thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-border hover:bg-bg/50">
                  <td className="px-4 py-3 font-medium text-text">{r.title}</td>
                  <td className="px-4 py-3 text-text-secondary">{SERVICE_CATEGORIES.find((c) => c.id === r.categoryId)?.name}</td>
                  <td className="px-4 py-3 text-text-secondary">{r.address.city}</td>
                  <td className="px-4 py-3 text-text-secondary">{formatDate(r.createdAt)}</td>
                  <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
