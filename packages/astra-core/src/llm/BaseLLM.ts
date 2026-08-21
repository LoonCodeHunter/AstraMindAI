export abstract class BaseLLM {
  abstract generate(prompt: string): Promise<string>;
}
