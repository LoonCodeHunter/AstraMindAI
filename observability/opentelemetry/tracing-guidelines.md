# Tracing Guidelines

To ensure consistent tracing:

- Use a root span for each request.
- Add spans for major operations (DB, ML inference, external calls).
- Include metadata such as model version, user ID (hashed), and latency.
- Avoid sensitive data in spans.
