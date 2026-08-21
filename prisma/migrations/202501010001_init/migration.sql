-- Initial migration
CREATE TABLE model_registry (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
