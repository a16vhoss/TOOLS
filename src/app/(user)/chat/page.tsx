'use client';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { EmptyState } from '@/components/ui/empty-state';
import { mockConversations } from '@/lib/mock-data';
import { formatTime } from '@/lib/utils';

export default function ChatPage() {
  const conversations = mockConversations;
  if (conversations.length === 0) {
    return <EmptyState icon={MessageCircle} title="Sin conversaciones" description="Tus conversaciones con profesionales aparecerán aquí" />;
  }
  return (
    <div className="px-4 py-4 space-y-1">
      <h1 className="text-xl font-bold text-text mb-4">Mensajes</h1>
      {conversations.map((conv) => (
        <Link key={conv.id} href={`/chat/${conv.id}`} className="no-underline">
          <div className="flex items-center gap-3 py-3 border-b border-border">
            <Avatar name={conv.participantNames[1]} size="md" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-text truncate">{conv.participantNames[1]}</p>
                <span className="text-xs text-text-light shrink-0">{formatTime(conv.lastMessageTime)}</span>
              </div>
              <p className="text-sm text-text-secondary truncate">{conv.lastMessage}</p>
            </div>
            {conv.unreadCount > 0 && (
              <span className="h-5 w-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">{conv.unreadCount}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
