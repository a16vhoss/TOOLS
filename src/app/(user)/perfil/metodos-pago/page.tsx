'use client';
import { ArrowLeft, CreditCard, Plus } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function MetodosPagoPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/perfil" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Métodos de Pago</h1>
      </div>
      <Card padding="md">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <div className="flex items-center gap-2"><p className="text-sm font-medium text-text">•••• 4532</p><Badge variant="info" size="sm">Principal</Badge></div>
            <p className="text-xs text-text-secondary">Visa • Vence 12/26</p>
          </div>
        </div>
      </Card>
      <Card padding="md">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-text-secondary" />
          <div className="flex-1">
            <p className="text-sm font-medium text-text">•••• 8901</p>
            <p className="text-xs text-text-secondary">Mastercard • Vence 08/25</p>
          </div>
        </div>
      </Card>
      <Button fullWidth variant="outline" className="gap-2"><Plus className="h-4 w-4" />Agregar Método de Pago</Button>
    </div>
  );
}
