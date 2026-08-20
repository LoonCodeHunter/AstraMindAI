import { Request, Response, NextFunction } from 'express';

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  // TODO: verify token
  (req as any).userId = 'demo-user';
  next();
}
