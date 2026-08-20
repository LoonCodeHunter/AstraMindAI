import { queue } from './queue/BullQueue';
import { JobType } from './queue/JobTypes';
import {
  runAnalyticsAggregation,
} from './jobs/AnalyticsAggregationJob';
import {
  runCleanupOldConversations,
} from './jobs/CleanupOldConversationsJob';
import {
  runEmailDigest,
} from './jobs/emailDigest.job';
import {
  runRebuildEmbeddings,
} from './jobs/RebuildEmbeddingsJob';
import {
  runRetrainModels,
} from './jobs/retrainModels.job';

console.log('Worker started');

queue.process('*', async (job) => {
  const type = job.name as JobType;
  switch (type) {
    case 'analytics-aggregation':
      await runAnalyticsAggregation();
      break;
    case 'cleanup-old-conversations':
      await runCleanupOldConversations();
      break;
    case 'email-digest':
      await runEmailDigest();
      break;
    case 'rebuild-embeddings':
      await runRebuildEmbeddings();
      break;
    case 'retrain-models':
      await runRetrainModels();
      break;
    default:
      console.warn('Unknown job type', type);
  }
});
