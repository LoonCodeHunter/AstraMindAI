import { Cleaner } from "./cleaner";

export class HtmlCleaner extends Cleaner {
  clean(input: string): string {
    return input.replace(/<[^>]+>/g, "").trim();
  }
}
