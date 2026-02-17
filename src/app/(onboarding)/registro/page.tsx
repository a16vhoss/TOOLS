'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Wrench, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Divider } from '@/components/ui/divider';

function RegistroForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'user';
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push(role === 'worker' ? '/panel' : '/inicio');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-12">
      <div className="flex items-center justify-center mb-8">
        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
          <Wrench className="h-6 w-6 text-white" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-text text-center mb-2">Crear Cuenta</h1>
      <p className="text-text-secondary text-center mb-8">
        {role === 'worker' ? 'Regístrate como profesional' : 'Regístrate para solicitar servicios'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto w-full">
        <Input label="Nombre completo" placeholder="Ej: María García López" required />
        <Input label="Correo electrónico" type="email" placeholder="tu@email.com" required />
        <Input label="Teléfono" type="tel" placeholder="+52 55 1234 5678" required />
        <div className="relative">
          <Input label="Contraseña" type={showPassword ? 'text' : 'password'} placeholder="Mínimo 8 caracteres" required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-text-light">
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {role === 'worker' && <Input label="Especialidad principal" placeholder="Ej: Plomería, Electricidad..." required />}
        <Checkbox checked={accepted} onChange={setAccepted} label="Acepto los términos y condiciones" />
        <Button type="submit" fullWidth size="lg" loading={loading} disabled={!accepted}>Crear Cuenta</Button>
        <Divider label="o" />
        <Button type="button" variant="outline" fullWidth>Continuar con Google</Button>
      </form>
      <p className="text-center text-sm text-text-secondary mt-8">
        ¿Ya tienes cuenta? <Link href="/login" className="text-primary font-medium">Inicia Sesión</Link>
      </p>
    </div>
  );
}

export default function RegistroPage() {
  return <Suspense><RegistroForm /></Suspense>;
}
