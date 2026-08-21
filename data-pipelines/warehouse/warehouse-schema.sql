CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  created_at TIMESTAMP,
  summary TEXT
);

CREATE TABLE IF NOT EXISTS models_eval (
  id SERIAL PRIMARY KEY,
  model_id TEXT,
  metric TEXT,
  value DOUBLE PRECISION,
  created_at TIMESTAMP DEFAULT NOW()
);
