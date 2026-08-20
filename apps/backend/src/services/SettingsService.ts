export class SettingsService {
  async getSettings(userId: string) {
    return {
      userId,
      theme: 'dark',
      privacy: 'standard',
      model: 'astramind-v2',
    };
  }
}
