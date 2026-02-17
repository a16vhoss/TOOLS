'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

export default function EditarPerfilPage() {
  return (
    <div className="px-4 py-4 space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/perfil" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Editar Perfil</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="María García López" size="xl" />
        <button className="text-sm text-primary">Cambiar foto</button>
      </div>
      <div className="space-y-4">
        <Input label="Nombre completo" defaultValue="María García López" />
        <Input label="Correo electrónico" defaultValue="maria@email.com" type="email" />
        <Input label="Teléfono" defaultValue="+52 55 1234 5678" type="tel" />
      </div>
      <Button fullWidth size="lg">Guardar Cambios</Button>
    </div>
  );
}
