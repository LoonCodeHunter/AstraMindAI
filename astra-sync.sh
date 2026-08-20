#!/bin/bash

REPO_DIR="$HOME/AstraMindAI"
LOG_FILE="$REPO_DIR/.sync-log.txt"
BRANCH="main"

echo "=== AstraMindAI Auto Sync ===" | tee -a $LOG_FILE
echo "Timestamp: $(date)" | tee -a $LOG_FILE

cd $REPO_DIR || { echo "Repo not found"; exit 1; }

echo "[1] Stashing local changes..." | tee -a $LOG_FILE
git stash -u

echo "[2] Pulling latest changes from GitHub..." | tee -a $LOG_FILE
git pull origin $BRANCH --rebase

echo "[3] Applying stashed changes..." | tee -a $LOG_FILE
git stash pop || echo "No stash to apply."

echo "[4] Auto-resolving conflicts..." | tee -a $LOG_FILE
git add .
git commit -m "auto-merge: $(date)" || echo "No commit needed."

echo "[5] Pushing updates back to GitHub..." | tee -a $LOG_FILE
git push origin $BRANCH

echo "[6] Sync complete." | tee -a $LOG_FILE
