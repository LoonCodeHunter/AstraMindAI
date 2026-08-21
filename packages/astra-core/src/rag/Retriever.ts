export class Retriever {
  retrieve(embeddings: number[][]) {
    return embeddings.slice(0, 3);
  }
}
