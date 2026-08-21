#!/bin/bash
set -e

ENV=$1

echo "Deploying to $ENV..."
helm upgrade --install astramind-$ENV infra/helm/astra-mind-ai -f infra/helm/astra-mind-ai/values.$ENV.yaml
echo "Deployment complete."
