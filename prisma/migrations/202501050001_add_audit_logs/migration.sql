CREATE TABLE audit_logs (
  id TEXT PRIMARY KEY,
  action TEXT NOT NULL,
  user_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
