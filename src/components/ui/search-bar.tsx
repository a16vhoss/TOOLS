'use client';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Buscar...', className }: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-light" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 pl-10 pr-8 rounded-lg border border-border bg-bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      />
      {value && (
        <button onClick={() => onChange('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-light hover:text-text">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
