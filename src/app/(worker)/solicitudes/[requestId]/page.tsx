'use client';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { mockRequests } from '@/lib/mock-data';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPlaceholder } from '@/components/ui/map-placeholder';
import { StatusBadge } from '@/components/ui/status-badge';
import { formatDate } from '@/lib/utils';

export default function RequestDetailPage({ params }: { params: Promise<{ requestId: string }> }) {
  const { requestId } = use(params);
  const request = mockRequests.find((r) => r.id === requestId);
  if (!request) return <div className="p-4">Solicitud no encontrada</div>;
  const category = SERVICE_CATEGORIES.find((c) => c.id === request.categoryId);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/solicitudes" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text flex-1">Detalle de Solicitud</h1>
        <StatusBadge status={request.status} />
      </div>

      <Card padding="md">
        <h2 className="font-semibold text-text mb-2">{request.title}</h2>
        <div className="flex gap-2 mb-3">
          <Badge variant="info" size="sm">{category?.name}</Badge>
          <Badge variant={request.urgency === 'high' || request.urgency === 'emergency' ? 'error' : 'warning'} size="sm">
            <AlertTriangle className="h-3 w-3 mr-0.5" />{request.urgency === 'emergency' ? 'Urgente' : request.urgency}
          </Badge>
        </div>
        <p className="text-sm text-text-secondary">{request.description}</p>
        {request.photos.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-3">
            {request.photos.map((p, i) => <img key={i} src={p} alt="" className="w-full aspect-square rounded-lg object-cover" />)}
          </div>
        )}
      </Card>

      <Card padding="md">
        <h3 className="font-semibold text-text mb-2">Ubicación</h3>
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="h-4 w-4 text-text-secondary mt-0.5" />
          <p className="text-sm text-text-secondary">{request.address.street}, {request.address.colony}, {request.address.city}</p>
        </div>
        <MapPlaceholder address={`${request.address.street}, ${request.address.colony}`} />
      </Card>

      <Card padding="md">
        <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-text-secondary" /><p className="text-sm text-text-secondary">Publicada {formatDate(request.createdAt)}</p></div>
      </Card>

      {request.status === 'pending' && (
        <Link href="/solicitudes/cotizar" className="block no-underline">
          <Button fullWidth size="lg">Enviar Cotización</Button>
        </Link>
      )}
    </div>
  );
}
