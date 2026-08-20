import { ChatService } from '../services/ChatService';

const chatService = new ChatService();

export class ChatController {
  async handle(message: string, sessionId: string) {
    return chatService.handleMessage({ message, sessionId });
  }
}
