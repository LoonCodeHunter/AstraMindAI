import { VectorDbClient } from "./vectordb-client";

export class VectorStore {
  constructor(private client: VectorDbClient) {}

  async add(entry: any) {
    return this.client.insert(entry.id, entry.vector, entry.metadata);
  }

  async search(vector: number[], topK: number) {
    return this.client.query(vector, topK);
  }
}
