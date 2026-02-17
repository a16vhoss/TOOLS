'use client';
import { cn } from '@/lib/utils';

interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-text-light uppercase">{label}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
    );
  }
  return <div className={cn('h-px bg-border w-full', className)} />;
}
