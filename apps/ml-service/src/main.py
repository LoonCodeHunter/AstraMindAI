from fastapi import FastAPI
from .routes.health import router as health_router
from .routes.inference import router as inference_router
from .routes.models import router as models_router

app = FastAPI(title="AstraMind ML Service")

app.include_router(health_router, prefix="/health")
app.include_router(inference_router, prefix="/inference")
app.include_router(models_router, prefix="/models")
