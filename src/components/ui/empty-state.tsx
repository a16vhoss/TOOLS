'use client';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';
import { Button } from './button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, onAction, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 px-4 text-center', className)}>
      <div className="h-16 w-16 rounded-full bg-border flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-text-light" />
      </div>
      <h3 className="text-lg font-semibold text-text mb-1">{title}</h3>
      <p className="text-sm text-text-secondary max-w-xs mb-4">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} size="sm">{actionLabel}</Button>
      )}
    </div>
  );
}
