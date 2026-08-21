# Cache Data

Ephemeral cache used for:

- Response caching (RAG, models).
- Precomputed embeddings.
- Session-level state.

Do **not** store PII or long-term data here. Safe to purge at any time.
