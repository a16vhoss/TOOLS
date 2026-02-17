'use client';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/status-badge';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { mockRequests } from '@/lib/mock-data';
import { formatDate, formatCurrency } from '@/lib/utils';
import { mockQuotes } from '@/lib/mock-data/quotes';

const workerJobs = mockRequests.filter((r) => r.assignedWorkerId === 'w1');

export default function MisTrabajosPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <h1 className="text-xl font-bold text-text">Mis Trabajos</h1>
      <div className="space-y-3">
        {workerJobs.map((job) => {
          const quote = mockQuotes.find((q) => q.requestId === job.id && q.workerId === 'w1');
          return (
            <Link key={job.id} href={`/mis-trabajos/${job.id}`} className="no-underline">
              <Card padding="md" hover>
                <div className="flex items-start justify-between mb-1">
                  <p className="text-sm font-semibold text-text">{job.title}</p>
                  <StatusBadge status={job.status} />
                </div>
                <p className="text-xs text-text-secondary">{SERVICE_CATEGORIES.find((c) => c.id === job.categoryId)?.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-text-light">{formatDate(job.createdAt)}</span>
                  {quote && <span className="text-sm font-semibold text-primary">{formatCurrency(quote.amount)}</span>}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
