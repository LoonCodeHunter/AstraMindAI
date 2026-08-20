# ============================
# AstraMindAI Auto Sync Script
# ============================

$RepoDir = "$HOME\AstraMindAI"
$Branch = "main"
$LogFile = "$RepoDir\.sync-log.txt"

Write-Output "=== AstraMindAI Auto Sync ===" | Tee-Object -FilePath $LogFile -Append
Write-Output "Timestamp: $(Get-Date)" | Tee-Object -FilePath $LogFile -Append

# 1. Move into repo
Set-Location $RepoDir

# 2. Save local changes
Write-Output "[1] Stashing local changes..." | Tee-Object -FilePath $LogFile -Append
git stash -u

# 3. Pull latest from GitHub
Write-Output "[2] Pulling latest changes from GitHub..." | Tee-Object -FilePath $LogFile -Append
git pull origin $Branch --rebase

# 4. Reapply local changes
Write-Output "[3] Applying stashed changes..." | Tee-Object -FilePath $LogFile -Append
git stash pop

# 5. Auto-resolve conflicts
Write-Output "[4] Auto-resolving conflicts..." | Tee-Object -FilePath $LogFile -Append
git add .
git commit -m "auto-sync: $(Get-Date)" | Out-Null

# 6. Push back to GitHub
Write-Output "[5] Pushing updates to GitHub..." | Tee-Object -FilePath $LogFile -Append
git push origin $Branch

Write-Output "[6] Sync complete." | Tee-Object -FilePath $LogFile -Append
