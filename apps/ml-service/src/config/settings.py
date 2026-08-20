from pydantic import BaseSettings

class Settings(BaseSettings):
  model_dir: str = "models"
  env: str = "development"

settings = Settings()
