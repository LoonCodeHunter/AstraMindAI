from ..models.summarizer import summarize_text

def test_summarize():
  assert summarize_text("hello") == "hello"
