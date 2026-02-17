import { LandingNav } from '@/components/layout/LandingNav';
import { LandingFooter } from '@/components/layout/LandingFooter';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNav />
      <main>{children}</main>
      <LandingFooter />
    </>
  );
}
