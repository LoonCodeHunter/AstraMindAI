export class VectorStore {
  private store: any[] = [];

  add(entry: any) {
    this.store.push(entry);
  }

  search(vector: number[], topK: number) {
    return this.store.slice(0, topK);
  }
}
