# Storage Architecture

## Layers

- **Hot:** NVMe SSD for active models and embeddings.
- **Warm:** Block storage for DBs and queues.
- **Cold:** Object storage for archives and datasets.

## Data Governance

- Encryption at rest and in transit.
- Key management via KMS.
- Lifecycle policies for log and dataset retention.
