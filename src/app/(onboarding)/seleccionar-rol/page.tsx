'use client';
import { useRouter } from 'next/navigation';
import { Wrench, User, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const roles = [
  { id: 'user', icon: User, title: 'Busco Servicios', description: 'Quiero contratar profesionales para mi hogar', color: 'bg-primary', path: '/registro?role=user' },
  { id: 'worker', icon: Briefcase, title: 'Soy Profesional', description: 'Quiero ofrecer mis servicios y ganar dinero', color: 'bg-secondary', path: '/registro?role=worker' },
];

export default function SeleccionarRolPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-6 py-12">
      <div className="flex items-center justify-center mb-8">
        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
          <Wrench className="h-6 w-6 text-white" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-text text-center mb-2">¿Cómo quieres usar La palomita azul?</h1>
      <p className="text-text-secondary text-center mb-10">Selecciona tu rol para personalizar tu experiencia</p>
      <div className="space-y-4 max-w-sm mx-auto w-full">
        {roles.map((role) => (
          <button key={role.id} onClick={() => router.push(role.path)} className={cn('w-full p-6 rounded-xl border-2 border-border bg-bg-white text-left transition-all hover:border-primary hover:shadow-md')}>
            <div className={cn('h-12 w-12 rounded-xl flex items-center justify-center mb-3', role.color)}>
              <role.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-text">{role.title}</h3>
            <p className="text-sm text-text-secondary mt-1">{role.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
