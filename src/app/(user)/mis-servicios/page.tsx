'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ClipboardList } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { StatusBadge } from '@/components/ui/status-badge';
import { EmptyState } from '@/components/ui/empty-state';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { useMockData } from '@/contexts/mock-data-context';
import { useAuth } from '@/contexts/AuthContext';
import { formatDate } from '@/lib/utils';

export default function MisServiciosPage() {
  const { requests } = useMockData();
  const { profile } = useAuth();
  const userId = profile?.id || 'u1';
  const userRequests = requests.filter((r) => r.userId === userId);
  const [tab, setTab] = useState('all');
  const tabs = [
    { value: 'all', label: 'Todos', count: userRequests.length },
    { value: 'active', label: 'Activos', count: userRequests.filter((r) => ['pending', 'quoted', 'accepted', 'in_progress'].includes(r.status)).length },
    { value: 'completed', label: 'Completados', count: userRequests.filter((r) => r.status === 'completed').length },
  ];
  const filtered = tab === 'all' ? userRequests : tab === 'active' ? userRequests.filter((r) => ['pending', 'quoted', 'accepted', 'in_progress'].includes(r.status)) : userRequests.filter((r) => r.status === 'completed');

  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-xl font-bold text-text">Mis Servicios</h1>
      <Tabs tabs={tabs} value={tab} onChange={setTab} />
      {filtered.length === 0 ? (
        <EmptyState icon={ClipboardList} title="Sin servicios" description="Aún no tienes servicios en esta categoría" actionLabel="Solicitar Servicio" onAction={() => {}} />
      ) : (
        <div className="space-y-3">
          {filtered.map((s) => (
            <Link key={s.id} href={`/mis-servicios/${s.id}`} className="no-underline">
              <Card padding="md" hover>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-semibold text-text">{s.title}</p>
                  <StatusBadge status={s.status} />
                </div>
                <p className="text-xs text-text-secondary">{SERVICE_CATEGORIES.find((c) => c.id === s.categoryId)?.name} • {formatDate(s.createdAt)}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
