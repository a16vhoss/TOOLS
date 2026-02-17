'use client';
import { Bell } from 'lucide-react';
import Link from 'next/link';

interface MobileHeaderProps {
  title?: string;
  showNotifications?: boolean;
  notificationCount?: number;
}

export function MobileHeader({ title = 'La palomita azul', showNotifications = true, notificationCount = 3 }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-bg-white border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="La palomita azul" className="h-7 w-7 rounded-lg object-cover" />
          <span className="font-semibold text-text">{title}</span>
        </div>
        {showNotifications && (
          <Link href="/notificaciones" className="relative p-2 no-underline">
            <Bell className="h-5 w-5 text-text-secondary" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 h-4 w-4 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </Link>
        )}
      </div>
    </header>
  );
}
