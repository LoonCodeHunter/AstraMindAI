import { Chunker, Chunk } from "./chunker";

export class SemanticChunker extends Chunker {
  chunk(text: string): Chunk[] {
    const sentences = text.split(/(?<=[.!?])\s+/);
    return sentences.map((s) => ({
      id: crypto.randomUUID(),
      content: s,
      metadata: { type: "semantic" }
    }));
  }
}
