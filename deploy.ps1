# Publish innmetric.com from this folder. After one `netlify login`, no dashboard is required.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
npx --yes netlify deploy --prod --dir .
