# Network Policies

## Principles

- Default deny for cross-namespace traffic.
- Explicit allow for:
  - Backend → ML service.
  - Frontend → Backend.
  - Worker → ML service & backend.

## Example Policy: Backend → ML Service

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: backend-to-ml
  namespace: astramind-ml-service
spec:
  podSelector: {}
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              astramind.ai/tenant: api
      ports:
        - protocol: TCP
          port: 8080

#### `network-topology.md`

```

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
