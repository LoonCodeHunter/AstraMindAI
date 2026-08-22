export class LocalClient {
  async chat(message: string) {
    return { reply: `Local: ${message}` };
  }
}
