import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRouter } from './api/routes/auth.routes'; // will be mounted via index router
import { healthRouter } from './health/health.routes';

export function createServer() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(morgan('combined'));

  app.use('/health', healthRouter);
  app.use('/api', apiRouter);

  return app;
}
