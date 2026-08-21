export class VectorDbClient {
  constructor(private url: string) {}

  async insert(id: string, vector: number[], metadata: any) {
    return { id, vector, metadata };
  }

  async query(vector: number[], topK: number) {
    return [];
  }
}
