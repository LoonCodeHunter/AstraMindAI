#!/bin/bash
set -e

echo "Building AstraMindAI..."
npm install
npm run build
echo "Build complete."
