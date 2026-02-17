'use client';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MapPlaceholderProps {
  address?: string;
  className?: string;
}

export function MapPlaceholder({ address, className }: MapPlaceholderProps) {
  return (
    <div className={cn('relative w-full h-48 rounded-xl bg-info-light border border-border overflow-hidden', className)}>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        {address && <p className="text-sm text-text-secondary text-center px-4 max-w-xs">{address}</p>}
        {!address && <p className="text-sm text-text-light">Mapa no disponible</p>}
      </div>
      {/* Grid lines to simulate map */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={`h-${i}`} className="absolute w-full h-px bg-primary" style={{ top: `${(i + 1) * 12.5}%` }} />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <div key={`v-${i}`} className="absolute h-full w-px bg-primary" style={{ left: `${(i + 1) * 12.5}%` }} />
        ))}
      </div>
    </div>
  );
}
