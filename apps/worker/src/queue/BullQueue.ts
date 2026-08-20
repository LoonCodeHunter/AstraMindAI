import Queue from 'bull';

export const queue = new Queue('astramind-jobs', {
  redis: { host: 'localhost', port: 6379 }
});
