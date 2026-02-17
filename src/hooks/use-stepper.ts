'use client';
import { useState, useCallback } from 'react';

export function useStepper(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);

  const next = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }, [totalSteps]);

  const back = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback((step: number) => {
    setCurrentStep(Math.max(0, Math.min(step, totalSteps - 1)));
  }, [totalSteps]);

  const reset = useCallback(() => {
    setCurrentStep(0);
  }, []);

  return {
    currentStep,
    totalSteps,
    isFirst: currentStep === 0,
    isLast: currentStep === totalSteps - 1,
    next,
    back,
    goTo,
    reset,
  };
}
