from pathlib import Path

def normalize(line: str) -> str:
  return line.strip()

def run_etl():
  src = Path("data/raw/raw-conversations.jsonl")
  dst = Path("data/datasets/cleaned/cleaned-conversations.jsonl")
  dst.parent.mkdir(parents=True, exist_ok=True)

  with src.open("r", encoding="utf-8") as fin, dst.open("w", encoding="utf-8") as fout:
    for line in fin:
      fout.write(normalize(line) + "\n")

if __name__ == "__main__":
  run_etl()
