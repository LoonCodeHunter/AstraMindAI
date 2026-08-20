from ..pipelines.chat_preprocessing import preprocess

def test_preprocess():
  assert preprocess(" hi ") == "hi"
