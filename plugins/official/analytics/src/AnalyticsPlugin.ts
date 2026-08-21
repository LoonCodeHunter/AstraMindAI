export class AnalyticsPlugin {
  track(event: string, data: any) {
    return { event, data, timestamp: Date.now() };
  }
}
