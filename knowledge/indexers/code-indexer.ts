import { Indexer, IndexEntry } from "./indexer";

export class CodeIndexer extends Indexer {
  index(text: string): IndexEntry {
    return {
      id: crypto.randomUUID(),
      vector: [text.length],
      metadata: { language: "unknown", type: "code" }
    };
  }
}

