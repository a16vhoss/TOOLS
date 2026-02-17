'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { mockRequests } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';

export default function SolicitudesPage() {
  const [tab, setTab] = useState('pending');
  const allRequests = mockRequests;
  const tabs = [
    { value: 'pending', label: 'Nuevas', count: allRequests.filter((r) => r.status === 'pending').length },
    { value: 'quoted', label: 'Cotizadas', count: allRequests.filter((r) => r.status === 'quoted').length },
    { value: 'accepted', label: 'Aceptadas', count: allRequests.filter((r) => r.status === 'accepted').length },
  ];
  const filtered = allRequests.filter((r) => r.status === tab);

  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-xl font-bold text-text">Solicitudes</h1>
      <Tabs tabs={tabs} value={tab} onChange={setTab} />
      <div className="space-y-3">
        {filtered.map((req) => (
          <Link key={req.id} href={`/solicitudes/${req.id}`} className="no-underline">
            <Card padding="md" hover>
              <p className="text-sm font-semibold text-text">{req.title}</p>
              <p className="text-xs text-text-secondary mt-1 line-clamp-2">{req.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="info" size="sm">{SERVICE_CATEGORIES.find((c) => c.id === req.categoryId)?.name}</Badge>
                <Badge variant={req.urgency === 'high' || req.urgency === 'emergency' ? 'error' : 'warning'} size="sm">{req.urgency === 'emergency' ? 'Urgente' : req.urgency}</Badge>
                <span className="text-xs text-text-light">{formatDate(req.createdAt)}</span>
              </div>
              <p className="text-xs text-text-light mt-1">{req.address.colony}, {req.address.city}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
