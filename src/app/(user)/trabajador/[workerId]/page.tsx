'use client';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Shield, MapPin, Clock, Briefcase } from 'lucide-react';
import { mockWorkers, mockReviews } from '@/lib/mock-data';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StarRating } from '@/components/ui/star-rating';
import { formatCurrency } from '@/lib/utils';

export default function WorkerProfilePage({ params }: { params: Promise<{ workerId: string }> }) {
  const { workerId } = use(params);
  const worker = mockWorkers.find((w) => w.id === workerId);
  const reviews = mockReviews.filter((r) => r.workerId === workerId);
  if (!worker) return <div className="p-4">Profesional no encontrado</div>;

  return (
    <div className="px-4 py-4 space-y-4">
      <Link href="/servicios" className="no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>

      <div className="text-center">
        <Avatar name={worker.name} size="xl" className="mx-auto" />
        <h1 className="text-xl font-bold text-text mt-3">{worker.name}</h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          {worker.verified && <Badge variant="success" size="sm"><Shield className="h-3 w-3 mr-0.5" />Verificado</Badge>}
        </div>
        <div className="flex items-center justify-center gap-1 mt-2">
          <StarRating rating={worker.rating} size="sm" />
          <span className="text-sm font-medium text-text ml-1">{worker.rating}</span>
          <span className="text-sm text-text-light">({worker.reviewCount})</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card padding="sm" className="text-center"><Briefcase className="h-5 w-5 text-primary mx-auto mb-1" /><p className="text-lg font-bold text-text">{worker.completedJobs}</p><p className="text-[10px] text-text-secondary">Trabajos</p></Card>
        <Card padding="sm" className="text-center"><Clock className="h-5 w-5 text-primary mx-auto mb-1" /><p className="text-lg font-bold text-text">{worker.yearsExperience}</p><p className="text-[10px] text-text-secondary">Años exp.</p></Card>
        <Card padding="sm" className="text-center"><Star className="h-5 w-5 text-secondary mx-auto mb-1" /><p className="text-lg font-bold text-text">{formatCurrency(worker.hourlyRate)}</p><p className="text-[10px] text-text-secondary">Por hora</p></Card>
      </div>

      <Card padding="md">
        <h3 className="font-semibold text-text mb-2">Acerca de</h3>
        <p className="text-sm text-text-secondary">{worker.bio}</p>
      </Card>

      <Card padding="md">
        <h3 className="font-semibold text-text mb-2">Especialidades</h3>
        <div className="flex flex-wrap gap-2">
          {worker.categories.map((catId) => {
            const cat = SERVICE_CATEGORIES.find((c) => c.id === catId);
            return cat ? <Badge key={catId} variant="info" size="md">{cat.name}</Badge> : null;
          })}
        </div>
      </Card>

      {worker.portfolio.length > 0 && (
        <Card padding="md">
          <h3 className="font-semibold text-text mb-2">Portafolio</h3>
          <div className="grid grid-cols-3 gap-2">
            {worker.portfolio.map((img, i) => (
              <img key={i} src={img} alt={`Trabajo ${i + 1}`} className="w-full aspect-square rounded-lg object-cover" />
            ))}
          </div>
        </Card>
      )}

      {reviews.length > 0 && (
        <Card padding="md">
          <h3 className="font-semibold text-text mb-3">Reseñas ({reviews.length})</h3>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                <div className="flex items-center gap-2">
                  <Avatar name={review.userName} size="sm" />
                  <div><p className="text-sm font-medium text-text">{review.userName}</p><StarRating rating={review.rating} size="sm" /></div>
                </div>
                <p className="text-sm text-text-secondary mt-2">{review.comment}</p>
                {review.workerResponse && (
                  <div className="mt-2 ml-4 pl-3 border-l-2 border-primary">
                    <p className="text-xs text-primary font-medium">Respuesta:</p>
                    <p className="text-sm text-text-secondary">{review.workerResponse}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      <Link href="/solicitar" className="block no-underline">
        <Button fullWidth size="lg">Solicitar Servicio</Button>
      </Link>
    </div>
  );
}
