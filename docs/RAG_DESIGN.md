# Retrieval-Augmented Generation (RAG) Design

AstraMindAI uses a modular RAG pipeline:

1. **Chunking** — Documents split into semantic units.
2. **Embedding** — Vector representations generated.
3. **Retrieval** — Top-k relevant chunks selected.
4. **Reranking** — Candidate ranking for relevance.
5. **Generation** — Final response produced using context.

Safety filters applied at each stage.
