export class BillingService {
  calculateUsage(usage: { tokens: number; inferenceMs: number }) {
    const tokenCost = usage.tokens * 0.0001;
    const inferenceCost = usage.inferenceMs * 0.00001;
    return tokenCost + inferenceCost;
  }
}
