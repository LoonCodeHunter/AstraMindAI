import json
from pathlib import Path

def run_elt():
  raw_dir = Path("data/raw")
  dw_dir = Path("data/processed/evaluation")
  dw_dir.mkdir(parents=True, exist_ok=True)

  for path in raw_dir.rglob("*.jsonl"):
    out = dw_dir / path.name
    out.write_text(path.read_text(), encoding="utf-8")

if __name__ == "__main__":
  run_elt()
