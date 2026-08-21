export function generateInvoice(userId: string, amount: number) {
  return {
    userId,
    amount,
    issuedAt: new Date().toISOString()
  };
}
