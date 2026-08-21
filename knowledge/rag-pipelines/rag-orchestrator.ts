export class RagOrchestrator {
  constructor(private pipeline: any) {}

  async run(query: string) {
    const chunks = this.pipeline.chunker.chunk(query);
    const embeddings = chunks.map((c: any) => this.pipeline.embedder.embed(c.content));
    const retrieved = this.pipeline.retriever.retrieve(embeddings);
    const reranked = this.pipeline.reranker.rerank(retrieved);
    return this.pipeline.generator.generate(query, reranked);
  }
}
