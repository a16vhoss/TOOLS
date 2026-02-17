'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { mockConversations, mockMessages } from '@/lib/mock-data';
import { formatTime, cn } from '@/lib/utils';

export default function WorkerChatDetailPage({ params }: { params: Promise<{ chatId: string }> }) {
  const { chatId } = use(params);
  const conversation = mockConversations.find((c) => c.id === chatId);
  const messages = mockMessages.filter((m) => m.conversationId === chatId);
  const [newMessage, setNewMessage] = useState('');
  const currentUserId = conversation?.participants[1] || 'w1';

  if (!conversation) return <div className="p-4">Conversación no encontrada</div>;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center gap-3 px-4 h-14 border-b border-border bg-bg-white shrink-0">
        <Link href="/w-chat" className="p-1 no-underline"><ArrowLeft className="h-5 w-5 text-text" /></Link>
        <Avatar name={conversation.participantNames[0]} size="sm" />
        <div><p className="text-sm font-semibold text-text">{conversation.participantNames[0]}</p><p className="text-xs text-text-light">Cliente</p></div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg) => {
          const isMe = msg.senderId === currentUserId;
          if (msg.type === 'system' || msg.type === 'quote') {
            return <div key={msg.id} className="flex justify-center"><div className="bg-info-light text-info text-xs px-3 py-1.5 rounded-full">{msg.content}</div></div>;
          }
          return (
            <div key={msg.id} className={cn('flex', isMe ? 'justify-end' : 'justify-start')}>
              <div className={cn('max-w-[75%] px-3 py-2 rounded-2xl', isMe ? 'bg-primary text-white rounded-br-sm' : 'bg-bg-white border border-border text-text rounded-bl-sm')}>
                <p className="text-sm">{msg.content}</p>
                <p className={cn('text-[10px] mt-1', isMe ? 'text-blue-200' : 'text-text-light')}>{formatTime(msg.timestamp)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 py-3 border-t border-border bg-bg-white shrink-0">
        <div className="flex items-center gap-2">
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Escribe un mensaje..." className="flex-1 h-10 px-4 rounded-full border border-border bg-bg text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary" />
          <button className="h-10 w-10 bg-primary rounded-full flex items-center justify-center shrink-0"><Send className="h-4 w-4 text-white" /></button>
        </div>
      </div>
    </div>
  );
}
