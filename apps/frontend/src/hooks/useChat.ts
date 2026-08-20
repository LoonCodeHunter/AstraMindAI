import { useState } from 'react';
import { apiClient } from '@services/apiClient';
import type { ChatMessage } from '@utils/formatters';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content
    };
    setMessages((prev) => [...prev, userMessage]);

    const res = await apiClient.post('/chat', { message: content });
    const reply: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: res.data.reply ?? 'No reply'
    };
    setMessages((prev) => [...prev, reply]);
  };

  return { messages, sendMessage };
}
