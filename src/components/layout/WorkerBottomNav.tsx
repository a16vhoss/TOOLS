'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ClipboardList, MessageCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/panel', icon: LayoutDashboard, label: 'Panel' },
  { href: '/solicitudes', icon: ClipboardList, label: 'Solicitudes' },
  { href: '/w-chat', icon: MessageCircle, label: 'Chat' },
  { href: '/perfil-profesional', icon: User, label: 'Perfil' },
];

export function WorkerBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-bg-white border-t border-border">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={cn('flex flex-col items-center gap-1 py-1 px-3 no-underline', active ? 'text-primary' : 'text-text-light')}>
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
