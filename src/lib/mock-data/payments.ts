import { Payment } from '../types';

export const mockPayments: Payment[] = [
  { id: 'pay1', serviceId: 'sr4', userId: 'u1', workerId: 'w4', amount: 1800, platformFee: 270, workerEarning: 1530, method: 'card', status: 'completed', createdAt: '2024-06-22T16:30:00Z' },
  { id: 'pay2', serviceId: 'sr5', userId: 'u4', workerId: 'w5', amount: 600, platformFee: 90, workerEarning: 510, method: 'transfer', status: 'completed', createdAt: '2024-07-10T22:30:00Z' },
  { id: 'pay3', serviceId: 'sr13', userId: 'u5', workerId: 'w2', amount: 3200, platformFee: 480, workerEarning: 2720, method: 'card', status: 'completed', createdAt: '2024-06-28T17:30:00Z' },
  { id: 'pay4', serviceId: 'sr14', userId: 'u3', workerId: 'w4', amount: 800, platformFee: 120, workerEarning: 680, method: 'cash', status: 'completed', createdAt: '2024-06-05T14:30:00Z' },
  { id: 'pay5', serviceId: 'sr1', userId: 'u1', workerId: 'w1', amount: 850, platformFee: 127, workerEarning: 723, method: 'card', status: 'pending', createdAt: '2024-07-14T09:00:00Z' },
  { id: 'pay6', serviceId: 'sr10', userId: 'u9', workerId: 'w11', amount: 3500, platformFee: 525, workerEarning: 2975, method: 'transfer', status: 'pending', createdAt: '2024-07-14T08:00:00Z' },
];
