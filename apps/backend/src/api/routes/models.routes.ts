import { Router } from 'express';
import { ModelService } from '../../services/ModelService';

const router = Router();
const modelService = new ModelService();

router.get('/', async (_req, res) => {
  const models = await modelService.listModels();
  res.json(models);
});

export const modelsRouter = router;
