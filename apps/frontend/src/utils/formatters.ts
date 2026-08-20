export type Role = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
}

export function formatTimestamp(date: Date) {
  return date.toISOString();
}
