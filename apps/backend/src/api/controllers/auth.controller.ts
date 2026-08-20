import { Request, Response } from 'express';
import { AuthService } from '../../services/AuthService';

const authService = new AuthService();

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res.json(result);
}
