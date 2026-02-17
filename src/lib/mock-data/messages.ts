import { ChatConversation, ChatMessage } from '../types';

export const mockConversations: ChatConversation[] = [
  { id: 'conv1', participants: ['u1', 'w1'], participantNames: ['María García López', 'Juan Pérez Mendoza'], participantAvatars: [undefined, undefined], lastMessage: 'Perfecto, llego mañana a las 9am', lastMessageTime: '2024-07-14T18:30:00Z', unreadCount: 1, serviceRequestId: 'sr1' },
  { id: 'conv2', participants: ['u2', 'w2'], participantNames: ['Carlos Hernández Ruiz', 'Ricardo Gómez Salinas'], participantAvatars: [undefined, undefined], lastMessage: 'Le envío la cotización por aquí', lastMessageTime: '2024-07-14T11:00:00Z', unreadCount: 0, serviceRequestId: 'sr2' },
  { id: 'conv3', participants: ['u9', 'w11'], participantNames: ['Sofía Jiménez Reyes', 'Patricia Solís Campos'], participantAvatars: [undefined, undefined], lastMessage: 'Ya empecé con la cocina', lastMessageTime: '2024-07-14T09:00:00Z', unreadCount: 2, serviceRequestId: 'sr10' },
  { id: 'conv4', participants: ['u7', 'w7'], participantNames: ['Fernanda Torres Vega', 'Raúl Delgado Fuentes'], participantAvatars: [undefined, undefined], lastMessage: '¿Tiene alguna preferencia de plantas?', lastMessageTime: '2024-07-13T16:00:00Z', unreadCount: 0, serviceRequestId: 'sr8' },
  { id: 'conv5', participants: ['u2', 'w6'], participantNames: ['Carlos Hernández Ruiz', 'Martín Aguilar Peña'], participantAvatars: [undefined, undefined], lastMessage: '¿Para cuándo necesita la mudanza?', lastMessageTime: '2024-07-12T10:00:00Z', unreadCount: 1, serviceRequestId: 'sr11' },
];

export const mockMessages: ChatMessage[] = [
  { id: 'm1', conversationId: 'conv1', senderId: 'u1', senderName: 'María García López', content: 'Hola Juan, ¿podrías venir a revisar la fuga?', timestamp: '2024-07-12T11:00:00Z', type: 'text', read: true },
  { id: 'm2', conversationId: 'conv1', senderId: 'w1', senderName: 'Juan Pérez Mendoza', content: 'Claro María, le envío una cotización.', timestamp: '2024-07-12T14:00:00Z', type: 'text', read: true },
  { id: 'm3', conversationId: 'conv1', senderId: 'system', senderName: 'Sistema', content: 'Juan Pérez envió una cotización por $850 MXN', timestamp: '2024-07-12T14:01:00Z', type: 'quote', read: true },
  { id: 'm4', conversationId: 'conv1', senderId: 'u1', senderName: 'María García López', content: 'Me parece bien, acepto la cotización. ¿Cuándo puede venir?', timestamp: '2024-07-13T08:00:00Z', type: 'text', read: true },
  { id: 'm5', conversationId: 'conv1', senderId: 'w1', senderName: 'Juan Pérez Mendoza', content: '¿Le parece bien mañana a las 9am?', timestamp: '2024-07-13T10:00:00Z', type: 'text', read: true },
  { id: 'm6', conversationId: 'conv1', senderId: 'u1', senderName: 'María García López', content: 'Sí, perfecto. Aquí lo espero.', timestamp: '2024-07-13T10:30:00Z', type: 'text', read: true },
  { id: 'm7', conversationId: 'conv1', senderId: 'w1', senderName: 'Juan Pérez Mendoza', content: 'Perfecto, llego mañana a las 9am', timestamp: '2024-07-14T18:30:00Z', type: 'text', read: false },
  { id: 'm8', conversationId: 'conv2', senderId: 'u2', senderName: 'Carlos Hernández Ruiz', content: 'Buenas tardes, tengo un problema eléctrico en la cocina.', timestamp: '2024-07-13T15:00:00Z', type: 'text', read: true },
  { id: 'm9', conversationId: 'conv2', senderId: 'w2', senderName: 'Ricardo Gómez Salinas', content: '¿Puede describir qué pasó exactamente?', timestamp: '2024-07-13T16:00:00Z', type: 'text', read: true },
  { id: 'm10', conversationId: 'conv2', senderId: 'u2', senderName: 'Carlos Hernández Ruiz', content: 'Se fue la luz solo en la cocina y el comedor. El resto funciona bien.', timestamp: '2024-07-13T16:30:00Z', type: 'text', read: true },
  { id: 'm11', conversationId: 'conv2', senderId: 'w2', senderName: 'Ricardo Gómez Salinas', content: 'Le envío la cotización por aquí', timestamp: '2024-07-14T11:00:00Z', type: 'text', read: true },
  { id: 'm12', conversationId: 'conv3', senderId: 'w11', senderName: 'Patricia Solís Campos', content: 'Buenos días Sofía, ya llegué al domicilio.', timestamp: '2024-07-14T08:00:00Z', type: 'text', read: true },
  { id: 'm13', conversationId: 'conv3', senderId: 'u9', senderName: 'Sofía Jiménez Reyes', content: 'Perfecto, las llaves están con el portero.', timestamp: '2024-07-14T08:10:00Z', type: 'text', read: true },
  { id: 'm14', conversationId: 'conv3', senderId: 'w11', senderName: 'Patricia Solís Campos', content: 'Ya empecé con la cocina', timestamp: '2024-07-14T09:00:00Z', type: 'text', read: false },
];
