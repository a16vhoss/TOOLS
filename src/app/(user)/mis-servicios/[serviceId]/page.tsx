'use client';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MessageCircle } from 'lucide-react';
import { mockRequests, mockQuotes, mockWorkers } from '@/lib/mock-data';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/ui/status-badge';
import { Avatar } from '@/components/ui/avatar';
import { StarRating } from '@/components/ui/star-rating';
import { formatDate, formatCurrency } from '@/lib/utils';

export default function ServiceDetailPage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = use(params);
  const request = mockRequests.find((r) => r.id === serviceId);
  if (!request) return <div className="p-4">Servicio no encontrado</div>;

  const quotes = mockQuotes.filter((q) => q.requestId === serviceId);
  const assignedWorker = request.assignedWorkerId ? mockWorkers.find((w) => w.id === request.assignedWorkerId) : null;
  const category = SERVICE_CATEGORIES.find((c) => c.id === request.categoryId);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/mis-servicios" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text flex-1">Detalle del Servicio</h1>
        <StatusBadge status={request.status} />
      </div>

      <Card padding="md">
        <h2 className="font-semibold text-text">{request.title}</h2>
        <p className="text-sm text-text-secondary mt-1">{request.description}</p>
        <div className="flex items-center gap-4 mt-3 text-xs text-text-light">
          <span>{category?.name}</span>
          <span>{formatDate(request.createdAt)}</span>
        </div>
      </Card>

      <Card padding="md">
        <h3 className="font-semibold text-text mb-3">Línea de Tiempo</h3>
        <div className="space-y-3">
          {request.timeline.map((event, i) => (
            <div key={event.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-primary" />
                {i < request.timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
              </div>
              <div className="pb-3">
                <p className="text-sm font-medium text-text">{event.description}</p>
                <p className="text-xs text-text-light mt-0.5">{formatDate(event.timestamp, 'dd MMM yyyy HH:mm')}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {assignedWorker && (
        <Card padding="md">
          <h3 className="font-semibold text-text mb-3">Profesional Asignado</h3>
          <div className="flex items-center gap-3">
            <Avatar name={assignedWorker.name} size="lg" />
            <div className="flex-1">
              <p className="font-medium text-text">{assignedWorker.name}</p>
              <StarRating rating={assignedWorker.rating} size="sm" />
            </div>
            <Link href="/chat/conv1"><Button size="sm" variant="outline" className="gap-1"><MessageCircle className="h-4 w-4" />Chat</Button></Link>
          </div>
        </Card>
      )}

      {quotes.length > 0 && (
        <Card padding="md">
          <h3 className="font-semibold text-text mb-3">Cotizaciones ({quotes.length})</h3>
          <div className="space-y-3">
            {quotes.map((q) => (
              <div key={q.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar name={q.workerName} size="sm" />
                    <div>
                      <p className="text-sm font-medium text-text">{q.workerName}</p>
                      <StarRating rating={q.workerRating} size="sm" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary">{formatCurrency(q.amount)}</p>
                </div>
                <p className="text-sm text-text-secondary mt-2">{q.description}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-text-light">
                  <span><Clock className="h-3 w-3 inline mr-0.5" />{q.estimatedDuration}</span>
                  {q.includesMaterials && <span>Materiales incluidos</span>}
                </div>
                {q.status === 'pending' && (
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" fullWidth>Aceptar</Button>
                    <Button size="sm" variant="outline" fullWidth>Rechazar</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {request.status === 'completed' && (
        <Link href={`/mis-servicios/${serviceId}/calificar`} className="block no-underline">
          <Button fullWidth size="lg">Calificar Servicio</Button>
        </Link>
      )}
    </div>
  );
}
