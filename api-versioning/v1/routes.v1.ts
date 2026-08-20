import { Router } from 'express';

export const v1Router = Router();

v1Router.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'v1' });
});

v1Router.post('/chat', (req, res) => {
  const { message } = req.body;
  res.json({
    version: 'v1',
    reply: `Legacy response to: ${message}`,
  });
});
