export interface IndexEntry {
  id: string;
  vector: number[];
  metadata?: Record<string, unknown>;
}

export abstract class Indexer {
  abstract index(text: string): IndexEntry;
}
