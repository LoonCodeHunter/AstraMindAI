# ==========================================
# AstraMindAI Two-Way Auto Sync (Windows)
# ==========================================

$RepoDir = "C:\Users\jesse\HyperbyteInnovations\Projects\AstraMindAI"
$Branch = "main"
$LogFile = "$RepoDir\.sync-log.txt"

# Timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Add-Content -Path $LogFile -Value "`n=== Sync Run: $timestamp ==="

# Move into repo
Set-Location $RepoDir

# Step 1 — Stash local changes
Add-Content -Path $LogFile -Value "[1] Stashing local changes..."
git stash -u | Out-Null

# Step 2 — Pull latest from GitHub
Add-Content -Path $LogFile -Value "[2] Pulling from GitHub..."
git pull origin $Branch --rebase | Out-Null

# Step 3 — Reapply local changes
Add-Content -Path $LogFile -Value "[3] Applying stashed changes..."
git stash pop | Out-Null

# Step 4 — Auto-add and commit
Add-Content -Path $LogFile -Value "[4] Committing changes..."
git add .
git commit -m "auto-sync: $timestamp" | Out-Null

# Step 5 — Push back to GitHub
Add-Content -Path $LogFile -Value "[5] Pushing to GitHub..."
git push origin $Branch | Out-Null

Add-Content -Path $LogFile -Value "[6] Sync complete."
