'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wrench } from 'lucide-react';

export default function SplashPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push('/bienvenida'), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <div className="animate-pulse">
        <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <Wrench className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-white text-center">La palomita azul</h1>
        <p className="text-blue-200 text-center mt-2">Servicios del Hogar</p>
      </div>
    </div>
  );
}
