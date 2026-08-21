# CI/CD Pipeline Overview

AstraMindAI uses a multi-stage CI/CD pipeline:

1. **Build** — Compile backend, frontend, worker, and ML service.
2. **Test** — Unit, integration, and e2e tests.
3. **Security** — Dependency scanning, secret scanning.
4. **Package** — Docker images built and tagged.
5. **Deploy** — Environment-specific rollout via GitHub Actions + Helm.
6. **Verify** — Post-deployment smoke tests and health checks.

All environments (dev, staging, prod) follow the same structure with different configuration values.
