'use client';
import Link from 'next/link';
import { DollarSign, Briefcase, Star, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/ui/status-badge';
import { mockWorkers, mockRequests } from '@/lib/mock-data';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { formatCurrency, formatDate } from '@/lib/utils';

const worker = mockWorkers[0];
const pendingRequests = mockRequests.filter((r) => r.status === 'pending').slice(0, 3);
const activeJobs = mockRequests.filter((r) => r.assignedWorkerId === 'w1' && r.status === 'in_progress');

export default function PanelPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-bold text-text">Hola, Juan</h1>
        <p className="text-sm text-text-secondary">Panel de profesional</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card padding="md">
          <DollarSign className="h-5 w-5 text-success mb-1" />
          <p className="text-xl font-bold text-text">{formatCurrency(worker.earnings.thisMonth)}</p>
          <p className="text-xs text-text-secondary">Este mes</p>
        </Card>
        <Card padding="md">
          <Briefcase className="h-5 w-5 text-primary mb-1" />
          <p className="text-xl font-bold text-text">{worker.completedJobs}</p>
          <p className="text-xs text-text-secondary">Trabajos completados</p>
        </Card>
        <Card padding="md">
          <Star className="h-5 w-5 text-secondary mb-1" />
          <p className="text-xl font-bold text-text">{worker.rating}</p>
          <p className="text-xs text-text-secondary">{worker.reviewCount} reseñas</p>
        </Card>
        <Card padding="md">
          <TrendingUp className="h-5 w-5 text-info mb-1" />
          <p className="text-xl font-bold text-text">{formatCurrency(worker.earnings.pending)}</p>
          <p className="text-xs text-text-secondary">Pago pendiente</p>
        </Card>
      </div>

      <Card padding="md" className="bg-primary border-primary text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-100">Disponible para retiro</p>
            <p className="text-2xl font-bold">{formatCurrency(worker.earnings.available)}</p>
          </div>
          <Link href="/pagos" className="no-underline"><Badge variant="default" className="bg-white/20 text-white">Retirar</Badge></Link>
        </div>
      </Card>

      {activeJobs.length > 0 && (
        <section>
          <h2 className="font-semibold text-text mb-3">Trabajos Activos</h2>
          {activeJobs.map((job) => (
            <Link key={job.id} href={`/mis-trabajos/${job.id}`} className="no-underline">
              <Card padding="md" hover className="mb-2">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-medium text-text">{job.title}</p><p className="text-xs text-text-secondary mt-0.5">{SERVICE_CATEGORIES.find((c) => c.id === job.categoryId)?.name}</p></div>
                  <StatusBadge status={job.status} />
                </div>
              </Card>
            </Link>
          ))}
        </section>
      )}

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-text">Nuevas Solicitudes</h2>
          <Link href="/solicitudes" className="text-sm text-primary no-underline flex items-center gap-1">Ver todas <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="space-y-2">
          {pendingRequests.map((req) => (
            <Link key={req.id} href={`/solicitudes/${req.id}`} className="no-underline">
              <Card padding="sm" hover>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-text">{req.title}</p>
                    <p className="text-xs text-text-secondary">{req.address.colony}, {req.address.city}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={req.urgency === 'high' || req.urgency === 'emergency' ? 'error' : 'warning'} size="sm">{req.urgency === 'emergency' ? 'Urgente' : req.urgency === 'high' ? 'Alta' : 'Media'}</Badge>
                      <span className="text-xs text-text-light">{formatDate(req.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
