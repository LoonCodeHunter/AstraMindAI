export class QuotaService {
  checkQuota(plan: string, used: number) {
    const rules = {
      free: 5000,
      developer: 20000,
      team: 100000,
      enterprise: Infinity
    };
    return used <= rules[plan];
  }
}
