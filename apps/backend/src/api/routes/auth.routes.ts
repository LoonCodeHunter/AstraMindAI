import { Router } from 'express';
import { login } from '../controllers/auth.controller';

export const apiRouter = Router();

apiRouter.post('/auth/login', login);
