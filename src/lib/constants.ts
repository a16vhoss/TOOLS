import {
  Wrench,
  Zap,
  Paintbrush,
  Droplets,
  Wind,
  Shield,
  Truck,
  Flower2,
  Camera,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react';

export const ROUTES = {
  // Landing
  HOME: '/',
  PRIVACY: '/privacidad',
  TERMS: '/terminos',
  // Onboarding
  SPLASH: '/splash',
  WELCOME: '/bienvenida',
  SELECT_ROLE: '/seleccionar-rol',
  REGISTER: '/registro',
  LOGIN: '/login',
  // User
  USER_HOME: '/inicio',
  USER_REQUEST: '/solicitar',
  USER_SERVICES: '/servicios',
  USER_CHAT: '/chat',
  USER_PROFILE: '/perfil',
  USER_MY_SERVICES: '/mis-servicios',
  USER_NOTIFICATIONS: '/notificaciones',
  // Worker
  WORKER_DASHBOARD: '/panel',
  WORKER_REQUESTS: '/solicitudes',
  WORKER_JOBS: '/mis-trabajos',
  WORKER_CHAT: '/w-chat',
  WORKER_PROFILE: '/perfil-profesional',
  WORKER_PAYMENTS: '/pagos',
  // Admin
  ADMIN_DASHBOARD: '/admin',
  ADMIN_VERIFICATION: '/admin/verificacion',
  ADMIN_USERS: '/admin/usuarios',
  ADMIN_WORKERS: '/admin/trabajadores',
  ADMIN_SERVICES: '/admin/servicios',
  ADMIN_CATEGORIES: '/admin/servicios/categorias',
  ADMIN_DISPUTES: '/admin/disputas',
  ADMIN_FINANCE: '/admin/finanzas',
  ADMIN_ANALYTICS: '/admin/analiticas',
} as const;

export interface ServiceCategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  { id: 'plomeria', name: 'Plomería', description: 'Reparaciones e instalaciones de agua', icon: Droplets, color: '#4AB3E2', bgColor: '#DBEAFE' },
  { id: 'electricidad', name: 'Electricidad', description: 'Instalaciones y reparaciones eléctricas', icon: Zap, color: '#F59E0B', bgColor: '#FEF3C7' },
  { id: 'pintura', name: 'Pintura', description: 'Pintura interior y exterior', icon: Paintbrush, color: '#10B981', bgColor: '#D1FAE5' },
  { id: 'limpieza', name: 'Limpieza', description: 'Limpieza profunda del hogar', icon: Wind, color: '#8B5CF6', bgColor: '#EDE9FE' },
  { id: 'cerrajeria', name: 'Cerrajería', description: 'Cerraduras, llaves y seguridad', icon: Shield, color: '#EF4444', bgColor: '#FEE2E2' },
  { id: 'mudanzas', name: 'Mudanzas', description: 'Transporte y mudanzas', icon: Truck, color: '#6366F1', bgColor: '#E0E7FF' },
  { id: 'jardineria', name: 'Jardinería', description: 'Mantenimiento de jardines', icon: Flower2, color: '#059669', bgColor: '#D1FAE5' },
  { id: 'modelo', name: 'Modelo', description: 'Modelaje para fotografía y pasarela', icon: Camera, color: '#EC4899', bgColor: '#FCE7F3' },
  { id: 'influencer', name: 'Influencer', description: 'Promoción y creación de contenido', icon: Smartphone, color: '#F97316', bgColor: '#FFEDD5' },
  { id: 'edecan', name: 'Edecán', description: 'Eventos corporativos y activaciones', icon: Users, color: '#0EA5E9', bgColor: '#E0F2FE' },
  { id: 'general', name: 'Reparaciones Generales', description: 'Mantenimiento general del hogar', icon: Wrench, color: '#64748B', bgColor: '#F1F5F9' },
];

export const REQUEST_STATUS_MAP: Record<string, { label: string; color: string; bgColor: string }> = {
  pending: { label: 'Pendiente', color: '#F59E0B', bgColor: '#FEF3C7' },
  quoted: { label: 'Cotizado', color: '#4AB3E2', bgColor: '#DBEAFE' },
  accepted: { label: 'Aceptado', color: '#8B5CF6', bgColor: '#EDE9FE' },
  in_progress: { label: 'En Progreso', color: '#4AB3E2', bgColor: '#DBEAFE' },
  completed: { label: 'Completado', color: '#10B981', bgColor: '#D1FAE5' },
  cancelled: { label: 'Cancelado', color: '#EF4444', bgColor: '#FEE2E2' },
  disputed: { label: 'En Disputa', color: '#EF4444', bgColor: '#FEE2E2' },
};

export const URGENCY_OPTIONS = [
  { value: 'low', label: 'Baja', description: 'Puede esperar unos días' },
  { value: 'medium', label: 'Media', description: 'Dentro de esta semana' },
  { value: 'high', label: 'Alta', description: 'Lo antes posible' },
  { value: 'emergency', label: 'Urgencia', description: 'Emergencia, necesito ayuda ahora' },
];
