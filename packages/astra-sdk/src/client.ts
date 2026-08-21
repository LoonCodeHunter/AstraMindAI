export class AstraClient {
  constructor(private url: string) {}

  async chat(message: string) {
    return { reply: `Echo: ${message}` };
  }
}
