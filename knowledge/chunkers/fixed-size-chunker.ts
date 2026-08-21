import { Chunker, Chunk } from "./chunker";

export class FixedSizeChunker extends Chunker {
  constructor(private size: number = 512) {
    super();
  }

  chunk(text: string): Chunk[] {
    const chunks: Chunk[] = [];
    let index = 0;

    while (index < text.length) {
      const slice = text.slice(index, index + this.size);
      chunks.push({
        id: crypto.randomUUID(),
        content: slice,
        metadata: { type: "fixed", size: this.size }
      });
      index += this.size;
    }

    return chunks;
  }
}
