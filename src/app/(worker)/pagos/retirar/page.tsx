'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PriceInput } from '@/components/ui/price-input';
import { Card } from '@/components/ui/card';
import { RadioGroup } from '@/components/ui/radio-group';
import { mockWorkers } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

const worker = mockWorkers[0];

export default function RetirarPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState('transfer');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="px-4 py-12 flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center mb-4"><Check className="h-8 w-8 text-white" /></div>
        <h2 className="text-xl font-bold text-text mb-2">¡Retiro Solicitado!</h2>
        <p className="text-sm text-text-secondary mb-6">Tu retiro de {formatCurrency(amount)} será procesado en 1-3 días hábiles.</p>
        <Button onClick={() => router.push('/pagos')}>Volver a Pagos</Button>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/pagos" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Retirar Fondos</h1>
      </div>
      <Card padding="md">
        <p className="text-sm text-text-secondary">Disponible</p>
        <p className="text-2xl font-bold text-primary">{formatCurrency(worker.earnings.available)}</p>
      </Card>
      <PriceInput label="Monto a retirar" value={amount} onChange={setAmount} />
      <RadioGroup options={[{ value: 'transfer', label: 'Transferencia bancaria', description: '1-3 días hábiles' }, { value: 'oxxo', label: 'Depósito OXXO', description: '24 horas' }]} value={method} onChange={setMethod} />
      <Button fullWidth size="lg" disabled={amount <= 0 || amount > worker.earnings.available} onClick={() => setSubmitted(true)}>Solicitar Retiro</Button>
    </div>
  );
}
