'use client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockPayments, mockAdminKPIs, mockRevenueData } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FinanzasPage() {
  const totalPlatformFees = mockPayments.reduce((sum, p) => sum + p.platformFee, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Finanzas</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card padding="md"><p className="text-xs text-text-secondary">Ingresos Totales</p><p className="text-2xl font-bold text-text">{formatCurrency(mockAdminKPIs.totalRevenue)}</p></Card>
        <Card padding="md"><p className="text-xs text-text-secondary">Ingresos del Mes</p><p className="text-2xl font-bold text-text">{formatCurrency(mockAdminKPIs.monthlyRevenue)}</p></Card>
        <Card padding="md"><p className="text-xs text-text-secondary">Comisiones</p><p className="text-2xl font-bold text-text">{formatCurrency(totalPlatformFees)}</p></Card>
        <Card padding="md"><p className="text-xs text-text-secondary">Crecimiento</p><p className="text-2xl font-bold text-success">+{mockAdminKPIs.revenueGrowth}%</p></Card>
      </div>

      <Card padding="lg">
        <h3 className="font-semibold text-text mb-4">Ingresos por Mes</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Ingresos']} />
              <Bar dataKey="revenue" fill="#4AB3E2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card padding="none">
        <h3 className="font-semibold text-text p-4 pb-2">Transacciones Recientes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-bg">
              <th className="text-left px-4 py-3 font-medium text-text-secondary">ID</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Monto</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Comisión</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Método</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Fecha</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Estado</th>
            </tr></thead>
            <tbody>
              {mockPayments.map((p) => (
                <tr key={p.id} className="border-b border-border">
                  <td className="px-4 py-3 text-text">{p.id}</td>
                  <td className="px-4 py-3 font-medium text-text">{formatCurrency(p.amount)}</td>
                  <td className="px-4 py-3 text-text-secondary">{formatCurrency(p.platformFee)}</td>
                  <td className="px-4 py-3 text-text-secondary">{p.method}</td>
                  <td className="px-4 py-3 text-text-secondary">{formatDate(p.createdAt)}</td>
                  <td className="px-4 py-3"><Badge variant={p.status === 'completed' ? 'success' : 'warning'} size="sm">{p.status === 'completed' ? 'Completado' : 'Pendiente'}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
