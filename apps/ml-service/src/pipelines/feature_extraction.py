from ..models.astra_embeddings_model import embed

def extract_features(text: str):
  return embed(text)
