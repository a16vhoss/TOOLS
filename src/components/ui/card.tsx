'use client';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding = 'md', hover, children, ...props }, ref) => {
    const paddings = { none: '', sm: 'p-3', md: 'p-4', lg: 'p-6' };
    return (
      <div
        ref={ref}
        className={cn(
          'bg-bg-white rounded-xl border border-border shadow-sm',
          paddings[padding],
          hover && 'hover:shadow-md transition-shadow cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
export { Card };
