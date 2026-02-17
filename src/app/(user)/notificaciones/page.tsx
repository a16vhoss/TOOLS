'use client';
import { Bell, MessageCircle, CreditCard, Wrench, Info } from 'lucide-react';
import { mockNotifications } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { formatDate, cn } from '@/lib/utils';

const iconMap = { service: Wrench, quote: Bell, chat: MessageCircle, payment: CreditCard, system: Info };

export default function NotificacionesPage() {
  const notifications = mockNotifications.filter((n) => n.userId === 'u1');
  return (
    <div className="px-4 py-4 space-y-1">
      <h1 className="text-xl font-bold text-text mb-4">Notificaciones</h1>
      {notifications.map((n) => {
        const Icon = iconMap[n.type] || Bell;
        return (
          <div key={n.id} className={cn('flex items-start gap-3 py-3 border-b border-border', !n.read && 'bg-info-light/30 -mx-4 px-4')}>
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn('text-sm', !n.read ? 'font-semibold text-text' : 'font-medium text-text')}>{n.title}</p>
              <p className="text-sm text-text-secondary">{n.message}</p>
              <p className="text-xs text-text-light mt-1">{formatDate(n.createdAt)}</p>
            </div>
            {!n.read && <div className="h-2.5 w-2.5 rounded-full bg-primary shrink-0 mt-2" />}
          </div>
        );
      })}
    </div>
  );
}
