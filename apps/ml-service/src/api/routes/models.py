from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_models():
  return [
    {"id": "astramind-embed-v1", "type": "embeddings"},
    {"id": "astramind-intent-v1", "type": "intent"},
    {"id": "astramind-rerank-v1", "type": "reranker"},
    {"id": "astramind-toxicity-v1", "type": "toxicity"},
  ]
