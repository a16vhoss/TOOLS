import { Review } from '../types';

export const mockReviews: Review[] = [
  { id: 'r1', serviceId: 'sr4', userId: 'u1', userName: 'María García López', workerId: 'w4', rating: 5, comment: 'Excelente servicio. Isabel dejó mi departamento impecable. Muy profesional y puntual.', createdAt: '2024-06-23T10:00:00Z', workerResponse: '¡Gracias María! Fue un placer atenderte.' },
  { id: 'r2', serviceId: 'sr5', userId: 'u4', userName: 'Roberto Sánchez Díaz', workerId: 'w5', rating: 5, comment: 'Llegó en 20 minutos y abrió la puerta sin ningún daño. Servicio excelente.', createdAt: '2024-07-11T08:00:00Z' },
  { id: 'r3', serviceId: 'sr13', userId: 'u5', userName: 'Laura Rodríguez Morales', workerId: 'w2', rating: 5, comment: 'Ricardo es un profesional. Cambió todo el centro de carga y quedó perfecto. Muy limpio.', createdAt: '2024-06-29T10:00:00Z', workerResponse: 'Gracias Laura, cualquier cosa estamos para servirle.' },
  { id: 'r4', serviceId: 'sr14', userId: 'u3', userName: 'Ana Martínez Flores', workerId: 'w4', rating: 4, comment: 'Buen servicio de limpieza. Solo faltó limpiar debajo de los muebles.', createdAt: '2024-06-06T10:00:00Z' },
  { id: 'r5', serviceId: 'sr4', userId: 'u1', userName: 'María García López', workerId: 'w1', rating: 5, comment: 'Juan es excelente plomero. Arregló la fuga rapidísimo.', createdAt: '2024-05-15T10:00:00Z' },
  { id: 'r6', serviceId: 'sr4', userId: 'u6', userName: 'Pedro López Castro', workerId: 'w2', rating: 4, comment: 'Buen trabajo con la instalación eléctrica. Un poco tardó más de lo esperado.', createdAt: '2024-05-20T10:00:00Z' },
  { id: 'r7', serviceId: 'sr4', userId: 'u8', userName: 'Diego Ramírez Ortega', workerId: 'w14', rating: 5, comment: 'Andrés hizo un trabajo increíble con los muebles. Muy detallista.', createdAt: '2024-06-10T10:00:00Z' },
  { id: 'r8', serviceId: 'sr4', userId: 'u9', userName: 'Sofía Jiménez Reyes', workerId: 'w3', rating: 4, comment: 'La pintura quedó muy bien. Los acabados son de calidad.', createdAt: '2024-06-15T10:00:00Z' },
];
