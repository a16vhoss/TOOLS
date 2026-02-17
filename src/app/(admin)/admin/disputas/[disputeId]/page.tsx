'use client';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TextArea } from '@/components/ui/textarea';
import { mockDisputes } from '@/lib/mock-data';
import { formatDate, cn } from '@/lib/utils';

export default function DisputeDetailPage({ params }: { params: Promise<{ disputeId: string }> }) {
  const { disputeId } = use(params);
  const dispute = mockDisputes.find((d) => d.id === disputeId);
  if (!dispute) return <div className="p-4">Disputa no encontrada</div>;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-3">
        <Link href="/admin/disputas" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-2xl font-bold text-text flex-1">Disputa: {dispute.reason}</h1>
        <Badge variant={dispute.status === 'resolved' ? 'success' : 'warning'} size="md">
          {dispute.status === 'open' ? 'Abierta' : dispute.status === 'investigating' ? 'Investigando' : 'Resuelta'}
        </Badge>
      </div>

      <Card padding="md">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><p className="text-text-secondary">Cliente</p><p className="font-medium text-text">{dispute.userName}</p></div>
          <div><p className="text-text-secondary">Profesional</p><p className="font-medium text-text">{dispute.workerName}</p></div>
          <div><p className="text-text-secondary">Prioridad</p><Badge variant={dispute.priority === 'high' ? 'error' : 'warning'} size="sm">{dispute.priority}</Badge></div>
          <div><p className="text-text-secondary">Fecha</p><p className="text-text">{formatDate(dispute.createdAt)}</p></div>
        </div>
        <p className="text-sm text-text-secondary mt-4">{dispute.description}</p>
        {dispute.resolution && (
          <div className="mt-4 p-3 bg-success-light rounded-lg">
            <p className="text-sm font-medium text-success">Resolución:</p>
            <p className="text-sm text-text">{dispute.resolution}</p>
          </div>
        )}
      </Card>

      <Card padding="md">
        <h3 className="font-semibold text-text mb-4">Mensajes</h3>
        <div className="space-y-4">
          {dispute.messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              <Avatar name={msg.senderName} size="sm" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-text">{msg.senderName}</p>
                  <Badge variant={msg.senderRole === 'admin' ? 'info' : msg.senderRole === 'user' ? 'default' : 'warning'} size="sm">{msg.senderRole === 'admin' ? 'Admin' : msg.senderRole === 'user' ? 'Cliente' : 'Profesional'}</Badge>
                  <span className="text-xs text-text-light">{formatDate(msg.timestamp)}</span>
                </div>
                <p className="text-sm text-text-secondary mt-1">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {dispute.status !== 'resolved' && (
        <Card padding="md" className="space-y-3">
          <TextArea placeholder="Escribir respuesta..." rows={3} />
          <div className="flex gap-2">
            <Button size="sm">Enviar Respuesta</Button>
            <Button size="sm" variant="secondary">Marcar como Resuelta</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
