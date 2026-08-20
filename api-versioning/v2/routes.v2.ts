import { Router } from 'express';
import { V2ChatRequest, V2ChatResponse } from './types.v2';

export const v2Router = Router();

v2Router.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'v2', agents: ['planner', 'executor', 'memory'] });
});

v2Router.post('/chat', (req, res) => {
  const { message, sessionId } = req.body as V2ChatRequest;

  const response: V2ChatResponse = {
    version: 'v2',
    sessionId,
    agentsUsed: ['planner', 'executor'],
    reply: `Advanced response to: ${message}`,
    safety: {
      passed: true,
      filters: [],
    },
  };

  res.json(response);
});
