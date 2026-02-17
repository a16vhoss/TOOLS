'use client';
import { cn } from '@/lib/utils';
import { REQUEST_STATUS_MAP } from '@/lib/constants';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const info = REQUEST_STATUS_MAP[status] || { label: status, color: '#6B7280', bgColor: '#F3F4F6' };
  return (
    <span
      className={cn('inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full', className)}
      style={{ backgroundColor: info.bgColor, color: info.color }}
    >
      {info.label}
    </span>
  );
}
