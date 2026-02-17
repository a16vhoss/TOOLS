'use client';
import Link from 'next/link';
import { ArrowLeft, Award, Plus, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockWorkers } from '@/lib/mock-data';

const worker = mockWorkers[0];

export default function CertificacionesPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/perfil-profesional" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Certificaciones</h1>
      </div>
      {worker.certifications.map((cert) => (
        <Card key={cert.id} padding="md">
          <div className="flex items-start gap-3">
            <Award className="h-6 w-6 text-secondary shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2"><p className="text-sm font-semibold text-text">{cert.name}</p>{cert.verified && <CheckCircle className="h-4 w-4 text-success" />}</div>
              <p className="text-xs text-text-secondary">{cert.issuer} • {cert.date}</p>
              {cert.verified ? <Badge variant="success" size="sm" className="mt-1">Verificada</Badge> : <Badge variant="warning" size="sm" className="mt-1">Pendiente</Badge>}
            </div>
          </div>
        </Card>
      ))}
      <Button fullWidth variant="outline" className="gap-2"><Plus className="h-4 w-4" />Agregar Certificación</Button>
    </div>
  );
}
