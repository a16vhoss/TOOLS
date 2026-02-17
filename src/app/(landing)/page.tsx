import { HeroSection } from '@/components/landing/HeroSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { ValuePropsSection } from '@/components/landing/ValuePropsSection';
import { HowItWorksUserSection } from '@/components/landing/HowItWorksUserSection';
import { HowItWorksWorkerSection } from '@/components/landing/HowItWorksWorkerSection';
import { ServiceCategoriesSection } from '@/components/landing/ServiceCategoriesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ValuePropsSection />
      <HowItWorksUserSection />
      <HowItWorksWorkerSection />
      <ServiceCategoriesSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
    </>
  );
}
