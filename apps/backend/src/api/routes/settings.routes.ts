import { Router } from 'express';
import { SettingsService } from '../../services/SettingsService';

const router = Router();
const settingsService = new SettingsService();

router.get('/', async (req, res) => {
  const userId = (req as any).userId;
  const settings = await settingsService.getSettings(userId);
  res.json(settings);
});

export const settingsRouter = router;
