'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Briefcase, ClipboardList, FolderOpen, AlertTriangle, DollarSign, BarChart3, Shield, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/verificacion', icon: Shield, label: 'Verificación' },
  { href: '/admin/usuarios', icon: Users, label: 'Usuarios' },
  { href: '/admin/trabajadores', icon: Briefcase, label: 'Trabajadores' },
  { href: '/admin/servicios', icon: ClipboardList, label: 'Servicios' },
  { href: '/admin/disputas', icon: AlertTriangle, label: 'Disputas' },
  { href: '/admin/finanzas', icon: DollarSign, label: 'Finanzas' },
  { href: '/admin/analiticas', icon: BarChart3, label: 'Analíticas' },
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-text min-h-screen fixed left-0 top-0">
      <div className="flex items-center gap-2 px-6 h-16 border-b border-gray-800">
        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
          <Wrench className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">La palomita azul Admin</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href} className={cn('flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm no-underline transition-colors', active ? 'bg-primary text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800')}>
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-gray-800">
        <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white no-underline">Cerrar Sesión</Link>
      </div>
    </aside>
  );
}
