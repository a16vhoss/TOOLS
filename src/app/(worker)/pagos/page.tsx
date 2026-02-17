'use client';
import Link from 'next/link';
import { DollarSign, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockWorkers, mockPayments } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';

const worker = mockWorkers[0];
const workerPayments = mockPayments.filter((p) => p.workerId === 'w1');

export default function PagosPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-xl font-bold text-text">Pagos y Retiros</h1>

      <Card padding="md" className="bg-primary border-primary text-white">
        <p className="text-sm text-blue-100">Disponible para retiro</p>
        <p className="text-3xl font-bold mt-1">{formatCurrency(worker.earnings.available)}</p>
        <Link href="/pagos/retirar" className="no-underline">
          <Button variant="secondary" size="sm" className="mt-3">Retirar Fondos</Button>
        </Link>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card padding="md"><p className="text-xs text-text-secondary">Este mes</p><p className="text-lg font-bold text-text">{formatCurrency(worker.earnings.thisMonth)}</p></Card>
        <Card padding="md"><p className="text-xs text-text-secondary">Pendiente</p><p className="text-lg font-bold text-text">{formatCurrency(worker.earnings.pending)}</p></Card>
      </div>

      <section>
        <h2 className="font-semibold text-text mb-3">Historial de Pagos</h2>
        <div className="space-y-2">
          {workerPayments.map((pay) => (
            <Card key={pay.id} padding="sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-success-light flex items-center justify-center">
                  <ArrowDownLeft className="h-4 w-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text">Pago por servicio</p>
                  <p className="text-xs text-text-secondary">{formatDate(pay.createdAt)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-success">+{formatCurrency(pay.workerEarning)}</p>
                  <Badge variant={pay.status === 'completed' ? 'success' : 'warning'} size="sm">{pay.status === 'completed' ? 'Completado' : 'Pendiente'}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
