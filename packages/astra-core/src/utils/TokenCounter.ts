export class TokenCounter {
  static count(text: string) {
    return text.split(/\s+/).length;
  }
}
