import { Notification } from '../types';

export const mockNotifications: Notification[] = [
  { id: 'n1', userId: 'u1', title: 'Trabajo en progreso', message: 'Juan Pérez ha iniciado el trabajo de plomería en tu hogar.', type: 'service', read: false, createdAt: '2024-07-14T09:00:00Z', actionUrl: '/mis-servicios/sr1' },
  { id: 'n2', userId: 'u1', title: 'Nuevo mensaje', message: 'Juan Pérez te envió un mensaje.', type: 'chat', read: false, createdAt: '2024-07-14T18:30:00Z', actionUrl: '/chat/conv1' },
  { id: 'n3', userId: 'u2', title: 'Nueva cotización', message: 'Ricardo Gómez te envió una cotización por $750.', type: 'quote', read: false, createdAt: '2024-07-14T11:00:00Z', actionUrl: '/mis-servicios/sr2' },
  { id: 'n4', userId: 'u5', title: 'Pago completado', message: 'Tu pago de $3,200 ha sido procesado exitosamente.', type: 'payment', read: true, createdAt: '2024-06-28T17:30:00Z' },
  { id: 'n5', userId: 'u9', title: 'Trabajo en progreso', message: 'Patricia Solís ha comenzado la limpieza.', type: 'service', read: false, createdAt: '2024-07-14T08:00:00Z', actionUrl: '/mis-servicios/sr10' },
  { id: 'n6', userId: 'w1', title: 'Nueva solicitud', message: 'Hay una nueva solicitud de plomería cerca de tu zona.', type: 'service', read: false, createdAt: '2024-07-14T11:00:00Z', actionUrl: '/solicitudes/sr6' },
  { id: 'n7', userId: 'w1', title: 'Cotización aceptada', message: 'María García aceptó tu cotización por $850.', type: 'quote', read: true, createdAt: '2024-07-13T08:00:00Z' },
  { id: 'n8', userId: 'w2', title: 'Nueva solicitud', message: 'Nueva solicitud de electricidad en tu zona.', type: 'service', read: false, createdAt: '2024-07-13T15:00:00Z', actionUrl: '/solicitudes/sr2' },
  { id: 'n9', userId: 'u1', title: 'Bienvenida', message: '¡Bienvenida a La palomita azul! Encuentra al profesional perfecto para tu hogar.', type: 'system', read: true, createdAt: '2024-01-15T10:00:00Z' },
  { id: 'n10', userId: 'w4', title: 'Nueva reseña', message: 'María García te dejó una reseña de 5 estrellas.', type: 'service', read: true, createdAt: '2024-06-23T10:00:00Z' },
];
