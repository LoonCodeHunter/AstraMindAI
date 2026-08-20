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
