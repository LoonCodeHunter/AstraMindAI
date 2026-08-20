import Queue from 'bull';
import type { JobType } from './JobTypes';

export const queue = new Queue<JobType>('astramind-jobs', {
  redis: { host: 'localhost', port: 6379 }
});
