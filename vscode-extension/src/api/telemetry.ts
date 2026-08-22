export function sendTelemetry(event: string, data: any) {
  return { event, data, sent: true };
}
