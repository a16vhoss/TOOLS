export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: 'user' | 'worker' | 'admin';
  createdAt: string;
  address?: Address;
}

export interface Address {
  street: string;
  colony: string;
  city: string;
  state: string;
  zipCode: string;
  lat?: number;
  lng?: number;
}

export interface WorkerProfile extends User {
  role: 'worker';
  bio: string;
  categories: string[];
  rating: number;
  reviewCount: number;
  completedJobs: number;
  yearsExperience: number;
  verified: boolean;
  verificationStatus: 'pending' | 'approved' | 'rejected';
  hourlyRate: number;
  availability: WorkerAvailability;
  portfolio: string[];
  certifications: Certification[];
  earnings: WorkerEarnings;
}

export interface WorkerAvailability {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  available: boolean;
  startTime: string;
  endTime: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verified: boolean;
}

export interface WorkerEarnings {
  total: number;
  thisMonth: number;
  lastMonth: number;
  pending: number;
  available: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: SubCategory[];
  active: boolean;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  avgPrice: number;
}

export interface ServiceRequest {
  id: string;
  userId: string;
  categoryId: string;
  subcategoryId?: string;
  title: string;
  description: string;
  photos: string[];
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  status: 'pending' | 'quoted' | 'accepted' | 'in_progress' | 'completed' | 'cancelled' | 'disputed';
  address: Address;
  preferredDate?: string;
  preferredTime?: string;
  createdAt: string;
  updatedAt: string;
  assignedWorkerId?: string;
  acceptedQuoteId?: string;
  completedAt?: string;
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  actor: string;
}

export interface Quote {
  id: string;
  requestId: string;
  workerId: string;
  workerName: string;
  workerRating: number;
  workerPhoto?: string;
  amount: number;
  description: string;
  estimatedDuration: string;
  includesMaterials: boolean;
  materialsCost?: number;
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Review {
  id: string;
  serviceId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  workerId: string;
  rating: number;
  comment: string;
  photos?: string[];
  createdAt: string;
  workerResponse?: string;
}

export interface ChatConversation {
  id: string;
  participants: string[];
  participantNames: string[];
  participantAvatars: (string | undefined)[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  serviceRequestId?: string;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'quote' | 'system';
  read: boolean;
}

export interface Payment {
  id: string;
  serviceId: string;
  userId: string;
  workerId: string;
  amount: number;
  platformFee: number;
  workerEarning: number;
  method: 'card' | 'transfer' | 'cash';
  status: 'pending' | 'completed' | 'refunded';
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'service' | 'quote' | 'chat' | 'payment' | 'system';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface AdminKPIs {
  totalUsers: number;
  totalWorkers: number;
  activeServices: number;
  completedServices: number;
  totalRevenue: number;
  monthlyRevenue: number;
  avgRating: number;
  pendingVerifications: number;
  openDisputes: number;
  userGrowth: number;
  revenueGrowth: number;
}

export interface Dispute {
  id: string;
  serviceId: string;
  userId: string;
  userName: string;
  workerId: string;
  workerName: string;
  reason: string;
  description: string;
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  resolvedAt?: string;
  resolution?: string;
  messages: DisputeMessage[];
}

export interface DisputeMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'user' | 'worker' | 'admin';
  content: string;
  timestamp: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
  services: number;
}

export interface UserGrowthData {
  month: string;
  users: number;
  workers: number;
}
