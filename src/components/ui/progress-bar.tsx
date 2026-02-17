'use client';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md';
  color?: string;
  className?: string;
}

export function ProgressBar({ value, max = 100, size = 'md', color, className }: ProgressBarProps) {
  const percentage = Math.min(100, (value / max) * 100);
  const sizes = { sm: 'h-1.5', md: 'h-2.5' };
  return (
    <div className={cn('w-full bg-border rounded-full overflow-hidden', sizes[size], className)}>
      <div
        className="h-full rounded-full transition-all duration-500 bg-primary"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
}
