'use client';
import Link from 'next/link';
import { Search, ArrowRight, Star, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { mockWorkers } from '@/lib/mock-data';
import { StatusBadge } from '@/components/ui/status-badge';
import { useAuth } from '@/contexts/AuthContext';
import { useMockData } from '@/contexts/mock-data-context';

const recommendedWorkers = mockWorkers.filter((w) => w.verified).slice(0, 4);

export default function InicioPage() {
  const { profile } = useAuth();
  const { requests } = useMockData();
  const firstName = profile?.name?.split(' ')[0] || 'Usuario';
  const userId = profile?.id || 'u1';

  // Use requests from context so dynamically added ones appear
  const recentServices = requests.filter((r) => r.userId === userId).slice(0, 3);

  return (
    <div className="px-4 py-4 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-text">Hola, {firstName}</h1>
        <p className="text-sm text-text-secondary">¿Qué servicio necesitas hoy?</p>
      </div>

      <Link href="/solicitar" className="block no-underline">
        <div className="flex items-center gap-3 h-10 px-3 rounded-lg border border-border bg-bg-white text-text-light text-sm">
          <Search className="h-4 w-4" />
          <span>Buscar servicio...</span>
        </div>
      </Link>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-text">Categorías</h2>
          <Link href="/servicios" className="text-sm text-primary no-underline flex items-center gap-1">Ver todas <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {SERVICE_CATEGORIES.slice(0, 8).map((cat) => (
            <Link key={cat.id} href={`/servicios/${cat.id}`} className="no-underline">
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: cat.bgColor }}>
                  <cat.icon className="h-6 w-6" style={{ color: cat.color }} />
                </div>
                <span className="text-[11px] text-text-secondary text-center leading-tight">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-text">Profesionales Recomendados</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4">
          {recommendedWorkers.map((w) => (
            <Link key={w.id} href={`/trabajador/${w.id}`} className="no-underline">
              <Card padding="sm" className="w-40 shrink-0">
                <div className="flex flex-col items-center text-center">
                  <Avatar name={w.name} size="lg" />
                  <p className="text-sm font-medium text-text mt-2 truncate w-full">{w.name.split(' ').slice(0, 2).join(' ')}</p>
                  <p className="text-xs text-text-light">{SERVICE_CATEGORIES.find((c) => c.id === w.categories[0])?.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    <span className="text-xs font-medium text-text">{w.rating}</span>
                    <span className="text-xs text-text-light">({w.reviewCount})</span>
                  </div>
                  {w.verified && (
                    <Badge variant="success" size="sm" className="mt-1"><Shield className="h-3 w-3 mr-0.5" />Verificado</Badge>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {recentServices.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-text">Mis Servicios Recientes</h2>
            <Link href="/mis-servicios" className="text-sm text-primary no-underline">Ver todos</Link>
          </div>
          <div className="space-y-3">
            {recentServices.map((s) => (
              <Link key={s.id} href={`/mis-servicios/${s.id}`} className="no-underline">
                <Card padding="sm" hover>
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text truncate">{s.title}</p>
                      <p className="text-xs text-text-light mt-0.5">{SERVICE_CATEGORIES.find((c) => c.id === s.categoryId)?.name}</p>
                    </div>
                    <StatusBadge status={s.status} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Link href="/solicitar" className="block no-underline">
        <Card padding="md" className="bg-primary text-white border-primary">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">¿Necesitas un servicio?</p>
              <p className="text-sm text-blue-100">Solicita ahora y recibe cotizaciones</p>
            </div>
            <ArrowRight className="h-5 w-5" />
          </div>
        </Card>
      </Link>
    </div>
  );
}
