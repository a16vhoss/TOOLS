'use client';
import { ArrowLeft, MapPin, Plus } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function DireccionesPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/perfil" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Mis Direcciones</h1>
      </div>
      <Card padding="md">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div className="flex-1">
            <div className="flex items-center gap-2"><p className="text-sm font-medium text-text">Casa</p><Badge variant="info" size="sm">Principal</Badge></div>
            <p className="text-sm text-text-secondary mt-1">Av. Reforma 222, Juárez, Ciudad de México, CDMX 06600</p>
          </div>
        </div>
      </Card>
      <Card padding="md">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-text-secondary mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-text">Oficina</p>
            <p className="text-sm text-text-secondary mt-1">Av. Insurgentes Sur 500, Del Valle, CDMX 03100</p>
          </div>
        </div>
      </Card>
      <Button fullWidth variant="outline" className="gap-2"><Plus className="h-4 w-4" />Agregar Dirección</Button>
    </div>
  );
}
