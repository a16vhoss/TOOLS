'use client';
import { useState, useEffect, createContext, useContext, useCallback, type ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextValue {
  showToast: (type: ToastType, message: string) => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });
export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, message: string) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, type, message }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] space-y-2">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const icons = { success: CheckCircle, error: AlertCircle, warning: AlertTriangle, info: Info };
  const colors = {
    success: 'bg-success-light border-success text-success',
    error: 'bg-error-light border-error text-error',
    warning: 'bg-warning-light border-warning text-secondary-dark',
    info: 'bg-info-light border-info text-info',
  };
  const Icon = icons[toast.type];

  return (
    <div className={cn('flex items-center gap-2 px-4 py-3 rounded-lg border shadow-lg min-w-[280px] animate-in slide-in-from-right', colors[toast.type])}>
      <Icon className="h-5 w-5 shrink-0" />
      <p className="text-sm font-medium flex-1">{toast.message}</p>
      <button onClick={() => onRemove(toast.id)} className="shrink-0"><X className="h-4 w-4" /></button>
    </div>
  );
}
