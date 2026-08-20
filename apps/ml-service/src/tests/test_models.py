from ..models.astra_embeddings_model import embed

def test_embed():
  assert isinstance(embed("hi")[0], float)
