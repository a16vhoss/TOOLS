'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Divider } from '@/components/ui/divider';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await signIn(email, password);

    if (authError) {
      setError(authError);
      setLoading(false);
    } else {
      setLoading(false);
      router.push('/inicio');
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-12">
      <div className="flex items-center justify-center mb-8">
        <img src="/logo.jpeg" alt="La palomita azul" className="h-10 w-10 rounded-lg object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-text text-center mb-2">Bienvenido de Vuelta</h1>
      <p className="text-text-secondary text-center mb-8">Inicia sesión en tu cuenta</p>

      {error && (
        <div className="max-w-sm mx-auto w-full mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto w-full">
        <Input
          label="Correo electrónico"
          type="email"
          placeholder="tu@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <Input
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            placeholder="Tu contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-text-light">
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <div className="text-right"><a href="#" className="text-sm text-primary no-underline">¿Olvidaste tu contraseña?</a></div>
        <Button type="submit" fullWidth size="lg" loading={loading}>Iniciar Sesión</Button>
        <Divider label="o" />
        <Button type="button" variant="outline" fullWidth>Continuar con Google</Button>
      </form>
      <p className="text-center text-sm text-text-secondary mt-8">
        ¿No tienes cuenta? <Link href="/seleccionar-rol" className="text-primary font-medium">Regístrate</Link>
      </p>
    </div>
  );
}
