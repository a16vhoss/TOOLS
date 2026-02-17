'use client';
import { Bell, Menu } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

export function AdminTopBar() {
  return (
    <header className="sticky top-0 z-40 bg-bg-white border-b border-border h-16 flex items-center justify-between px-6">
      <button className="lg:hidden p-2"><Menu className="h-5 w-5" /></button>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-4">
        <button className="relative p-2"><Bell className="h-5 w-5 text-text-secondary" /><span className="absolute top-1 right-1 h-2 w-2 bg-error rounded-full" /></button>
        <div className="flex items-center gap-2">
          <Avatar name="Administrador" size="sm" />
          <span className="text-sm font-medium text-text hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
}
