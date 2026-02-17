'use client';
import { Users, Briefcase, ClipboardList, DollarSign, Star, AlertTriangle, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { mockAdminKPIs, mockRevenueData, mockUserGrowthData } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const kpis = [
  { label: 'Usuarios', value: mockAdminKPIs.totalUsers.toLocaleString(), icon: Users, change: `+${mockAdminKPIs.userGrowth}%`, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Profesionales', value: mockAdminKPIs.totalWorkers.toLocaleString(), icon: Briefcase, change: '+12.5%', color: 'text-success', bg: 'bg-success/10' },
  { label: 'Servicios Activos', value: mockAdminKPIs.activeServices.toString(), icon: ClipboardList, change: '+8', color: 'text-info', bg: 'bg-info/10' },
  { label: 'Ingresos del Mes', value: formatCurrency(mockAdminKPIs.monthlyRevenue), icon: DollarSign, change: `+${mockAdminKPIs.revenueGrowth}%`, color: 'text-secondary-dark', bg: 'bg-secondary/10' },
  { label: 'Calificación Promedio', value: mockAdminKPIs.avgRating.toString(), icon: Star, change: '+0.1', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Verificaciones Pendientes', value: mockAdminKPIs.pendingVerifications.toString(), icon: Shield, change: '', color: 'text-warning', bg: 'bg-warning/10' },
  { label: 'Disputas Abiertas', value: mockAdminKPIs.openDisputes.toString(), icon: AlertTriangle, change: '', color: 'text-error', bg: 'bg-error/10' },
  { label: 'Ingresos Totales', value: formatCurrency(mockAdminKPIs.totalRevenue), icon: TrendingUp, change: '', color: 'text-success', bg: 'bg-success/10' },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} padding="md">
            <div className="flex items-center justify-between mb-2">
              <div className={`h-10 w-10 rounded-lg ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
              </div>
              {kpi.change && <span className="text-xs font-medium text-success">{kpi.change}</span>}
            </div>
            <p className="text-2xl font-bold text-text">{kpi.value}</p>
            <p className="text-xs text-text-secondary mt-0.5">{kpi.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="lg">
          <h3 className="font-semibold text-text mb-4">Ingresos Mensuales</h3>
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
      </div>
    </div>
  );
}
