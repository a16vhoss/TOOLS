'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { SearchBar } from '@/components/ui/search-bar';
import { Badge } from '@/components/ui/badge';
import { mockUsers } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';

export default function UsuariosPage() {
  const [search, setSearch] = useState('');
  const filtered = mockUsers.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text">Usuarios ({mockUsers.length})</h1>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar usuario..." />
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-bg">
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Nombre</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Email</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Teléfono</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Registro</th>
              <th className="text-left px-4 py-3 font-medium text-text-secondary">Estado</th>
            </tr></thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-bg/50">
                  <td className="px-4 py-3 font-medium text-text">{user.name}</td>
                  <td className="px-4 py-3 text-text-secondary">{user.email}</td>
                  <td className="px-4 py-3 text-text-secondary">{user.phone}</td>
                  <td className="px-4 py-3 text-text-secondary">{formatDate(user.createdAt)}</td>
                  <td className="px-4 py-3"><Badge variant="success" size="sm">Activo</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
