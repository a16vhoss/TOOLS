'use client';
import { Card } from '@/components/ui/card';
import { mockRevenueData, mockUserGrowthData, mockAdminKPIs } from '@/lib/mock-data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { mockRequests } from '@/lib/mock-data';

const categoryStats = SERVICE_CATEGORIES.map((cat) => ({
  name: cat.name,
  count: mockRequests.filter((r) => r.categoryId === cat.id).length,
  color: cat.color,
})).sort((a, b) => b.count - a.count);

export default function AnaliticasPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Analíticas</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="lg">
          <h3 className="font-semibold text-text mb-4">Ingresos vs Servicios</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar yAxisId="left" dataKey="revenue" fill="#4AB3E2" radius={[4, 4, 0, 0]} name="Ingresos" />
                <Bar yAxisId="right" dataKey="services" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Servicios" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card padding="lg">
          <h3 className="font-semibold text-text mb-4">Crecimiento de Usuarios</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockUserGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#4AB3E2" strokeWidth={2} name="Usuarios" />
                <Line type="monotone" dataKey="workers" stroke="#F59E0B" strokeWidth={2} name="Profesionales" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card padding="lg">
          <h3 className="font-semibold text-text mb-4">Servicios por Categoría</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryStats} cx="50%" cy="50%" outerRadius={80} dataKey="count" nameKey="name" label={(props) => `${props.name}: ${props.value}`}>
                  {categoryStats.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card padding="lg">
          <h3 className="font-semibold text-text mb-4">Métricas Clave</h3>
          <div className="space-y-4">
            <div className="flex justify-between"><span className="text-sm text-text-secondary">Tasa de conversión</span><span className="text-sm font-semibold text-text">68.5%</span></div>
            <div className="flex justify-between"><span className="text-sm text-text-secondary">Tiempo promedio de respuesta</span><span className="text-sm font-semibold text-text">2.3 horas</span></div>
            <div className="flex justify-between"><span className="text-sm text-text-secondary">Tasa de satisfacción</span><span className="text-sm font-semibold text-text">94.2%</span></div>
            <div className="flex justify-between"><span className="text-sm text-text-secondary">Retención de usuarios</span><span className="text-sm font-semibold text-text">82.1%</span></div>
            <div className="flex justify-between"><span className="text-sm text-text-secondary">Valor promedio por servicio</span><span className="text-sm font-semibold text-text">$1,850 MXN</span></div>
            <div className="flex justify-between"><span className="text-sm text-text-secondary">Tasa de disputas</span><span className="text-sm font-semibold text-text">1.2%</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
