'use client';
import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-text mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-3 py-2.5 rounded-lg border border-border bg-bg-white text-text text-sm',
            'placeholder:text-text-light resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-error focus:ring-error',
            className
          )}
          rows={4}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-error">{error}</p>}
      </div>
    );
  }
);
TextArea.displayName = 'TextArea';
export { TextArea };
