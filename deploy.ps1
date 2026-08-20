# Publish innmetric.com from this folder. After one `netlify login`, no dashboard is required.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
npm run lint:copy
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
npx --yes netlify deploy --prod --dir .
