'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Camera, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { RadioGroup } from '@/components/ui/radio-group';
import { ImageUpload } from '@/components/ui/image-upload';
import { ProgressBar } from '@/components/ui/progress-bar';
import { MapPlaceholder } from '@/components/ui/map-placeholder';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { useMockData } from '@/contexts/mock-data-context';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

const URGENCY_OPTIONS = [
  { value: 'low', label: 'Baja', description: 'Puede esperar unos días' },
  { value: 'medium', label: 'Media', description: 'Dentro de esta semana' },
  { value: 'high', label: 'Alta', description: 'Lo antes posible' },
  { value: 'emergency', label: 'Urgencia', description: 'Necesito ayuda ahora' },
];

export default function SolicitarPage() {
  const router = useRouter();
  const { addRequest } = useMockData();
  const { profile } = useAuth();
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('medium');
  const [address, setAddress] = useState('Av. Reforma 222, Juárez, CDMX');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const totalSteps = 8;
  const selectedCategory = SERVICE_CATEGORIES.find((c) => c.id === category);
  const { subcategories } = require('@/lib/mock-data/services').mockServiceCategories.find((c: { id: string }) => c.id === category) || { subcategories: [] };

  const canProceed = () => {
    switch (step) {
      case 0: return !!category;
      case 1: return !!subcategory;
      case 2: return description.length >= 10;
      case 3: return true;
      case 4: return !!urgency;
      case 5: return !!address;
      case 6: return true;
      default: return true;
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const now = new Date().toISOString();
    const userId = profile?.id || 'u1';
    const userName = profile?.name || 'Usuario';
    const selectedSub = subcategories.find((s: { id: string }) => s.id === subcategory);
    const newRequest = {
      id: `sr_${Date.now()}`,
      userId,
      categoryId: category,
      subcategoryId: subcategory,
      title: selectedSub?.name || description.slice(0, 50),
      description,
      photos,
      urgency: urgency as 'low' | 'medium' | 'high' | 'emergency',
      status: 'pending' as const,
      address: {
        street: address,
        colony: '',
        city: '',
        state: '',
        zipCode: '',
      },
      preferredDate: date || undefined,
      createdAt: now,
      updatedAt: now,
      timeline: [
        {
          id: `t_${Date.now()}`,
          type: 'created',
          description: 'Solicitud creada',
          timestamp: now,
          actor: userName,
        },
      ],
    };
    addRequest(newRequest);
    setTimeout(() => { setStep(7); setLoading(false); }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="sticky top-0 z-30 bg-bg-white border-b border-border">
        <div className="flex items-center gap-3 px-4 h-14">
          <button onClick={() => step > 0 ? setStep(step - 1) : router.back()} className="p-1">
            <ArrowLeft className="h-5 w-5 text-text" />
          </button>
          <h1 className="font-semibold text-text flex-1">
            {step < 7 ? 'Solicitar Servicio' : 'Solicitud Enviada'}
          </h1>
          {step < 7 && <span className="text-sm text-text-light">{step + 1}/{totalSteps}</span>}
        </div>
        {step < 7 && <ProgressBar value={step + 1} max={totalSteps} size="sm" />}
      </div>

      <div className="px-4 py-6">
        {step === 0 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">¿Qué servicio necesitas?</h2>
            <p className="text-sm text-text-secondary mb-4">Selecciona una categoría</p>
            <div className="grid grid-cols-2 gap-3">
              {SERVICE_CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => { setCategory(cat.id); setSubcategory(''); }} className={cn('p-4 rounded-xl border-2 text-left transition-all', category === cat.id ? 'border-primary bg-info-light' : 'border-border bg-bg-white')}>
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: cat.bgColor }}>
                    <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                  </div>
                  <p className="text-sm font-medium text-text">{cat.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">Tipo de servicio</h2>
            <p className="text-sm text-text-secondary mb-4">{selectedCategory?.name}</p>
            <div className="space-y-2">
              {subcategories.map((sub: { id: string; name: string; description: string; avgPrice: number }) => (
                <button key={sub.id} onClick={() => setSubcategory(sub.id)} className={cn('w-full p-4 rounded-xl border-2 text-left transition-all', subcategory === sub.id ? 'border-primary bg-info-light' : 'border-border bg-bg-white')}>
                  <p className="text-sm font-medium text-text">{sub.name}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{sub.description}</p>
                  <p className="text-xs text-primary font-medium mt-1">Precio promedio: ${sub.avgPrice.toLocaleString()} MXN</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">Describe el problema</h2>
            <p className="text-sm text-text-secondary mb-4">Mientras más detalle, mejor cotización recibirás</p>
            <TextArea
              label="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe el servicio que necesitas con el mayor detalle posible..."
              rows={6}
            />
            <p className="text-xs text-text-light mt-1">{description.length} caracteres (mínimo 10)</p>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">Fotos (opcional)</h2>
            <p className="text-sm text-text-secondary mb-4">Agrega fotos para que el profesional entienda mejor</p>
            <ImageUpload images={photos} onChange={setPhotos} maxImages={5} />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">¿Qué tan urgente es?</h2>
            <p className="text-sm text-text-secondary mb-4">Esto ayuda a priorizar tu solicitud</p>
            <RadioGroup options={URGENCY_OPTIONS} value={urgency} onChange={setUrgency} />
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">Ubicación del servicio</h2>
            <p className="text-sm text-text-secondary mb-4">¿Dónde se realizará el trabajo?</p>
            <Input label="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} icon={<MapPin className="h-4 w-4" />} placeholder="Ingresa tu dirección" />
            <MapPlaceholder address={address} className="mt-4" />
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 className="text-lg font-semibold text-text mb-1">Resumen de tu solicitud</h2>
            <p className="text-sm text-text-secondary mb-4">Revisa los detalles antes de enviar</p>
            <Card padding="md" className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-text-secondary">Categoría</span><span className="text-sm font-medium text-text">{selectedCategory?.name}</span></div>
              <div className="border-t border-border" />
              <div><span className="text-sm text-text-secondary">Descripción</span><p className="text-sm text-text mt-1">{description || 'Sin descripción'}</p></div>
              <div className="border-t border-border" />
              <div className="flex justify-between"><span className="text-sm text-text-secondary">Fotos</span><span className="text-sm text-text">{photos.length} foto(s)</span></div>
              <div className="border-t border-border" />
              <div className="flex justify-between"><span className="text-sm text-text-secondary">Urgencia</span><span className="text-sm font-medium text-text">{URGENCY_OPTIONS.find((u) => u.value === urgency)?.label}</span></div>
              <div className="border-t border-border" />
              <div className="flex justify-between"><span className="text-sm text-text-secondary">Ubicación</span><span className="text-sm text-text">{address}</span></div>
            </Card>
          </div>
        )}

        {step === 7 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="h-16 w-16 bg-success rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-text mb-2">¡Solicitud Enviada!</h2>
            <p className="text-sm text-text-secondary max-w-xs mb-6">
              Tu solicitud ha sido publicada. Pronto recibirás cotizaciones de profesionales cercanos.
            </p>
            <div className="space-y-3 w-full max-w-xs">
              <Button fullWidth onClick={() => router.push('/mis-servicios')}>Ver Mis Servicios</Button>
              <Button fullWidth variant="outline" onClick={() => router.push('/inicio')}>Ir al Inicio</Button>
            </div>
          </div>
        )}
      </div>

      {step < 7 && (
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-bg-white border-t border-border">
          {step === 6 ? (
            <Button fullWidth size="lg" onClick={handleSubmit} loading={loading}>Enviar Solicitud</Button>
          ) : (
            <Button fullWidth size="lg" disabled={!canProceed()} onClick={() => setStep(step + 1)}>Continuar</Button>
          )}
        </div>
      )}
    </div>
  );
}
