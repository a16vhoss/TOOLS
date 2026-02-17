'use client';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, MessageCircle, Phone } from 'lucide-react';
import { mockRequests, mockUsers } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/ui/status-badge';
import { Avatar } from '@/components/ui/avatar';
import { MapPlaceholder } from '@/components/ui/map-placeholder';
import { formatDate } from '@/lib/utils';

export default function WorkerJobDetailPage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = use(params);
  const request = mockRequests.find((r) => r.id === serviceId);
  if (!request) return <div className="p-4">Trabajo no encontrado</div>;
  const user = mockUsers.find((u) => u.id === request.userId);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/mis-trabajos" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text flex-1">Detalle del Trabajo</h1>
        <StatusBadge status={request.status} />
      </div>

      <Card padding="md">
        <h2 className="font-semibold text-text">{request.title}</h2>
        <p className="text-sm text-text-secondary mt-1">{request.description}</p>
      </Card>

      {user && (
        <Card padding="md">
          <h3 className="font-semibold text-text mb-3">Cliente</h3>
          <div className="flex items-center gap-3">
            <Avatar name={user.name} size="md" />
            <div className="flex-1">
              <p className="text-sm font-medium text-text">{user.name}</p>
              <p className="text-xs text-text-secondary">{user.phone}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline"><Phone className="h-4 w-4" /></Button>
              <Link href="/w-chat/conv1"><Button size="sm" variant="outline"><MessageCircle className="h-4 w-4" /></Button></Link>
            </div>
          </div>
        </Card>
      )}

      <Card padding="md">
        <h3 className="font-semibold text-text mb-2">Ubicación</h3>
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="h-4 w-4 text-text-secondary mt-0.5" />
          <p className="text-sm text-text-secondary">{request.address.street}, {request.address.colony}</p>
        </div>
        <MapPlaceholder address={request.address.street} />
      </Card>

      <Card padding="md">
        <h3 className="font-semibold text-text mb-3">Línea de Tiempo</h3>
        <div className="space-y-3">
          {request.timeline.map((event, i) => (
            <div key={event.id} className="flex gap-3">
              <div className="flex flex-col items-center"><div className="h-3 w-3 rounded-full bg-primary" />{i < request.timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}</div>
              <div className="pb-3"><p className="text-sm font-medium text-text">{event.description}</p><p className="text-xs text-text-light mt-0.5">{formatDate(event.timestamp, 'dd MMM yyyy HH:mm')}</p></div>
            </div>
          ))}
        </div>
      </Card>

      {request.status === 'in_progress' && (
        <Button fullWidth size="lg" variant="secondary">Marcar como Completado</Button>
      )}
    </div>
  );
}
