/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_ENV: string;
  readonly APP_PORT: string;
  readonly BACKEND_URL: string;
  readonly FRONTEND_URL: string;
  readonly ML_SERVICE_URL: string;
  readonly LLM_PROVIDER: string;
  readonly LLM_MODEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
