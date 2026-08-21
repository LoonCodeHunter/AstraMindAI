# AstraMindAI API Reference

This document provides a high-level overview of the AstraMindAI HTTP API surface, including authentication, chat endpoints, model management, and settings.

## Base URL
All endpoints are served under:


## Endpoints

### Auth
- `POST /auth/login` — Authenticate a user and return a session token.

### Chat
- `POST /chat` — Send a message and receive an AI-generated response.

### History
- `GET /history` — Retrieve conversation history for the authenticated user.

### Models
- `GET /models` — List available AI models and metadata.

### Settings
- `GET /settings` — Retrieve user-specific settings.

