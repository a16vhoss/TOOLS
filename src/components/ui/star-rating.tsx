'use client';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export function StarRating({ rating, maxRating = 5, size = 'md', interactive, onChange, className }: StarRatingProps) {
  const sizes = { sm: 'h-3.5 w-3.5', md: 'h-5 w-5', lg: 'h-7 w-7' };
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)}>
      {Array.from({ length: maxRating }, (_, i) => (
        <button
          key={i}
          type="button"
          disabled={!interactive}
          onClick={() => onChange?.(i + 1)}
          className={cn(interactive && 'cursor-pointer hover:scale-110 transition-transform', !interactive && 'cursor-default')}
        >
          <Star
            className={cn(sizes[size], i < rating ? 'fill-secondary text-secondary' : 'fill-none text-border-dark')}
          />
        </button>
      ))}
    </div>
  );
}
