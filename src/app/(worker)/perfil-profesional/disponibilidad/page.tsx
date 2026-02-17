'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { mockWorkers } from '@/lib/mock-data';

const worker = mockWorkers[0];
const days = [
  { key: 'monday', label: 'Lunes' }, { key: 'tuesday', label: 'Martes' }, { key: 'wednesday', label: 'Miércoles' },
  { key: 'thursday', label: 'Jueves' }, { key: 'friday', label: 'Viernes' }, { key: 'saturday', label: 'Sábado' }, { key: 'sunday', label: 'Domingo' },
] as const;

export default function DisponibilidadPage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/perfil-profesional" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Disponibilidad</h1>
      </div>
      {days.map((day) => {
        const schedule = worker.availability[day.key];
        return (
          <Card key={day.key} padding="md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text">{day.label}</p>
                {schedule.available && <p className="text-xs text-text-secondary">{schedule.startTime} - {schedule.endTime}</p>}
                {!schedule.available && <p className="text-xs text-text-light">No disponible</p>}
              </div>
              <Toggle checked={schedule.available} label="" />
            </div>
          </Card>
        );
      })}
      <Button fullWidth size="lg">Guardar Cambios</Button>
    </div>
  );
}
