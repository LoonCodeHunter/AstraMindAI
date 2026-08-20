import schema from './MemorySchema.json';

export type MemoryType = 'conversation' | 'preference' | 'system' | 'task';

export interface Memory {
  userId: string;
  sessionId: string;
  timestamp: string;
  type: MemoryType;
  content: string;
  metadata?: Record<string, unknown>;
  importance?: number;
}

export class MemoryStore {
  private memories: Memory[] = [];

  add(memory: Memory): void {
    // In a real system, validate against schema and persist to DB/vector store.
    this.memories.push(memory);
  }

  getByUser(userId: string): Memory[] {
    return this.memories.filter((m) => m.userId === userId);
  }

  getSessionMemories(sessionId: string): Memory[] {
    return this.memories.filter((m) => m.sessionId === sessionId);
  }

  searchByContent(query: string): Memory[] {
    const q = query.toLowerCase();
    return this.memories.filter((m) => m.content.toLowerCase().includes(q));
  }
}
