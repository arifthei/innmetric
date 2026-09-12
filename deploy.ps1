# Publish innmetric.com from this folder using netlify.toml (Next in web/).
# After one `netlify login`, no dashboard is required for the build itself.
# Do not pass --dir .; that would publish the old static root.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
npm run lint:copy
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
npx --yes netlify-cli deploy --prod --build
