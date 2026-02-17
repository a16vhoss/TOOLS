import { AdminKPIs, Dispute, RevenueData, UserGrowthData } from '../types';

export const mockAdminKPIs: AdminKPIs = {
  totalUsers: 1247,
  totalWorkers: 386,
  activeServices: 45,
  completedServices: 2834,
  totalRevenue: 4250000,
  monthlyRevenue: 425000,
  avgRating: 4.7,
  pendingVerifications: 12,
  openDisputes: 3,
  userGrowth: 15.3,
  revenueGrowth: 22.1,
};

export const mockRevenueData: RevenueData[] = [
  { month: 'Ene', revenue: 280000, services: 187 },
  { month: 'Feb', revenue: 310000, services: 205 },
  { month: 'Mar', revenue: 295000, services: 198 },
  { month: 'Abr', revenue: 340000, services: 224 },
  { month: 'May', revenue: 380000, services: 251 },
  { month: 'Jun', revenue: 410000, services: 270 },
  { month: 'Jul', revenue: 425000, services: 285 },
];

export const mockUserGrowthData: UserGrowthData[] = [
  { month: 'Ene', users: 820, workers: 245 },
  { month: 'Feb', users: 890, workers: 268 },
  { month: 'Mar', users: 945, workers: 290 },
  { month: 'Abr', users: 1020, workers: 315 },
  { month: 'May', users: 1095, workers: 340 },
  { month: 'Jun', users: 1180, workers: 365 },
  { month: 'Jul', users: 1247, workers: 386 },
];

export const mockDisputes: Dispute[] = [
  {
    id: 'd1', serviceId: 'sr18', userId: 'u1', userName: 'María García López', workerId: 'w7', workerName: 'Raúl Delgado Fuentes',
    reason: 'Trabajo incompleto', description: 'El jardín no quedó como se acordó. Faltan plantas y el sistema de riego no funciona correctamente.',
    status: 'investigating', priority: 'high', createdAt: '2024-07-01T10:00:00Z',
    messages: [
      { id: 'dm1', senderId: 'u1', senderName: 'María García López', senderRole: 'user', content: 'El trabajo no se completó como se acordó. Faltan varias plantas y el riego no funciona.', timestamp: '2024-07-01T10:00:00Z' },
      { id: 'dm2', senderId: 'w7', senderName: 'Raúl Delgado Fuentes', senderRole: 'worker', content: 'Las plantas que faltaron no estaban disponibles en el vivero. Ofrecí alternativas pero la clienta no aceptó.', timestamp: '2024-07-01T14:00:00Z' },
      { id: 'dm3', senderId: 'admin1', senderName: 'Administrador La palomita azul', senderRole: 'admin', content: 'Estamos revisando el caso. ¿Podría enviar fotos del trabajo realizado?', timestamp: '2024-07-02T10:00:00Z' },
    ],
  },
  {
    id: 'd2', serviceId: 'sr4', userId: 'u6', userName: 'Pedro López Castro', workerId: 'w8', workerName: 'Héctor Ruiz Vargas',
    reason: 'Cobro excesivo', description: 'El trabajador cobró materiales que no utilizó. La factura no coincide con lo acordado.',
    status: 'open', priority: 'medium', createdAt: '2024-07-10T15:00:00Z',
    messages: [
      { id: 'dm4', senderId: 'u6', senderName: 'Pedro López Castro', senderRole: 'user', content: 'Me cobraron $2,500 en materiales pero solo se usaron como $800. Quiero un reembolso parcial.', timestamp: '2024-07-10T15:00:00Z' },
    ],
  },
  {
    id: 'd3', serviceId: 'sr4', userId: 'u8', userName: 'Diego Ramírez Ortega', workerId: 'w3', workerName: 'Fernando Castillo Luna',
    reason: 'Daño a propiedad', description: 'Durante la pintura, se manchó un mueble y no se hizo responsable.',
    status: 'resolved', priority: 'high', createdAt: '2024-06-20T10:00:00Z', resolvedAt: '2024-06-25T15:00:00Z',
    resolution: 'El trabajador aceptó pagar la limpieza del mueble. Se descontó $1,500 de su pago.',
    messages: [
      { id: 'dm5', senderId: 'u8', senderName: 'Diego Ramírez Ortega', senderRole: 'user', content: 'El pintor manchó mi sofá de pintura y dice que no fue él.', timestamp: '2024-06-20T10:00:00Z' },
      { id: 'dm6', senderId: 'w3', senderName: 'Fernando Castillo Luna', senderRole: 'worker', content: 'Acepto que fue un accidente. Estoy dispuesto a cubrir la limpieza.', timestamp: '2024-06-22T09:00:00Z' },
      { id: 'dm7', senderId: 'admin1', senderName: 'Administrador La palomita azul', senderRole: 'admin', content: 'Se ha acordado un descuento de $1,500 del pago del trabajador para cubrir la limpieza del mueble.', timestamp: '2024-06-25T15:00:00Z' },
    ],
  },
];
