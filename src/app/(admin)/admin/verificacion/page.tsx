'use client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { mockWorkers } from '@/lib/mock-data';
import { Shield, CheckCircle, XCircle, Clock } from 'lucide-react';

const pending = mockWorkers.filter((w) => w.verificationStatus === 'pending');
const approved = mockWorkers.filter((w) => w.verificationStatus === 'approved').slice(0, 5);
const rejected = mockWorkers.filter((w) => w.verificationStatus === 'rejected');

export default function VerificacionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Verificación de Profesionales</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <h2 className="font-semibold text-text mb-3 flex items-center gap-2"><Clock className="h-5 w-5 text-warning" />Pendientes ({pending.length})</h2>
          <div className="space-y-3">
            {pending.map((w) => (
              <Card key={w.id} padding="md">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar name={w.name} size="md" />
                  <div><p className="text-sm font-medium text-text">{w.name}</p><p className="text-xs text-text-secondary">{w.categories.join(', ')}</p></div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" fullWidth>Aprobar</Button>
                  <Button size="sm" variant="danger" fullWidth>Rechazar</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-text mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-success" />Aprobados ({approved.length})</h2>
          <div className="space-y-3">
            {approved.map((w) => (
              <Card key={w.id} padding="sm">
                <div className="flex items-center gap-3">
                  <Avatar name={w.name} size="sm" />
                  <div className="flex-1"><p className="text-sm font-medium text-text">{w.name}</p><p className="text-xs text-text-secondary">{w.categories.join(', ')}</p></div>
                  <Badge variant="success" size="sm">Verificado</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-text mb-3 flex items-center gap-2"><XCircle className="h-5 w-5 text-error" />Rechazados ({rejected.length})</h2>
          <div className="space-y-3">
            {rejected.map((w) => (
              <Card key={w.id} padding="sm">
                <div className="flex items-center gap-3">
                  <Avatar name={w.name} size="sm" />
                  <div className="flex-1"><p className="text-sm font-medium text-text">{w.name}</p><p className="text-xs text-text-secondary">{w.categories.join(', ')}</p></div>
                  <Badge variant="error" size="sm">Rechazado</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
