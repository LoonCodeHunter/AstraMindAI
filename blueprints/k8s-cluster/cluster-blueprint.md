# AstraMindAI Kubernetes Cluster Blueprint

## Goals

- **Multi-tenant** AI workloads with strong isolation.
- **Resilient** control plane and worker nodes.
- **Observability-first** design.

## Logical Layout

- **Namespaces:**
  - `platform-system`
  - `astramind-backend`
  - `astramind-frontend`
  - `astramind-ml-service`
  - `astramind-worker`
- **Node Pools:**
  - `system` (control plane & infra)
  - `cpu-general`
  - `gpu-inference`
  - `gpu-training`

## Core Add-ons

- Ingress controller (e.g., NGINX or Envoy).
- Service mesh (e.g., Istio or Linkerd).
- Metrics stack (Prometheus + Grafana).
- Logging stack (Loki/ELK).
- Policy engine (OPA/Gatekeeper).
