def summarize_text(text: str):
  if len(text) <= 200:
    return text
  return text[:200] + "..."
