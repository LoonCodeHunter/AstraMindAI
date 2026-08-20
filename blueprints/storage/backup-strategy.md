# Backup Strategy

## Scope

- PostgreSQL / relational DBs.
- Vector DBs.
- Object storage buckets (models, logs, datasets).

## RPO/RTO

- **RPO:** ≤ 15 minutes for critical data.
- **RTO:** ≤ 1 hour for core services.

## Approach

- Incremental backups with daily full snapshots.
- Cross-region replication for disaster recovery.
- Regular restore drills with automated verification.
