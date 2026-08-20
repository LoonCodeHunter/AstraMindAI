import { Router } from 'express';
import { HistoryService } from '../../services/HistoryService';

const router = Router();
const historyService = new HistoryService();

router.get('/', async (req, res) => {
  const userId = (req as any).userId;
  const history = await historyService.getHistory(userId);
  res.json(history);
});

export const historyRouter = router;
