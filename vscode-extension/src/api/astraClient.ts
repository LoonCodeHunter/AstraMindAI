export class AstraClient {
  constructor(private url: string) {}

  async chat(message: string, context: any) {
    return {
      reply: `AstraMindAI: ${message}`,
      context
    };
  }
}
