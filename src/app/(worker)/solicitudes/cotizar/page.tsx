'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TextArea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { PriceInput } from '@/components/ui/price-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';

export default function CotizarPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [includesMaterials, setIncludesMaterials] = useState(false);
  const [materialsCost, setMaterialsCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="px-4 py-12 flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-text mb-2">¡Cotización Enviada!</h2>
        <p className="text-sm text-text-secondary mb-6">El usuario revisará tu cotización y te notificaremos cuando responda.</p>
        <Button onClick={() => router.push('/solicitudes')}>Volver a Solicitudes</Button>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/solicitudes" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Enviar Cotización</h1>
      </div>

      <Card padding="md" className="space-y-4">
        <PriceInput label="Precio total" value={amount} onChange={setAmount} />
        <TextArea label="Descripción del trabajo" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe qué incluye tu cotización..." />
        <Input label="Tiempo estimado" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Ej: 2-3 horas" />
        <Checkbox checked={includesMaterials} onChange={setIncludesMaterials} label="Incluye materiales" />
        {includesMaterials && <PriceInput label="Costo de materiales" value={materialsCost} onChange={setMaterialsCost} />}
      </Card>

      <Button fullWidth size="lg" disabled={!amount || !description} onClick={() => setSubmitted(true)}>Enviar Cotización</Button>
    </div>
  );
}
