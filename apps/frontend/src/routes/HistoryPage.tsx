import { useState, useEffect } from 'react';
import { apiClient } from '@services/apiClient';
import { ConversationList } from '@components/history/ConversationList';

export function HistoryPage() {
  const [conversations, setConversations] = useState<{ id: string; summary: string }[]>([]);

  useEffect(() => {
    apiClient.get('/history').then((res) => setConversations(res.data));
  }, []);

  return (
    <ConversationList
      conversations={conversations}
      onSelect={(id) => console.log('Selected conversation', id)}
    />
  );
}
