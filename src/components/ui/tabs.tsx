'use client';
import { cn } from '@/lib/utils';

interface Tab {
  value: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, value, onChange, className }: TabsProps) {
  return (
    <div className={cn('flex border-b border-border', className)} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={value === tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            'px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
            value === tab.value
              ? 'border-primary text-primary'
              : 'border-transparent text-text-secondary hover:text-text hover:border-border-dark'
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className={cn('ml-1.5 px-1.5 py-0.5 text-xs rounded-full', value === tab.value ? 'bg-primary/10 text-primary' : 'bg-border text-text-secondary')}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
