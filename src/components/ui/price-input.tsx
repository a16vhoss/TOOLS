'use client';
import { cn } from '@/lib/utils';

interface PriceInputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  error?: string;
  className?: string;
}

export function PriceInput({ value, onChange, label, error, className }: PriceInputProps) {
  return (
    <div className={cn('w-full', className)}>
      {label && <label className="block text-sm font-medium text-text mb-1.5">{label}</label>}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary font-medium">$</span>
        <input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder="0"
          min={0}
          className={cn(
            'w-full h-10 pl-7 pr-14 rounded-lg border border-border bg-bg-white text-text text-sm',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            error && 'border-error focus:ring-error'
          )}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light text-sm">MXN</span>
      </div>
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  );
}
