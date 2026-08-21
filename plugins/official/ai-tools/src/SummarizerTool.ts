export class SummarizerTool {
  summarize(text: string) {
    return text.split(" ").slice(0, 20).join(" ") + "...";
  }
}
