'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TextArea } from '@/components/ui/textarea';
import { StarRating } from '@/components/ui/star-rating';
import { Card } from '@/components/ui/card';

export default function CalificarPage() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="px-4 py-12 flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-text mb-2">¡Gracias por tu reseña!</h2>
        <p className="text-sm text-text-secondary mb-6">Tu opinión ayuda a otros usuarios y al profesional.</p>
        <Button onClick={() => router.push('/mis-servicios')}>Volver a Mis Servicios</Button>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/mis-servicios" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <h1 className="text-lg font-bold text-text">Calificar Servicio</h1>
      </div>
      <Card padding="lg" className="text-center">
        <p className="text-sm text-text-secondary mb-3">¿Cómo fue tu experiencia?</p>
        <StarRating rating={rating} onChange={setRating} interactive size="lg" className="justify-center" />
        <p className="text-sm text-text-secondary mt-2">{rating === 0 ? 'Selecciona una calificación' : ['', 'Muy malo', 'Malo', 'Regular', 'Bueno', 'Excelente'][rating]}</p>
      </Card>
      <TextArea label="Comentario (opcional)" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Cuéntanos sobre tu experiencia..." rows={4} />
      <Button fullWidth size="lg" disabled={rating === 0} onClick={() => setSubmitted(true)}>Enviar Reseña</Button>
    </div>
  );
}
