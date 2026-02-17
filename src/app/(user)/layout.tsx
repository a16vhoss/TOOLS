import { MobileHeader } from '@/components/layout/MobileHeader';
import { UserBottomNav } from '@/components/layout/UserBottomNav';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <MobileHeader />
      <main className="pb-20">{children}</main>
      <UserBottomNav />
    </div>
  );
}
