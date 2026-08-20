export interface V2ChatRequest {
  message: string;
  sessionId: string;
}

export interface V2ChatResponse {
  version: 'v2';
  sessionId: string;
  agentsUsed: string[];
  reply: string;
  safety: {
    passed: boolean;
    filters: string[];
  };
}
