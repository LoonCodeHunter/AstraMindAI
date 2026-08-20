.PHONY: install dev backend frontend ml worker lint test build

install:
    pnpm install

dev:
    pnpm dev

backend:
    pnpm --filter backend dev

frontend:
    pnpm --filter frontend dev

ml:
    pnpm --filter ml-service dev

worker:
    pnpm --filter worker dev

lint:
    pnpm lint

test:
    pnpm test

build:
    pnpm build
