param(
    [string]$RepoPath = "C:\Users\jesse\HyperbyteInnovations\Projects\AstraMindAI",
    [int]$IntervalSeconds = 30
)

Write-Host "AstraMindAI auto-sync starting..." -ForegroundColor Cyan
Write-Host "Repo: $RepoPath" -ForegroundColor Cyan
Write-Host "Interval: $IntervalSeconds seconds" -ForegroundColor Cyan

Set-Location $RepoPath

function Invoke-GitSync {
    try {
        # Pull latest from remote first (two-way sync)
        git fetch origin
        git pull origin main --rebase

        # Stage all changes
        git add -A

        # Only commit if there are changes
        $status = git status --porcelain
        if ($status) {
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            git commit -m "auto-sync: $timestamp"
            git push origin main
        }
    } catch {
        # Silent failure (no logs), just ignore
    }
}

while ($true) {
    Invoke-GitSync
    Start-Sleep -Seconds $IntervalSeconds
}
