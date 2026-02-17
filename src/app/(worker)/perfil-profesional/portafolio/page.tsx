'use client';
import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockWorkers } from '@/lib/mock-data';

const worker = mockWorkers[0];

export default function PortafolioPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/perfil-profesional" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Mi Portafolio</h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {worker.portfolio.map((img, i) => (
          <img key={i} src={img} alt={`Trabajo ${i + 1}`} className="w-full aspect-square rounded-xl object-cover" />
        ))}
      </div>
      <Button fullWidth variant="outline" className="gap-2"><Plus className="h-4 w-4" />Agregar Foto</Button>
    </div>
  );
}
