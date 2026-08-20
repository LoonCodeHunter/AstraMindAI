from fastapi import Request

async def log_request(request: Request, call_next):
  print(f"[ML] {request.method} {request.url}")
  response = await call_next(request)
  return response
