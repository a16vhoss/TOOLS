'use client';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface ChipProps {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
  onRemove?: () => void;
  className?: string;
}

export function Chip({ label, selected, onSelect, onRemove, className }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-full border transition-colors',
        selected ? 'bg-primary text-white border-primary' : 'bg-bg-white text-text border-border hover:border-border-dark',
        className
      )}
    >
      {label}
      {onRemove && (
        <X className="h-3.5 w-3.5 ml-0.5" onClick={(e) => { e.stopPropagation(); onRemove(); }} />
      )}
    </button>
  );
}
