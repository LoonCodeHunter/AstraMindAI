# GPU Node Configuration

This document defines the reference configuration for GPU-enabled nodes used by AstraMindAI for training, fine-tuning, and high-throughput inference workloads.

## Objectives

- **Reliability:** Isolate GPU workloads from general-purpose nodes.
- **Performance:** Optimize PCIe, NUMA, and IO paths for low-latency inference.
- **Security:** Enforce strict workload isolation and image provenance.

## Hardware Profile

- **GPU:** NVIDIA A100 / H100 (preferred), minimum 40 GB VRAM
- **CPU:** 32+ vCPUs, AVX2/AVX-512 support
- **Memory:** 256+ GB RAM
- **Storage:**
  - NVMe local SSD for scratch space (`/var/lib/gpu-scratch`)
  - Network-attached storage for model artifacts
- **Networking:**
  - 25–100 Gbps NIC
  - SR-IOV enabled where supported

## OS & Drivers

- **Base OS:** Ubuntu LTS (22.04+)
- **Kernel:** Low-latency tuned kernel
- **GPU Drivers:**
  - NVIDIA driver pinned to a tested version
  - CUDA toolkit pinned per release train
- **Container Runtime:**
  - `containerd` with NVIDIA runtime (`nvidia-container-runtime`)

## Node Labels & Taints

```yaml
apiVersion: v1
kind: Node
metadata:
  labels:
    astramind.ai/node-type: gpu
    astramind.ai/workload-tier: inference
    astramind.ai/gpu-vendor: nvidia
  annotations:
    astramind.ai/gpu-profile: a100-40gb
spec:
  taints:
    - key: astramind.ai/gpu-only
      value: "true"
      effect: NoSchedule
```
## Security Baseline

Image Policy:
- Only signed images from trusted registries.

### Runtime Security:
- Mandatory seccomp profiles.
- Read-only root filesystem for inference workloads.

### Access Control:
- No SSH access by default.
- Access via break-glass procedure only.

## Observability

### Metrics:
-GPU utilization, memory, temperature, ECC errors.

### Logs:
- Driver logs shipped to central logging.

### Tracing:
-Inference pipeline spans tagged with gpu-node-id.

## Capacity Planning
- Target 70–80% sustained GPU utilization.
### Auto-scaling based on:
-Queue depth (inference requests).
-Latency SLOs.
-GPU memory pressure.


#### `gpu-nodepool.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: astramind-gpu-nodepool-controller
  labels:
    app: astramind-gpu-nodepool
spec:
  replicas: 2
  selector:
    matchLabels:
      app: astramind-gpu-nodepool
  template:
    metadata:
      labels:
        app: astramind-gpu-nodepool
    spec:
      serviceAccountName: gpu-nodepool-sa
      containers:
        - name: gpu-nodepool-operator
          image: registry.astramind.ai/platform/gpu-nodepool-operator:stable
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "1"
              memory: "1Gi"
          env:
            - name: GPU_NODE_LABEL
              value: "astramind.ai/node-type=gpu"
            - name: TARGET_UTILIZATION
              value: "0.75"
            - name: MAX_NODES
              value: "50"
          readinessProbe:
            httpGet:
              path: /healthz
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /livez
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 30
