# GPU Auto-Scaling Strategy

## Signals

- **Primary:** P95 inference latency vs SLO.
- **Secondary:** GPU utilization, queue depth, error rate.

## Scaling Rules

- **Scale Up:**
  - If P95 latency > SLO for 3 consecutive windows.
  - Or GPU utilization > 85% for 5 minutes.
- **Scale Down:**
  - If P95 latency < 50% of SLO and utilization < 40% for 15 minutes.

## Safeguards

- Hard cap on maximum GPU nodes per region.
- Cooldown periods between scale operations.
- Canary nodes for new driver/runtime versions.
