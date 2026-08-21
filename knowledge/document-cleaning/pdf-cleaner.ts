import { Cleaner } from "./cleaner";

export class PdfCleaner extends Cleaner {
  clean(input: string): string {
    return input.replace(/\s+/g, " ").trim();
  }
}
