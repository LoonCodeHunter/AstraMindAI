import { BaseLLM } from "./BaseLLM";

export class LocalLLMClient extends BaseLLM {
  async generate(prompt: string): Promise<string> {
    return `Local response: ${prompt.slice(0, 50)}...`;
  }
}
