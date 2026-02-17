'use client';
import Link from 'next/link';
import { ChevronRight, User, MapPin, CreditCard, Bell, Shield, CircleHelp, LogOut } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  { icon: User, label: 'Editar Perfil', href: '/perfil/editar' },
  { icon: MapPin, label: 'Mis Direcciones', href: '/perfil/direcciones' },
  { icon: CreditCard, label: 'Métodos de Pago', href: '/perfil/metodos-pago' },
  { icon: Bell, label: 'Notificaciones', href: '/notificaciones' },
  { icon: Shield, label: 'Privacidad', href: '/privacidad' },
  { icon: CircleHelp, label: 'Ayuda', href: '#' },
];

export default function PerfilPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <Card padding="md">
        <div className="flex items-center gap-4">
          <Avatar name="María García López" size="xl" />
          <div>
            <h1 className="text-lg font-bold text-text">María García López</h1>
            <p className="text-sm text-text-secondary">maria@email.com</p>
            <Badge variant="info" size="sm" className="mt-1">Usuario</Badge>
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
        <p className="text-xs text-text-light">Versión 1.0.0</p>
        <div className="flex items-center justify-center gap-2 mt-1">
          <Link href="/login" className="text-xs text-primary no-underline">Modo Profesional</Link>
          <span className="text-xs text-text-light">•</span>
          <Link href="/admin" className="text-xs text-primary no-underline">Admin</Link>
        </div>
      </div>
    </div>
  );
}
