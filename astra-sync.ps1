# ==========================================
# AstraMindAI Two-Way Sync (Windows)
# Safe, clean, no logs
# ==========================================

$RepoDir = "C:\Users\jesse\HyperbyteInnovations\Projects\AstraMindAI"
$Branch = "main"

Set-Location $RepoDir

# Save local changes
git stash -u | Out-Null

# Pull from GitHub
git pull origin $Branch --rebase | Out-Null

# Reapply local changes
git stash pop | Out-Null

# Add and commit local changes
git add .
git commit -m "sync" | Out-Null

# Push to GitHub
git push origin $Branch | Out-Null
