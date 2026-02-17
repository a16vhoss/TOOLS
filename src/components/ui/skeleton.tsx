'use client';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className, variant = 'text' }: SkeletonProps) {
  const variants = {
    text: 'h-4 w-full rounded',
    circular: 'h-10 w-10 rounded-full',
    rectangular: 'h-20 w-full rounded-lg',
  };
  return (
    <div className={cn('animate-pulse bg-border', variants[variant], className)} />
  );
}
