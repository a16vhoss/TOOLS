'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: ('user' | 'worker' | 'admin')[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { user, profile, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
        if (!loading && user && profile && allowedRoles && !allowedRoles.includes(profile.role)) {
            // Redirect to appropriate dashboard based on role
            if (profile.role === 'user') router.push('/inicio');
            else if (profile.role === 'worker') router.push('/panel');
            else if (profile.role === 'admin') router.push('/admin');
        }
    }, [user, profile, loading, router, allowedRoles]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-3">
                    <img src="/logo.jpeg" alt="La palomita azul" className="h-12 w-12 rounded-lg object-cover" />
                    <p className="text-sm text-text-secondary">Cargando...</p>
                </div>
            </div>
        );
    }

    if (!user) return null;

    return <>{children}</>;
}
