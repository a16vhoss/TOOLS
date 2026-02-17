import { MobileHeader } from '@/components/layout/MobileHeader';
import { WorkerBottomNav } from '@/components/layout/WorkerBottomNav';

export default function WorkerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <MobileHeader title="La palomita azul Pro" />
      <main className="pb-20">{children}</main>
      <WorkerBottomNav />
    </div>
  );
}
