'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { mockWorkers } from '@/lib/mock-data';

const worker = mockWorkers[0];

export default function EditarPerfilProfesionalPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/perfil-profesional" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Editar Perfil</h1>
      </div>
      <div className="space-y-4">
        <Input label="Nombre completo" defaultValue={worker.name} />
        <Input label="Correo electrónico" defaultValue={worker.email} type="email" />
        <Input label="Teléfono" defaultValue={worker.phone} type="tel" />
        <TextArea label="Biografía" defaultValue={worker.bio} rows={4} />
        <Input label="Tarifa por hora (MXN)" defaultValue={String(worker.hourlyRate)} type="number" />
      </div>
      <Button fullWidth size="lg">Guardar Cambios</Button>
    </div>
  );
}
