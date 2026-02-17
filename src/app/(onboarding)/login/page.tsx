'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Divider } from '@/components/ui/divider';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push('/inicio'), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-12">
      <div className="flex items-center justify-center mb-8">
        <img src="/logo.jpeg" alt="La palomita azul" className="h-10 w-10 rounded-lg object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-text text-center mb-2">Bienvenido de Vuelta</h1>
      <p className="text-text-secondary text-center mb-8">Inicia sesión en tu cuenta</p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto w-full">
        <Input label="Correo electrónico" type="email" placeholder="tu@email.com" required />
        <div className="relative">
          <Input label="Contraseña" type={showPassword ? 'text' : 'password'} placeholder="Tu contraseña" required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-text-light">
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <div className="text-right"><a href="#" className="text-sm text-primary no-underline">¿Olvidaste tu contraseña?</a></div>
        <Button type="submit" fullWidth size="lg" loading={loading}>Iniciar Sesión</Button>
        <Divider label="o" />
        <Button type="button" variant="outline" fullWidth>Continuar con Google</Button>
        <div className="pt-4 space-y-2">
          <p className="text-xs text-text-light text-center">Acceso rápido (demo):</p>
          <div className="flex gap-2">
            <Button type="button" variant="ghost" size="sm" fullWidth onClick={() => router.push('/inicio')}>Usuario</Button>
            <Button type="button" variant="ghost" size="sm" fullWidth onClick={() => router.push('/panel')}>Profesional</Button>
            <Button type="button" variant="ghost" size="sm" fullWidth onClick={() => router.push('/admin')}>Admin</Button>
          </div>
        </div>
      </form>
      <p className="text-center text-sm text-text-secondary mt-8">
        ¿No tienes cuenta? <Link href="/seleccionar-rol" className="text-primary font-medium">Regístrate</Link>
      </p>
    </div>
  );
}
