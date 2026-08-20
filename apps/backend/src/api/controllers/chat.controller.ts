import { Request, Response } from 'express';
import { ChatService } from '../../services/ChatService';

const chatService = new ChatService();

export async function chat(req: Request, res: Response) {
  const { message, sessionId } = req.body;
  const reply = await chatService.handleMessage({ message, sessionId });
  res.json(reply);
}
