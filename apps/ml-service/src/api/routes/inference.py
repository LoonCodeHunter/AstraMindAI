from fastapi import APIRouter
from pydantic import BaseModel
from ..models.summarizer import summarize_text

router = APIRouter()

class InferenceRequest(BaseModel):
  text: str

@router.post("/")
async def inference(req: InferenceRequest):
  summary = summarize_text(req.text)
  return {"summary": summary}
