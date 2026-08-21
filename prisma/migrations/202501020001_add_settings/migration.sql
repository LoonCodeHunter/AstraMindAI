CREATE TABLE settings (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  theme TEXT,
  model TEXT
);
