export class SettingsRepository {
  getSettings(userId: string) {
    return { theme: "dark", model: "astramind-v2" };
  }
}
