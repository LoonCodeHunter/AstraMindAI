export class HistoryService {
  async getHistory(userId: string) {
    return [{ id: 'conv-1', userId, summary: 'Sample conversation' }];
  }
}
