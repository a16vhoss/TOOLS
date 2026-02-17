'use client';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDisputes } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';

export default function DisputasPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Disputas ({mockDisputes.length})</h1>
      <div className="space-y-4">
        {mockDisputes.map((d) => (
          <Link key={d.id} href={`/admin/disputas/${d.id}`} className="no-underline">
            <Card padding="md" hover>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-text">{d.reason}</p>
                  <p className="text-sm text-text-secondary mt-0.5">{d.userName} vs {d.workerName}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant={d.priority === 'high' ? 'error' : d.priority === 'medium' ? 'warning' : 'default'} size="sm">{d.priority}</Badge>
                  <Badge variant={d.status === 'resolved' ? 'success' : d.status === 'investigating' ? 'warning' : d.status === 'open' ? 'error' : 'default'} size="sm">{d.status === 'open' ? 'Abierta' : d.status === 'investigating' ? 'Investigando' : d.status === 'resolved' ? 'Resuelta' : 'Cerrada'}</Badge>
                </div>
              </div>
              <p className="text-sm text-text-secondary line-clamp-2">{d.description}</p>
              <p className="text-xs text-text-light mt-2">{formatDate(d.createdAt)}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
