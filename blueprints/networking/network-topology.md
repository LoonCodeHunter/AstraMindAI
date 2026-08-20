# Network Topology

## External

- Public load balancer for:
  - `api.astramind.ai`
  - `app.astramind.ai`
- Private load balancer for:
  - ML service internal APIs.
  - Worker queue endpoints.

## Internal

- Service mesh for:
  - mTLS between services.
  - Traffic shaping and retries.
- Dedicated subnets for:
  - GPU nodes.
  - Storage backends.
