import { SettingsService } from '../services/SettingsService';

const settingsService = new SettingsService();

export class SettingsController {
  async get(userId: string) {
    return settingsService.getSettings(userId);
  }
}
