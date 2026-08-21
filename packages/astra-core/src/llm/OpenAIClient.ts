import { BaseLLM } from "./BaseLLM";

export class OpenAIClient extends BaseLLM {
  async generate(prompt: string): Promise<string> {
    return `OpenAI response: ${prompt.slice(0, 50)}...`;
  }
}
