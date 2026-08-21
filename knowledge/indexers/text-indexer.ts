import { Indexer, IndexEntry } from "./indexer";

export class TextIndexer extends Indexer {
  index(text: string): IndexEntry {
    return {
      id: crypto.randomUUID(),
      vector: [text.split(/\s+/).length],
      metadata: { type: "text" }
    };
  }
}
