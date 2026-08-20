import { queue } from './queue/BullQueue';

console.log('Worker started');
queue.process('*', async (job) => {
  console.log('Processing job', job.name, job.data);
});
