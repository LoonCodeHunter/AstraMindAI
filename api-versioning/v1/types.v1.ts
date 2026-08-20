export interface V1ChatRequest {
  message: string;
}

export interface V1ChatResponse {
  version: 'v1';
  reply: string;
}
