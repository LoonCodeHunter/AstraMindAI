import { Router } from 'express';
import { chat } from '../controllers/chat.controller';

export const chatRouter = Router();

chatRouter.post('/chat', chat);
