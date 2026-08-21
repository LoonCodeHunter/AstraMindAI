export function enrichLogContext(context: Record<string, unknown>) {
  return {
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || "development",
    ...context
  };
}
