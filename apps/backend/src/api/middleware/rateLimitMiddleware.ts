import { Request, Response, NextFunction } from 'express';

const buckets = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const LIMIT = 120;

export function rateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
  const key = req.ip;
  const now = Date.now();
  const bucket = buckets.get(key) || { count: 0, reset: now + WINDOW_MS };

  if (now > bucket.reset) {
    bucket.count = 0;
    bucket.reset = now + WINDOW_MS;
  }

  bucket.count += 1;
  buckets.set(key, bucket);

  if (bucket.count > LIMIT) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  next();
}
