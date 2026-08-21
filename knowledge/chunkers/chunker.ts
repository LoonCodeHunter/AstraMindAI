export interface Chunk {
  id: string;
  content: string;
  metadata?: Record<string, unknown>;
}

export abstract class Chunker {
  abstract chunk(text: string): Chunk[];
}
