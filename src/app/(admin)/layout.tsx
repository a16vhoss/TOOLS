import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { AdminTopBar } from '@/components/layout/AdminTopBar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <AdminSidebar />
      <div className="lg:ml-64">
        <AdminTopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
