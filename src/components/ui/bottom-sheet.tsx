'use client';
import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function BottomSheet({ isOpen, onClose, title, children, className }: BottomSheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={cn('relative bg-bg-white rounded-t-2xl w-full max-h-[85vh] overflow-auto', className)}>
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-border-dark rounded-full" />
        </div>
        {title && (
          <div className="flex items-center justify-between px-4 pb-3">
            <h2 className="text-lg font-semibold text-text">{title}</h2>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-border/50 text-text-secondary">
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="px-4 pb-6">{children}</div>
      </div>
    </div>
  );
}
