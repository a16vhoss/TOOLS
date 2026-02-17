'use client';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn('flex items-center', className)}>
      {steps.map((step, index) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div className={cn(
              'h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors',
              index < currentStep ? 'bg-primary border-primary text-white' :
              index === currentStep ? 'border-primary text-primary bg-bg-white' :
              'border-border text-text-light bg-bg-white'
            )}>
              {index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
            </div>
            <span className={cn('text-xs mt-1 text-center max-w-[60px]', index <= currentStep ? 'text-primary font-medium' : 'text-text-light')}>
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={cn('flex-1 h-0.5 mx-1 mt-[-16px]', index < currentStep ? 'bg-primary' : 'bg-border')} />
          )}
        </div>
      ))}
    </div>
  );
}
