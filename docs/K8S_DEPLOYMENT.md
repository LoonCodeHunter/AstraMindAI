# Kubernetes Deployment Guide

AstraMindAI runs on a multi-namespace Kubernetes cluster:

- `astramind-backend`
- `astramind-frontend`
- `astramind-ml-service`
- `astramind-worker`

Key components:
- Ingress controller
- Network policies
- Autoscaling (HPA)
- Secrets management
- ConfigMaps for environment-specific configuration
