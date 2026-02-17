'use client';
import Link from 'next/link';
import { ChevronRight, User, Briefcase, Award, Calendar, CreditCard, LogOut } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';
import { mockWorkers } from '@/lib/mock-data';

const worker = mockWorkers[0];
const menuItems = [
  { icon: User, label: 'Editar Perfil', href: '/perfil-profesional/editar' },
  { icon: Briefcase, label: 'Portafolio', href: '/perfil-profesional/portafolio' },
  { icon: Award, label: 'Certificaciones', href: '/perfil-profesional/certificaciones' },
  { icon: Calendar, label: 'Disponibilidad', href: '/perfil-profesional/disponibilidad' },
  { icon: CreditCard, label: 'Pagos y Retiros', href: '/pagos' },
];

export default function PerfilProfesionalPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <Card padding="md">
        <div className="flex items-center gap-4">
          <Avatar name={worker.name} size="xl" />
          <div>
            <h1 className="text-lg font-bold text-text">{worker.name}</h1>
            <div className="flex items-center gap-1 mt-0.5"><StarRating rating={worker.rating} size="sm" /><span className="text-sm text-text-secondary">({worker.reviewCount})</span></div>
            <div className="flex gap-2 mt-1">
              <Badge variant="success" size="sm">Verificado</Badge>
              <Badge variant="info" size="sm">Profesional</Badge>
            </div>
          </div>
        </div>
      </Card>

      <Card padding="none">
        {menuItems.map((item, i) => (
          <Link key={item.label} href={item.href} className="no-underline">
            <div className={`flex items-center gap-3 px-4 py-3.5 ${i < menuItems.length - 1 ? 'border-b border-border' : ''}`}>
              <item.icon className="h-5 w-5 text-text-secondary" />
              <span className="flex-1 text-sm text-text">{item.label}</span>
              <ChevronRight className="h-4 w-4 text-text-light" />
            </div>
          </Link>
        ))}
      </Card>

      <Card padding="none">
        <Link href="/login" className="no-underline">
          <div className="flex items-center gap-3 px-4 py-3.5">
            <LogOut className="h-5 w-5 text-error" />
            <span className="text-sm text-error">Cerrar Sesión</span>
          </div>
        </Link>
      </Card>

      <div className="text-center">
        <Link href="/inicio" className="text-xs text-primary no-underline">Cambiar a Modo Usuario</Link>
      </div>
    </div>
  );
}
