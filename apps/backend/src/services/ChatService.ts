type ChatInput = { message: string; sessionId: string };

export class ChatService {
  async handleMessage(input: ChatInput) {
    return {
      sessionId: input.sessionId,
      reply: `You said: ${input.message}`,
      model: 'astramind-v2',
    };
  }
}
