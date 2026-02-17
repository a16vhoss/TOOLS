'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { ServiceRequest, Quote, Review, ChatConversation, ChatMessage, Payment, Notification } from '@/lib/types';
import {
  mockRequests,
  mockQuotes,
  mockReviews,
  mockConversations,
  mockMessages,
  mockPayments,
  mockNotifications,
} from '@/lib/mock-data';

interface MockDataContextValue {
  requests: ServiceRequest[];
  quotes: Quote[];
  reviews: Review[];
  conversations: ChatConversation[];
  messages: ChatMessage[];
  payments: Payment[];
  notifications: Notification[];
  addRequest: (request: ServiceRequest) => void;
  updateRequest: (id: string, updates: Partial<ServiceRequest>) => void;
  addQuote: (quote: Quote) => void;
  addReview: (review: Review) => void;
  addMessage: (message: ChatMessage) => void;
  markNotificationRead: (id: string) => void;
}

const MockDataContext = createContext<MockDataContextValue>({} as MockDataContextValue);

export function MockDataProvider({ children }: { children: ReactNode }) {
  const [requests, setRequests] = useState<ServiceRequest[]>(mockRequests);
  const [quotes, setQuotes] = useState<Quote[]>(mockQuotes);
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [conversations] = useState<ChatConversation[]>(mockConversations);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [payments] = useState<Payment[]>(mockPayments);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const addRequest = (request: ServiceRequest) => {
    setRequests((prev) => [request, ...prev]);
  };

  const updateRequest = (id: string, updates: Partial<ServiceRequest>) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updates } : r))
    );
  };

  const addQuote = (quote: Quote) => {
    setQuotes((prev) => [quote, ...prev]);
  };

  const addReview = (review: Review) => {
    setReviews((prev) => [review, ...prev]);
  };

  const addMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <MockDataContext.Provider
      value={{
        requests,
        quotes,
        reviews,
        conversations,
        messages,
        payments,
        notifications,
        addRequest,
        updateRequest,
        addQuote,
        addReview,
        addMessage,
        markNotificationRead,
      }}
    >
      {children}
    </MockDataContext.Provider>
  );
}

export const useMockData = () => useContext(MockDataContext);
