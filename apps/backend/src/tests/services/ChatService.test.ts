import { describe, it, expect } from 'vitest';
import { ChatService } from '../../services/ChatService';

describe('ChatService', () => {
  it('echoes message', async () => {
    const svc = new ChatService();
    const res = await svc.handleMessage({ message: 'hi', sessionId: 's1' });
    expect(res.reply).toContain('hi');
  });
});
