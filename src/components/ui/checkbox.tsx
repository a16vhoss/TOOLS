'use client';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({ checked, onChange, label, disabled, className }: CheckboxProps) {
  return (
    <label className={cn('inline-flex items-center gap-2 cursor-pointer', disabled && 'opacity-50 cursor-not-allowed', className)}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          'h-5 w-5 rounded border-2 flex items-center justify-center transition-colors',
          checked ? 'bg-primary border-primary' : 'border-border-dark bg-bg-white'
        )}
      >
        {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
      </button>
      {label && <span className="text-sm text-text">{label}</span>}
    </label>
  );
}
