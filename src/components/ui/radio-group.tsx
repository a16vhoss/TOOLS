'use client';
import { cn } from '@/lib/utils';

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
}

export function RadioGroup({ options, value, onChange, name, className }: RadioGroupProps) {
  return (
    <div className={cn('space-y-2', className)} role="radiogroup">
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            'flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors',
            value === option.value ? 'border-primary bg-info-light' : 'border-border hover:border-border-dark'
          )}
        >
          <div className="mt-0.5">
            <div className={cn(
              'h-5 w-5 rounded-full border-2 flex items-center justify-center',
              value === option.value ? 'border-primary' : 'border-border-dark'
            )}>
              {value === option.value && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
            </div>
          </div>
          <div>
            <input type="radio" name={name} value={option.value} checked={value === option.value} onChange={() => onChange?.(option.value)} className="sr-only" />
            <p className="text-sm font-medium text-text">{option.label}</p>
            {option.description && <p className="text-xs text-text-secondary mt-0.5">{option.description}</p>}
          </div>
        </label>
      ))}
    </div>
  );
}
